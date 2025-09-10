import { ChevronRight } from "lucide-react";

function ItemList({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div
            className="flex justify-between items-center p-2 py-4 text-lg font-semibold cursor-pointer"
        >
            <div
                className="flex flex-col scale-100 hover:scale-[102%] hover:transition-all duration-200 ease-in-out"
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