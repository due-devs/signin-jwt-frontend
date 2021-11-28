import React, { useState } from "react";
import axios from "axios";

function RegisterForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { username, password };

        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/user/new",
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                alert("User Logged In");
                const token = res.data.token;
                localStorage.setItem("app_token", token);
                setUsername("");
                setPassword("");
            })
            .catch((e) => {
                alert("Authentication Failed");
                setUsername("");
                setPassword("");
            });
    };

    return (
        <div>
            <p>Register Form</p>
            <form>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        placeholder="username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <button type="submit" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
