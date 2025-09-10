import { Circle, CircleCheck } from "lucide-react";
import { useState } from "react";

function ItemTask({ title, subtitle, description, finish, id }: { title: string, subtitle: string, description?: string, finish: boolean, id: number }) {
    const [finishState, setFinishState] = useState<boolean>(finish);
    const [error, setError] = useState("");

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
        <div
            className="flex justify-between items-center p-2 py-4 text-lg font-semibold cursor-pointer"
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
    )
}

export default ItemTask;