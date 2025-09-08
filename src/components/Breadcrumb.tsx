import { ChevronLeft } from "lucide-react";

function Breadcrumb({ list }: { list: string[] }) {
    const mapa: Record<"new" | "dashboard", string> = {
        "new": "Nova lista",
        "dashboard": "Painel"
    }

    return (
        <div>
            <ChevronLeft />
            {mapa[list[list.length - 1] as "new" | "dashboard"]}
        </div>
    )
}

export default Breadcrumb;