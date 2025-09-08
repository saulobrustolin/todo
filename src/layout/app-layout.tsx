import { useLocation } from "react-router";
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

    return (
        <div
            className="aspect-9/16 h-screen border-r border-l relative"
        >
            <main
                className="p-8"
            >
                {
                    pathname[pathname.length - 1] == "dashboard" ? (
                        <Heading>
                            {pathname[0]}
                        </Heading>
                    ) : (
                        <div
                            className="flex gap-4 items-center text-lg font-semibold"
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