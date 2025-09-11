function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <main
            className="aspect-9/16 h-screen border-x overflow-y-hidden p-4"
        >
            {children}
        </main>
    )
}

export default BaseLayout;