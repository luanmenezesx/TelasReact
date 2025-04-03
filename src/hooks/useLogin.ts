import { useState } from "react";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (username: string, password: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) throw new Error("Erro ao autenticar");

            const users = await response.json();
            const user = users.find((user: any) => user.email === username);

            if (!user) throw new Error("Usuário não encontrado");
            if (password.length < 8) throw new Error("Senha inválida");

            alert("Login realizado com sucesso!");
            return user;
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useLogin;
