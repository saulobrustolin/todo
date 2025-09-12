import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

type FormProps = {
    children: React.ReactNode,
    action: string,
    method: string,
    className?: string,
    success?: string
}

function Form({ children, action, method, className, success }: FormProps) {
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        try {
            await fetch(action, options).then(async (res) => {
                return await res.json()
            }).then((res: { id: string }) => {
                if (res.id) {
                    toast.success("Sucesso!")
                }
                localStorage.setItem('token', res.id)
                success != undefined ? navigate(success) : null
            })
        } catch (err) {
            toast.error("Usuário ou senha inválido, tente novamente!")
        }
    };

    return (
        <form
            method={method}
            onSubmit={handleSubmit}
            className={"w-3/4 flex flex-col gap-6 items-center relative " + (className ? className : "")} 
        >
            {children}
            <ToastContainer
                closeOnClick={true}
                theme="dark"
                position="top-center"
            />
        </form>
    )
}

export default Form;