import { Check, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

type ModalProps = {
    className?: string,
    title: string,
    children: React.ReactNode,
    handleState: React.Dispatch<React.SetStateAction<boolean>>,
    url: string,
    method: string,
    actionReload: any,
    deleteOption?: boolean,
    id?: number
}

function Modal({ className, title, children, handleState, url, method, actionReload, deleteOption=false, id }: ModalProps) {
    const [confirm, setConfirm] = useState<boolean>(false);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch(`${url}/tasks`, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                throw new Error("Falha ao criar a tarefa");
            }

            handleState(prev => !prev);
            actionReload();

        } catch (err: any) {
            // Aqui você pode tratar o erro, por exemplo, mostrando uma notificação
            console.error(err.message);
        }
    };

    const deleteTask = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const res = await fetch(`${url}/tasks/${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                handleState(prev => !prev);
                actionReload();
            }
        } catch (err: any) {
            console.error(err.message)
        }
    };

    return (
        <div
            className="bg-[var(--background-dark)]/75 z-20 w-full h-screen absolute top-0 left-0"
        >
            {
                !confirm ? (
                    <form
                        className={"absolute left-1/2 rounded-md -translate-x-1/2 translate-y-1/2 bottom-1/2 p-6 w-10/12 bg-[var(--border-white)] " + (className ? className : "")}
                        onSubmit={submitForm}
                    >
                        <div
                            className="flex justify-between items-start"
                        >
                            <h2
                                className="mb-4 font-semibold text-2xl text-black"
                            >
                                {title}
                            </h2>
                            <X
                                className="text-[var(--background-dark)] cursor-pointer"
                                size={24}
                                onClick={() => handleState((prev) => !prev)}
                            />
                        </div>
                        <div
                            className="flex flex-col gap-5"
                        >
                            {children}
                        </div>

                        <button 
                            type="submit"
                            className="text-[var(--primary-text)] bg-[var(--contrast-color)] px-4 py-2 mt-4 w-full cursor-pointer rounded font-semibold transition-all scale-100 hover:scale-[101%]"
                        >
                            enviar
                        </button>
                        {
                            deleteOption ? (
                                <button 
                                    className="text-[var(--primary-text)] bg-red-500 px-4 py-2 mt-4 w-full cursor-pointer rounded font-semibold transition-all scale-100 hover:scale-[101%]"
                                    onClick={() => setConfirm(prev => !prev)}
                                >
                                    deletar
                                </button>
                            ) : null
                        }
                    </form>
                ) : (
                    <div
                        className="absolute left-1/2 rounded-md -translate-x-1/2 translate-y-1/2 bottom-1/2 p-6 w-10/12 bg-[var(--border-white)]"
                    >
                        <h2
                            className="font-semibold text-2xl text-black"
                        >
                            Confirmação
                        </h2>
                        <p
                            className="text-md text-black/50"
                        >
                            tem certeza que deseja excluir essa tarefa?
                        </p>
                        <div
                            className="my-4 grid grid-cols-2 gap-2"
                        >
                            <Button
                                className="bg-green-600"
                                handleClick={deleteTask}
                            >
                                <Check />
                            </Button>
                            <Button
                                className="bg-red-500"
                                handleClick={() => setConfirm(prev => !prev)}
                            >
                                <X />
                            </Button>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}

export default Modal;