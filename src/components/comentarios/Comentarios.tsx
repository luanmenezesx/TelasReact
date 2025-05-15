import { Suspense, useState } from "react";
import { Skeleton } from "@heroui/skeleton";
import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary, useSuspenseQuery } from "@tanstack/react-query";

interface Comentario {
    id: number;
    texto: string;
    userId: number;
}


const ComentariosTeste = () => {
const { reset } = useQueryErrorResetBoundary();

    const [novoComentario, setNovoComentario] = useState("");


    const adicionarComentario = () => {
        if (novoComentario.trim() !== "") {
            // setComentarios([
            //     ...comentarios,
            //     {
            //         id: comentarios.length + 1,
            //         texto: novoComentario,
            //         userId: Math.floor(Math.random() * 10) + 1,
            //     },
            // ]);
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
                    <Suspense fallback={<CarregandoComentarios />}>
                        <Comentarios />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
        
    );
};

const Comentarios = () => {
    const { data: comentarios } = useSuspenseQuery({
        queryKey: ['Comentários'],
        queryFn: () => {
            return fetchComentarios();
        },
    });


    return (

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
    );
};

async function fetchComentarios(): Promise<Comentario[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    if (!response.ok) {
        throw new Error("Erro ao buscar os comentários!");
    }
    const data = await response.json();
    return data.slice(0, 4).map((item: any) => ({
        id: item.id,
        texto: item.body,
        userId: item.postId,
    }));
}

const CarregandoComentarios = () => (
    /* <div className="flex justify-center items-center min-h-screen bg-gray-100">
       <p className="text-center text-xl">Carregando comentários...</p>
     </div>
     */

    <li className="bg-white p-2 border rounded-md mb-2">
        <p><Skeleton className="rounded-lg" /></p>
        <p className="text-gray-500 text-sm">ID do usuário: 1</p>
    </li>


);

export default ComentariosTeste;
