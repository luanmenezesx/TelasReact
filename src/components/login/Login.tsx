import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Button } from "@heroui/button";
import { useFormik } from "formik";
import { useRef } from "react";
import useLogin from "../../hooks/useLogin"; // Importa o hook personalizado

const Login = () => {
    const navigate = useNavigate();
    const { login, loading, error } = useLogin();
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validate: (values) => {
            const errors: { username?: string; password?: string } = {};
            if (!values.username) {
                errors.username = "E-mail é obrigatório";
            } else if (!/\S+@\S+\.\S+/.test(values.username)) {
                errors.username = "Formato de e-mail inválido";
            }

            if (!values.password) {
                errors.password = "Senha é obrigatória";
            } else if (values.password.length < 8) {
                errors.password = "Senha deve ter pelo menos 8 caracteres";
            }

            return errors;
        },
        onSubmit: async (values) => {
           const user = await login(values.username, values.password);
           console.log(user)
            navigate(`/Comentarios/${user.id}`);
        },
    });

    return (
        <div className="w-[450px] bg-gray-200 backdrop-blur-md rounded-lg p-10">
            <h1 className="text-2xl font-helvetica mb-[20px]">Sistema de Administração Musical</h1>
            <div className="bg-blue-200 p-2 rounded-md text-center mb-[20px]">
                Informe e-mail e senha para acessar
            </div>

            {error && <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">{error}</div>}

            <form onSubmit={formik.handleSubmit}>
                <div className="relative mt-4 mb-4">
                    <input
                        ref={usernameRef}
                        type="text"
                        name="username"
                        placeholder="E-mail..."
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaUser className="absolute top-3 right-3 text-gray-500" />
                </div>

                <div className="relative mt-4 mb-4">
                    <input
                        ref={passwordRef}
                        type="password"
                        name="password"
                        placeholder="Senha..."
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaLock className="absolute top-3 right-3 text-gray-500" />
                </div>

                <Button type="submit" className="w-full mt-3" color="primary" variant="ghost" disabled={loading}>
                    {loading ? "Entrando..." : "Acessar o Sistema"}
                </Button>
            </form>
        </div>
    );
};

export default Login;
