import { Asterisk, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router";

function Login() {
    const [isLogin, setIsLogin] = useState(false);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true);

    const apiUrl = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard')
        }
    }, [])
    return (
        <div
            className="flex flex-col justify-center h-full py-16 items-center gap-2 w-full"
        >
            {
                !isLogin ? (
                    <>
                        <Asterisk 
                            size={512}
                            className="text-[var(--contrast-color)]"
                        />
                        <div
                            className="w-full"
                        >
                            <Link
                                to="/register"
                                className="p-4 flex items-center justify-center w-full border-2 text-lg border-[var(--contrast-color)] text-[var(--contrast-color)] cursor-pointer"
                                >
                                Register
                            </Link>
                            <button
                                className="p-4 w-full underline-offset-2 text-md underline cursor-pointer"
                                onClick={() => setIsLogin(prev => !prev)}
                            >
                                Login
                            </button>
                        </div>
                    </>
                ) : (
                    <div
                        className="w-full flex flex-col gap-24 justify-center items-center"
                    >
                        <Asterisk 
                            size={128}
                            className="text-[var(--contrast-color)]"
                        />
                        <Form
                            method="POST"
                            action={`${apiUrl}/users/login`}
                            success="/dashboard"
                        >
                            <Input
                                name="username"
                                placeholder="digite seu username..."
                                value={username}
                                change={setUsername}
                                label="Usuário"
                                className="text-lg w-full focus:outline-0 text-[var(--primary-text)]"
                            />
                            <div
                                className="w-full flex"
                            >
                                <Input
                                    name="password"
                                    placeholder="digite sua senha..."
                                    value={password}
                                    change={setPassword}
                                    label="Senha"
                                    className="text-lg focus:outline-0 text-[var(--primary-text)]"
                                    type={isHiddenPassword ? 'password' : 'text'}
                                >
                                    {
                                        password.length > 0 ? (
                                            isHiddenPassword ? (
                                                <Eye 
                                                    className="text-white cursor-pointer"
                                                    size={24}
                                                    onClick={() => setIsHiddenPassword(prev => !prev)}
                                                />
                                            ) : (
                                                <EyeOff
                                                    className="text-white cursor-pointer"
                                                    size={24}
                                                    onClick={() => setIsHiddenPassword(prev => !prev)}
                                                />
                                            )
                                        ) : null
                                    }
                                </Input>
                            </div>
                            <Button
                                className="bg-[var(--contrast-color)] text-[var(--background-dark)] w-full"
                                type="submit"
                            >
                                enviar
                            </Button>
                            <span
                                className="underline underline-offset-2 text-[var(--contrast-color)] font-semibold block self-end"
                            >
                                esqueceu sua senha?
                            </span>
                        </Form>
                    </div>
                )
            }
        </div>
    )
}

export default Login;