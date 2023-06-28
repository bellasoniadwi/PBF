import React from "react";
import './LoginComponent.css';

const LoginComponent = () => {
    return (
        <body>
            <h4 class="judul_form">Form Login</h4>
            <div class="kotak">
                <h3 class="teks_judul">Tugas Pertemuan <br></br>Ketiga</h3>
                <form class="login_form" action="" method="post" name="form">
                    <div class="group">
                        <label>Username</label>
                        <input name="username" type="text" placeholder="Masukkan Username" required></input>
                    </div>
                    <div class="group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Masukkan Password Anda" required></input>
                    </div>
                    <button type="submit">Login</button>
                    <br />
                </form>
                <div class="form-bawah">
                    <input type="checkbox" class="checkbox" />Remember Me
                    <br />
                    <button type="reset" class="cancel">Cancel</button>
                </div>
            </div>
        </body>
    );
}

export default LoginComponent;