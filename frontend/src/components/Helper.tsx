import { MessageCircleQuestionMark } from "lucide-react";
import Filter from "./Filter";

function Helper() {
    return (
        <div
            className="flex justify-between items-center"
        >
            <MessageCircleQuestionMark
                className="text-[var(--contrast-color)] size-6"
            />
            <Filter />
        </div>
    )
}

export default Helper;