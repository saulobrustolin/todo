import { useLocation } from "react-router";
import FooterLayout from "./footer-layout";
import { useEffect, useState } from "react";
import Heading from "../components/Heading";

function AppLayout({ children }: { children: React.ReactNode }) {
    const [pathname, setPathname] = useState<string[]>([]);
    
    const location = useLocation();
    useEffect(() => {
        setPathname(location.pathname.split('/').filter((value: string) => value != ""))
    }, [location.pathname])

    useEffect(() => {
        console.log(pathname)
    }, [pathname])

    return (
        <div
            className="aspect-9/16 h-screen border-r border-l relative"
        >
            <main
                className="p-8"
            >
                {
                    pathname.length == 1 ? (
                        <Heading>
                            {pathname[0]}
                        </Heading>
                    ) : (
                        <div></div>
                    )
                }
                {children}
            </main>
            <FooterLayout />
        </div>
    )
}

export default AppLayout;