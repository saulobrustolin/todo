import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Skeleton from "../components/Skeleton";
import ItemTask from "../components/ItemTask";
import Collection from "../components/Collection";
import { Inbox } from "lucide-react";

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

    useEffect(() => {
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
        loadList();
    }, [])   

    return (
        <Collection
            className="relative"
        >
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
                                />
                            )
                        })
                    ) : <span
                            className="fixed top-1/2 left-1/2 flex flex-col items-center gap-2 text-[var(--contrast-color)] translate-x-[-50%] translate-y-[-50%]"
                        >
                            <Inbox
                                className="size-24 text-[var(--contrast-color)]"
                            />
                            <span>
                                Sem dados até o momento.
                            </span>
                        </span>
                ) : <Skeleton className="w-full h-16" />
            }
        </Collection>
    )
}

export default ListPage;