import FooterLayout from "./footer-layout";

function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="aspect-9/16 h-screen border-r border-l relative"
        >
            <main
                className="p-8"
            >
                {children}
            </main>
            <FooterLayout />
        </div>
    )
}

export default AppLayout;