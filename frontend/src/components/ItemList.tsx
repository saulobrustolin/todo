import { ChevronRight } from "lucide-react";

function ItemList({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div
            className="flex justify-between items-center p-2 py-4 text-lg font-semibold cursor-pointer hover:transform-cpu hover:transition-all duration-500 ease-in-out"
        >
            <div
                className="flex flex-col"
            >
                <span>
                    {title}
                </span>
                {
                    subtitle ? (
                        <span
                        className="text-[var(--secondary-text)] font-normal text-sm"
                        >
                            {subtitle}
                        </span>
                    ) : null
                }
            </div>
            <ChevronRight />
        </div>
    )
}

export default ItemList;