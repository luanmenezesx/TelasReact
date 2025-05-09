import { Suspense, use, useState } from "react";
import { Skeleton } from "@heroui/skeleton";

interface Comentario {
    id: number;
    texto: string;
    userId: number;
}

const comentariosPromise = fetchComentarios();

const ComentariosTeste = () => {
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
                <Suspense fallback={<CarregandoComentarios />}>
                    <Comentarios comentariosPromise={comentariosPromise} />
                </Suspense>
            </div>
        </div>
    );
};

const Comentarios = ({ comentariosPromise }: { comentariosPromise: Promise<Comentario[]> }) => {
    const comentarios = use(comentariosPromise);

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

    // <div className="justify-center items-center h-full bg-black">
    //     <Skeleton className="rounded-lg">
    //         <div className="justify-center items-center bg-black-100" />
    //     </Skeleton>
    //     {/* <div className="space-y-3">
    //         <Skeleton className="w-3/5 rounded-lg">
    //             <div className="h-3 w-3/5 rounded-lg bg-default-200" />
    //         </Skeleton>
    //         <Skeleton className="w-4/5 rounded-lg">
    //             <div className="h-3 w-4/5 rounded-lg bg-default-200" />
    //         </Skeleton>
    //         <Skeleton className="w-2/5 rounded-lg">
    //             <div className="h-3 w-2/5 rounded-lg bg-default-300" />
    //         </Skeleton>
    //     </div> */}
    // </div>

);

export default ComentariosTeste;
