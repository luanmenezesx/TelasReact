import { useState } from "react";
import { FaUser, FaEnvelope, FaBirthdayCake, FaMusic } from "react-icons/fa";
import { useParams } from "react-router";
import { Button } from "@heroui/button";

const CadastrarAluno = () => {
    const { idAluno } = useParams();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [instrumento, setInstrumento] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log("Aluno cadastrado:", { idAluno, nome, email, idade, instrumento });
    };

    return (
        <div className="w-[450px] bg-gray-200 backdrop-blur-md rounded-lg p-10">
            <h1 className="text-2xl font-helvetica mb-[20px]">Cadastrar Aluno</h1>
            <div className="bg-blue-200 p-2 rounded-md text-center mb-[20px] ">
                Informe os dados do aluno
            </div>
            <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="relative mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="relative mb-4">
                    <input
                        type="number"
                        placeholder="Idade"
                        required
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaBirthdayCake className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div className="relative mb-4">
                    <input
                        type="text"
                        placeholder="Instrumento"
                        required
                        value={instrumento}
                        onChange={(e) => setInstrumento(e.target.value)}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaMusic className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <Button className="w-full mt-3 mb--5" color="primary" variant="ghost">Cadastrar Aluno</Button>
            </form>
        </div>
    );
};

export default CadastrarAluno;
