import { FaLock } from "react-icons/fa";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router"; // Certifique-se de usar "react-router-dom"
import { useFormik } from "formik";

const Senha = () => {
    const navigate = useNavigate(); // Hook para navegação

    const formik = useFormik({
        initialValues: {
            password: "",
            newPassword: "",
        },
        validate: (values: { password: string; newPassword: string }) => {
            const errors: { password?: string; newPassword?: string } = {};
            
            if (!values.password) {
                errors.password = "Digite a nova senha";
            } else if (values.password.length < 8) {
                errors.password = "Senha atual deve ter pelo menos 8 caracteres";
            }

            if (!values.newPassword) {
                errors.newPassword = "Repita a nova senha";
            } else if (values.newPassword.length < 8) {
                errors.newPassword = "Nova senha deve ter pelo menos 8 caracteres";
            } else if (values.newPassword !== values.password) {
                errors.newPassword = "Nova senha deve ser igual a senha digitada acima";
            }

            return errors;
        },
        onSubmit: (values) => {
            alert("Senha alterada com sucesso!");
            console.log(values);
            navigate("/Login"); // Redireciona para a página de login ou desejada
        },
    });

    return (
        <div className="w-[450px] bg-gray-200 backdrop-blur-md rounded-lg p-10">
            <h1 className="text-2xl font-helvetica mb-[20px]">Alterar Senha</h1>
            <div className="bg-blue-200 p-2 rounded-md text-center mb-[20px]">
                Informe sua senha atual e defina uma nova senha
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="relative mt-4 mb-4">
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha Atual..."
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaLock className="absolute top-3 right-3 text-gray-500" />
                    {formik.touched.password && formik.errors.password && (
                        <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">
                            {formik.errors.password}
                        </div>
                    )}
                </div>

                <div className="relative mt-4 mb-4">
                    <input
                        type="password"
                        name="newPassword"
                        placeholder="Nova Senha..."
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-2 pr-10 border border-black border-custom-red rounded-[8px] focus:outline-none"
                    />
                    <FaLock className="absolute top-3 right-3 text-gray-500" />
                    {formik.touched.newPassword && formik.errors.newPassword && (
                        <div className="bg-red-500 text-white p-2 rounded-md text-center mb-4">
                            {formik.errors.newPassword}
                        </div>
                    )}
                </div>

                <Button type="submit" className="w-full mt-3" color="primary" variant="ghost">
                    Alterar Senha
                </Button>
            </form>
        </div>
    );
};

export default Senha;
