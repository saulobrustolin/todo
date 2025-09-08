import { Link } from "react-router-dom";

function Anchor({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <Link
            to={to}
        >
            {children}
        </Link>
    )
}

export default Anchor;