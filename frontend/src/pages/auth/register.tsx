import { Asterisk, Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { useNavigate } from "react-router";

function Register() {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    
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
            className="flex h-full"
        >
            <div
                className="w-full flex flex-col gap-24 justify-center items-center"
            >
                <Asterisk 
                    size={128}
                    className="text-[var(--contrast-color)]"
                />
                <Form
                    method="POST"
                    action={`${apiUrl}/users/register`}
                >
                    <Input
                        name="name"
                        placeholder="digite seu nome..."
                        value={name}
                        change={setName}
                        label="Nome"
                        className="text-lg w-full focus:outline-0 text-[var(--primary-text)]"
                    />
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
                    <Input
                        name=""
                        placeholder="digite sua senha novamente..."
                        value={confirmPassword}
                        change={setConfirmPassword}
                        label="Confirmar senha"
                        className="text-lg w-full focus:outline-0 text-[var(--primary-text)]"
                    />
                    <Button
                        className="bg-[var(--contrast-color)] text-[var(--background-dark)] w-full"
                    >
                        registrar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Register;