import { Circle, CircleCheck } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Textarea from "./Textarea";

type ItemTaskProps = {
    title: string,
    subtitle: string,
    description?: string,
    finish: boolean,
    id: number,
    actionReload: any,
    url: string
}

function ItemTask({ title, subtitle, description, finish, id, actionReload, url }: ItemTaskProps) {
    const [finishState, setFinishState] = useState<boolean>(finish);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [titleState, setTitleState] = useState<string>(title);
    const [subtitleState, setSubtitleState] = useState<string>(subtitle);
    const [descriptionState, setDescriptionState] = useState<string | undefined>(description);

    function changeFinishTask(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        setFinishState((prev) => !prev);

        updateTask();
    }

    const updateTask = async () => {
        const apiUrl = import.meta.env.VITE_API_URL;

        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                finish: !finish
            })
        }
        try {
            await fetch(`${apiUrl}/tasks/${id}`, options);
        } catch {
            setError("Não foi possível fazer a atualização da tarefa.");
        } finally {

        }
    };

    return (
        <>
            <div
                className="flex gap-5 items-center p-2 py-4 text-lg font-semibold cursor-pointer"
            >
                <button
                    className="flex gap-5 items-center cursor-pointer"
                    onClick={changeFinishTask}
                >
                    {
                        !finishState ? (
                            <Circle
                                className={"h-7 w-7 text-[var(--secondary-text)]"}
                            />
                        ) : (
                            <CircleCheck
                                className={"h-7 w-7 " + (finishState ? "text-green-600" : "text-[var(--secondary-color)]")}
                            />
                        )
                    }
                </button>
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                    className="cursor-pointer"
                >
                    <div
                        className="flex flex-col justify-center items-start translate-x-0 hover:translate-x-1 hover:transition-all duration-200 ease-in-out"
                    >
                        <span
                            className={finishState ? "line-through decoration-2" : ""}
                        >
                            {title}
                        </span>
                        {
                            subtitle ? (
                                <span
                                className={"text-[var(--secondary-text)] font-normal text-sm " + (finishState ? "line-through decoration-2" : "")}
                                >
                                    {subtitle}
                                </span>
                            ) : null
                        }
                    </div>
                </button>
            </div>
            {
                isOpen ? (
                    <Modal
                        title="Acessando tarefa"
                        actionReload={actionReload}
                        method="PATCH"
                        url={url}
                        handleState={setIsOpen}
                        deleteOption={true}
                        id={id}
                    >
                        <Input 
                            disabled={true}
                            name="list_id"
                            value={id.toString()}
                        />
                        <Input 
                            label="título"
                            placeholder="digite o título da tarefa..."
                            name="title"
                            value={titleState}
                            change={setTitleState}
                        />
                        <Input 
                            label="subtítulo"
                            placeholder="digite o subtítulo da tarefa..."
                            name="subtitle"
                            value={subtitleState}
                            change={setSubtitleState}
                        />
                        <Textarea
                            label="descrição"
                            name="description"
                            placeholder="digite a descrição da tarefa (opcional)"
                            value={descriptionState}
                            change={setDescriptionState}
                        />
                    </Modal>
                ) : null
            }
        </>
    )
}

export default ItemTask;