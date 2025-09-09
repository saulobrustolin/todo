import { ChevronRight } from "lucide-react";

function ItemList({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="flex justify-between items-center p-2 py-4 text-lg font-semibold cursor-pointer hover:transform-cpu hover:transition-all duration-500 ease-in-out"
        >
            {children}
            <ChevronRight />
        </div>
    )
}

export default ItemList;