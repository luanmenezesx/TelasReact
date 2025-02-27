import { useState } from "react";
import { FaLock } from "react-icons/fa";
import "./Senha.css";
import { NavLink } from "react-router";

const Senha = () => {
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
            Informe e confirme a nova senha
        </div>
            <form onSubmit={handleSubmit}>
                <div className="relative mt-4 mb-4">
                    <input
                        type="password"
                        placeholder="Informe a nova senha"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                         className="w-full p-2 pr-10 border border-black border-custom-red  rounded-[8px] focus:outline-none"
                    />
                    <FaLock className="absolute top-3 right-3 text-gray-500" />
                </div>
                <div className="relative mt-4 mb-4">
                    <input
                        type="password"
                        placeholder="Repita a nova senha"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 pr-10 border  border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                     <FaLock className="absolute top-3 right-3 text-gray-500" />
                </div>
                <button type="submit" className="w-full mt-3 mb--5 bg-blue-500 text-white py-2 rounded-[8px]  hover:bg-blue-600 ">
                        <NavLink to="/Alunos" className="text-white no-underline  ">Acessar o Sistema</NavLink>
                    </button>
                </form>
        </div>
        </>
    );
};

export default Senha;