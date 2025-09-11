import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Skeleton from "../components/Skeleton";
import ItemTask from "../components/ItemTask";
import Collection from "../components/Collection";
import { Inbox, Plus } from "lucide-react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

export type TaskProps = {
    id: number,
    title: string,
    subtitle: string,
    description?: string,
    finish: boolean,
    list_id: number
}

function ListPage() {
    const { id } = useParams();

    const apiUrl = import.meta.env.VITE_API_URL;

    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState<boolean>(true);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const loadList = async () => {
        try {
            const res = await fetch(`${apiUrl}/tasks/${id}`);
            if (!res.ok) throw new Error("Erro na requisição");
            const data = await res.json();
            setTasks(data["data"]);
        } catch (err: any) {
            if (err.name !== "AbortError") setError(err.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadList();
    }, [])

    const openModalTask = () => {
        setIsOpen((prev: boolean) => !prev)
    };

    return (
        <>
            <Collection>
                {
                    !loading ? (
                        tasks && tasks.length != 0 ? (
                            tasks.map((value: TaskProps, index: number) => {
                                return (
                                    <ItemTask
                                        key={index}
                                        title={value.title}
                                        subtitle={value.subtitle}
                                        description={value.description}
                                        finish={value.finish}
                                        id={value.id}
                                        actionReload={loadList}
                                        url={apiUrl}
                                    />
                                )
                            })
                        ) : tasks.length == 0 ? (
                                <span
                                    className="fixed top-1/2 left-1/2 flex flex-col items-center gap-2 text-[var(--contrast-color)] translate-x-[-50%] translate-y-[-50%]"
                                >
                                    <Inbox
                                        className="size-24 text-[var(--contrast-color)]"
                                    />
                                    <span>
                                        Sem dados até o momento.
                                    </span>
                                </span>
                            ) : <span>{error}</span>
                    ) : <Skeleton className="w-full h-16" />
                }
            </Collection>
            <span
                className="absolute bottom-28 right-8 border-2 p-2 px-4 flex gap-1 rounded cursor-pointer scale-100 hover:text-[var(--contrast-color)]"
                onClick={openModalTask}
            >
                <Plus />
                Criar tarefa
            </span>

            {/* Construção do modal */}
            {
                isOpen ? (
                    <Modal
                        title="Criando tarefa"
                        handleState={setIsOpen}
                        url={`${apiUrl}/tasks`}
                        method="POST"
                        actionReload={loadList}
                    >
                        <Input 
                            disabled={true}
                            name="list_id"
                            value={id}
                        />
                        <Input 
                            label="título"
                            placeholder="digite o título da tarefa..."
                            name="title"
                        />
                        <Input 
                            label="subtítulo"
                            placeholder="digite o subtítulo da tarefa..."
                            name="subtitle"
                        />
                        <Textarea
                            label="descrição"
                            name="description"
                            placeholder="digite a descrição da tarefa (opcional)"
                        />
                    </Modal>
                ) : null
            }
        </>
    )
}

export default ListPage;