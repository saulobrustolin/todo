import { useLocation, useNavigate } from "react-router";
import FooterLayout from "./footer-layout";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { ChevronLeft } from "lucide-react";

function AppLayout({ children }: { children: React.ReactNode }) {
    const [pathname, setPathname] = useState<string[]>([]);
    
    const location = useLocation();
    useEffect(() => {
        setPathname(location.pathname.split('/').filter((value: string) => value != ""))
    }, [location.pathname])

    const navigate = useNavigate();
    const handlePage = () => {
        navigate('/dashboard')
    };

    return (
        <div
            className="aspect-9/16 h-screen border-r border-l relative"
        >
            <main
                className="p-8 flex flex-col gap-4"
            >
                {
                    pathname[pathname.length - 1] == "dashboard" ? (
                        <Heading>
                            {pathname[0]}
                        </Heading>
                    ) : (
                        <div
                            className="flex gap-4 items-center text-lg font-semibold cursor-pointer"
                            onClick={handlePage}
                        >
                            <ChevronLeft />
                            Voltar
                        </div>
                    )
                }
                {children}
            </main>
            <FooterLayout />
        </div>
    )
}

export default AppLayout;