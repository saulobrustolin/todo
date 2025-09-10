import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

function ItemList({ title, subtitle, id }: { title: string, subtitle: string, id: number }) {
    return (
        <div
            className="flex justify-between items-center p-2 py-4 text-lg font-semibold cursor-pointer"
        >
            <Link
                className="flex flex-col scale-100 hover:scale-[102%] hover:transition-all duration-200 ease-in-out"
                to={`/list/${id}`}
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
            </Link>
            <ChevronRight />
        </div>
    )
}

export default ItemList;