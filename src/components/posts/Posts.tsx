import { useState } from "react";

interface Post {
    titulo: string;
    conteudo: string;
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [novoTitulo, setNovoTitulo] = useState("");
    const [novoConteudo, setNovoConteudo] = useState("");

    const adicionarPost = () => {
        if (novoTitulo.trim() !== "" && novoConteudo.trim() !== "") {
            setPosts([...posts, { titulo: novoTitulo, conteudo: novoConteudo }]);
            setNovoTitulo("");
            setNovoConteudo("");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-[450px] bg-gray-200 backdrop-blur-md rounded-lg p-10">
                <h2 className="text-2xl font-helvetica mb-[20px]">Posts</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Digite o título..."
                        value={novoTitulo}
                        onChange={(e) => setNovoTitulo(e.target.value)}
                        className="w-full p-2 border border-black rounded-[8px] focus:outline-none"
                    />
                    <textarea
                        placeholder="Digite o conteúdo..."
                        value={novoConteudo}
                        onChange={(e) => setNovoConteudo(e.target.value)}
                        className="w-full p-2 border border-black rounded-[8px] focus:outline-none mt-2"
                    />
                    <button
                        onClick={adicionarPost}
                        className="w-full mt-3 bg-blue-500 text-white p-2 rounded-md"
                    >
                        Adicionar Post
                    </button>
                </div>

                {/* Área de listagem de posts com rolagem e quebra automática */}
                <div className="mt-4 h-[300px] overflow-y-auto border border-gray-400 rounded-md p-2 bg-white">
                    {posts.length === 0 ? (
                        <p className="text-gray-500">Nenhum post ainda.</p>
                    ) : (
                        posts.map((post, index) => (
                            <div key={index} className="bg-gray-100 p-3 rounded-md mb-2">
                                <h3 className="font-bold break-words">{post.titulo}</h3>
                                <p className="break-words">{post.conteudo}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Posts;
