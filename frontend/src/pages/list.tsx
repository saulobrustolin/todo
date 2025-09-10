import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ListPage() {
    const { id } = useParams();

    const apiUrl = import.meta.env.VITE_API_URL;

    const [list, setList] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadList = async () => {
            try {
                const res = await fetch(`${apiUrl}/lists`);
                if (!res.ok) throw new Error("Erro na requisição");
                const data = await res.json();
                setList(data["data"]);
            } catch (err: any) {
                if (err.name !== "AbortError") setError(err.message)
            } finally {
                setLoading(false);
            }
        }
        loadList();
    }, [])   

    return (
        <div>
            ListPage
        </div>
    )
}

export default ListPage;