import React, { Component } from "react";
import PostMahasiswa from "../component/MahasiswaPost/PostMahasiswa";
import './MahasiswaPost.css';

class MahasiswaPost extends Component {
    state = {               // komponen state dari React untuk statefull component
        listMahasiswa: [],  // variabel array yang digunakan untuk menyimpan data API
        insertArtikel:{     // variabel yang digunakan untuk menampung sementara data yang akan diinsert
            NIM: "",      // kolom mengikuti kolom yang ada pada listMahasiswa.json
            id: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {    
        fetch('http://localhost:3002/mahasiswa?_sort=id&_order=desc') // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())  // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount(){    // komponen untuk mengecek ketika component telah di mount-ing maka panggil API
        this.ambilDataDariServerAPI()   // ambil data dari server API lokal
    }

    handleHapusMahasiswa = (data) => {        // fungsi yang meng-handle button action hapus data
        fetch(`http://localhost:3002/mahasiswa/${data}`,{method: 'DELETE'})     // alamat URL API yang ingin kita hapus datanya
        .then(res => {          // ketika proses hapus berhasil, maka ambil data dari server API lokal
            this.ambilDataDariServerAPI()
        })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp; 
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState( {
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/mahasiswa', {
            method: 'post',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
        .then( ( Response ) => {
            this.ambilDataDariServerAPI();
        });
    }

    render() {
        return (
            <div className="post-Mahasiswa">
                <h4 class="judul_form">Tambah Data Mahasiswa</h4>
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                        <input name="nama" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                        <input name="alamat" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">No HP</label>
                        <div className="col-sm-10">
                        <input name="hp" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                        <input name="angkatan" cols="1" rows="1"  className="form-control" col="3" onChange={this.handleTambahMahasiswa}></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Status Mahasiswa</label>
                        <div className="col-sm-10">
                        <input name="status" cols="1" rows="1" className="form-control" col="3" onChange={this.handleTambahMahasiswa}></input>
                        </div>
                    </div>
                    <div className="forbutton">
                        <button type="submit" className="btn-simpan" onClick={this.handleTombolSimpan} >Simpan</button>
                    </div>
                </div>
                <h4 class="judul_form">Daftar Mahasiswa</h4>
                {
                    this.state.listMahasiswa.map(Mahasiswa => {
                        return <PostMahasiswa key={Mahasiswa.id} NIM={Mahasiswa.NIM} nama={Mahasiswa.nama} alamat={Mahasiswa.alamat} hp={Mahasiswa.hp} angkatan={Mahasiswa.angkatan} status={Mahasiswa.status} idMahasiswa={Mahasiswa.id} hapusMahasiswa = {this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default MahasiswaPost;
