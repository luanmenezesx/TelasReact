import { useState, useEffect } from "react";

const Comentarios = () => {
    const [comentarios, setComentarios] = useState<{ id: number; texto: string; userId: number }[]>([]);
    const [novoComentario, setNovoComentario] = useState("");

    useEffect(() => {
        async function fetchComentarios() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/comments");
                if (!response.ok) {
                    throw new Error("Erro ao buscar os comentários!");
                }
                const data = await response.json();
                // Eu estou limitando os comentários
                const limitedData = data.slice(0, 3).map((item: any) => ({
                    id: item.id,
                    texto: item.body,
                    userId: item.postId,
                }));
                setComentarios(limitedData);
            } catch (error) {
                console.error("Erro:", Error);
            }
        }

        fetchComentarios();
    }, []);

    const adicionarComentario = () => {
        if (novoComentario.trim() !== "") {
            setComentarios([
                ...comentarios,
                { id: comentarios.length + 1, texto: novoComentario, userId: Math.floor(Math.random() * 10) + 1 }, // Simula ID de usuário
            ]);
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
                        comentarios.map((comentario) => (
                            <li key={comentario.id} className="bg-white p-2 border rounded-md mb-2">
                                <p>{comentario.texto}</p>
                                <p className="text-gray-500 text-sm">ID do usuário: {comentario.userId}</p>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Comentarios;
