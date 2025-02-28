import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink } from "react-router";
import { Button } from "@heroui/button";
import { Input } from "@heroui/react";

import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="w-[450px] bg-gray-200 backdrop-blur-md rounded-lg p-10">
                <h1 className="text-2xl font-helvetica mb-[20px]">Sistema de Administração Musical</h1>
                <div className="bg-blue-200 p-2 rounded-md text-center mb-[20px] ">
                    Informe email e senha para acessar
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="relative mt-4 mb-4">
                        <input
                            type="text"
                            placeholder="E-mail..."
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 pr-10 border border-black border-custom-red  rounded-[8px] focus:outline-none"
                        />
                        <FaUser className="absolute top-3 right-3 text-gray-500" />
                    </div>


                    <div className="relative mt-4 mb-4">
                        <input
                            type="password"
                            placeholder="Senha..."
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 pr-10 border  border-black border-custom-red rounded-[8px] focus:outline-none"
                        />
                        <FaLock className="absolute top-3 right-3 text-gray-500" />
                    </div>
                    <Button className="w-full mt-3 mb--5" color="primary" variant="ghost" >Acessar o Sistema</Button>
                </form>
                <br />
                <div className="text-center ">
                    <NavLink to="/Senha" className="text-blue-500 hover:underline">Esqueci minha senha</NavLink>
                </div>
            </div>
        </>
    );
};

export default Login;
