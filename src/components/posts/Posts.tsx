import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary, useSuspenseQuery } from "@tanstack/react-query";

interface Post {
    id: number;
    titulo: string;
    conteudo: string;
}

const Posts = () => {
    const { reset } = useQueryErrorResetBoundary();
    const [novoTitulo, setNovoTitulo] = useState("");
    const [novoConteudo, setNovoConteudo] = useState("");

    const adicionarPost = () => {
        if (novoTitulo.trim() !== "" && novoConteudo.trim() !== "") {
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

                <ErrorBoundary onReset={reset} fallbackRender={({ resetErrorBoundary }) => {
                    return (
                        <div className="error-container">
                            <h2 className="error-title">Erro ao carregar dados</h2>
                            <p className="error-message">Tente novamente mais tarde</p>
                            <button className="retry-button" onClick={(() => resetErrorBoundary())}>
                                Tente Novamente
                            </button>
                        </div>
                    );
                }}>
                    <Suspense fallback={<CarregandoPosts />}>
                        <ListaPosts />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
};

const ListaPosts = () => {
    const { data: posts } = useSuspenseQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    return (
        <div className="mt-4 h-[300px] overflow-y-auto border border-gray-400 rounded-md p-2 bg-white">
            {posts.length === 0 ? (
                <p className="text-gray-500">Nenhum post ainda.</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="bg-gray-100 p-3 rounded-md mb-2">
                        <h3 className="font-bold break-words">{post.titulo}</h3>
                        <p className="break-words">{post.conteudo}</p>
                    </div>
                ))
            )}
        </div>
    );
};

async function fetchPosts(): Promise<Post[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("sdfsdfsd");
    if (!response.ok) {
        throw new Error("Erro ao buscar os posts!");
    }
    const data = await response.json();
    return data.slice(0, 4).map((item: any) => ({
        id: item.id,
        titulo: item.title,
        conteudo: item.body,
    }));
}

const CarregandoPosts = () => (
    <div className="flex justify-center items-center h-[300px] bg-gray-200 rounded-md">
        <p className="text-xl text-gray-500">Carregando posts...</p>
    </div>
);

export default Posts;
