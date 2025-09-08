import { HouseIcon, Plus } from "lucide-react";
import Anchor from "../components/Anchor";

function FooterLayout() {
    return (
        <footer
            className="grid grid-cols-2 absolute bottom-0 w-full border-t border-[var(--border-white)]"
        >
            <Anchor
                to="/"
            >
                <HouseIcon />
                Início    
            </Anchor>
            <Anchor
                to="/new"
            >
                <Plus />
                Criar lista
            </Anchor>
        </footer>
    )
}

export default FooterLayout;