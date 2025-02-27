import { useState } from "react";
import { FaUser, FaEnvelope, FaBirthdayCake, FaMusic } from "react-icons/fa";
import { useParams } from "react-router";
import "./Alunos.css";

const CadastrarAluno = () => {
    const { idAluno } = useParams();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [instrumento, setInstrumento] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para salvar o aluno
        console.log("Aluno cadastrado:", { idAluno, nome, email, idade, instrumento });
    };

    return (
        <div className="container">
            <h1>Cadastrar Aluno {idAluno}</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FaEnvelope className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="number"
                        placeholder="Idade"
                        required
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                    <FaBirthdayCake className="icon" />
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Instrumento"
                        required
                        value={instrumento}
                        onChange={(e) => setInstrumento(e.target.value)}
                    />
                    <FaMusic className="icon" />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default CadastrarAluno;
