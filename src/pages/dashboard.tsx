import Collection from "../components/Collection";
import ItemList from "../components/ItemList";
import Search from "../components/Search";

type ItemProp = {
    name: string
}

function Dashboard() {
    const items = [
        {
            "name": "Lista de compras"
        },
        {
            "name": "Lista de materiais"
        },
        {
            "name": "Preparação da festa 18/08"
        },
    ]

    return (
        <>
            <Search/>
            <Collection>
            {
                items.map((value: ItemProp, index: number) => {
                    return (
                        <ItemList
                            key={index}
                        >{value.name}</ItemList>
                    )
                })
            }
            </Collection>
        </>
    )
}

export default Dashboard;