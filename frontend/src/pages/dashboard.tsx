import { useEffect, useState } from "react";
import Collection from "../components/Collection";
import ItemList from "../components/ItemList";
import Search from "../components/Search";
import Skeleton from "../components/Skeleton";

type ItemProp = {
    id: number,
    title: string,
    subtitle: string,
    description: string | null,
    created_at: string,
    updated_at: string,
    user_id: number
}

function Dashboard() {
    const [lists, setLists] = useState<ItemProp[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState();

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const loadLists = async () => {
            try {
                const res = await fetch(`${apiUrl}/lists`);
                if (!res.ok) throw new Error("Erro na requisição");
                const data = await res.json();
                setLists(data["data"]);
            } catch (err: any) {
                if (err.name !== "AbortError") setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        loadLists();
    }, [])    

    return (
        <>
            <Search/>
            <Collection>
            {
                lists.length != 0 ? (
                    lists.map((value: ItemProp) => {
                        return (
                            <ItemList
                                key={value.id}
                                title={value.title}
                                subtitle={value.subtitle}
                            />
                        )
                    })
                ) : (
                    <Skeleton 
                        className="w-full h-16"
                    />
                )
            }
            </Collection>
        </>
    )
}

export default Dashboard;