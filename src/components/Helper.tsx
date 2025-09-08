import { MessageCircleQuestionMark } from "lucide-react";
import Filter from "./Filter";

function Helper() {
    return (
        <div>
            <MessageCircleQuestionMark
                className="text-[var(--contrast-color)] size-6"
            />
            <Filter/>
        </div>
    )
}

export default Helper;