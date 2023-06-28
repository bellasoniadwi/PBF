import React from "react";

const PostMahasiswa = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-mahasiswa">
                <img src="https://2.bp.blogspot.com/-WSBm5s-SXJA/WGMwNMeAfJI/AAAAAAAABHM/BTT5cbgbChsamZP8EHOK3Su7rFv55GXgACLcB/s1600/Pendaftaran%2BPolinema%2B.png" alt="Gambar Tumbnail Mahasiswa" />
            </div>
            <div className="konten-mahasiswa">
                <div className="nim-mahasiswa">{props.NIM}</div>
                <p className="isi-mahasiswa"> {props.nama}</p>
                <p className="isi-mahasiswa"> {props.alamat}</p>
                <p className="isi-mahasiswa"> {props.hp}</p>
                <p className="isi-mahasiswa"> {props.angkatan}</p>
                <p className="isi-mahasiswa"> {props.status}</p>
            </div>
            <button className="btn-sm" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
        </div>

    )
}

export default PostMahasiswa;