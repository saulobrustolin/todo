import { X } from "lucide-react";

type ModalProps = {
    className?: string,
    title: string,
    children: React.ReactNode,
    handleState: React.Dispatch<React.SetStateAction<boolean>>,
    url: string,
    method: string
}

function Modal({ className, title, children, handleState, url, method }: ModalProps) {
    return (
        <div
            className="bg-[var(--background-dark)]/75 w-full h-screen absolute top-0 left-0"
        >
            <form
                className={"absolute left-1/2 rounded-md -translate-x-1/2 translate-y-1/2 bottom-1/2 p-6 w-10/12 bg-[var(--border-white)] " + (className ? className : "")}
                method={method}
                action={url}
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
            </form>
        </div>
    )
}

export default Modal;