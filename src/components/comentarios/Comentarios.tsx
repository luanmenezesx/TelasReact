import { useState } from "react";

const Comentarios = () => {
    const [comentarios, setComentarios] = useState<string[]>([]);
    const [novoComentario, setNovoComentario] = useState("");

    const adicionarComentario = () => {
        if (novoComentario.trim() !== "") {
            setComentarios([...comentarios, novoComentario]);
            setNovoComentario("");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[450px] bg-gray-200 backdrop-blur-md rounded-lg p-10">
                <h2 className="text-2xl font-helvetica mb-[20px]">Comentários</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Digite seu comentário..."
                        value={novoComentario}
                        onChange={(e) => setNovoComentario(e.target.value)}
                        className="w-full p-2 border border-black rounded-[8px] focus:outline-none"
                    />
                    <button
                        onClick={adicionarComentario}
                        className="w-full mt-3 bg-blue-500 text-white p-2 rounded-md"
                    >
                        Adicionar Comentário
                    </button>
                </div>

                <ul className="mt-4">
                    {comentarios.length === 0 ? (
                        <p className="text-gray-500">Nenhum comentário ainda.</p>
                    ) : (
                        comentarios.map((comentario, index) => (
                            <li key={index} className="bg-white p-2 border rounded-md mb-2">
                                {comentario}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Comentarios;
