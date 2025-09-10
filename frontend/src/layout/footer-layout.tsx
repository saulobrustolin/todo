import { HouseIcon, Plus } from "lucide-react";
import Anchor from "../components/Anchor";

function FooterLayout() {
    return (
        <footer
            className="grid grid-cols-2 absolute bottom-0 w-full border-t border-[var(--border-white)] z-50"
        >
            <Anchor
                to="/"
            >
                <HouseIcon />
                Início    
            </Anchor>
            <Anchor
                to="/new"
                className="text-[var(--contrast-color)]"
            >
                <Plus />
                Criar lista
            </Anchor>
        </footer>
    )
}

export default FooterLayout;