function Anchor({ to, children }: { to: string, children: React.ReactNode }) {
    return (
        <a
            href={to}
            className="flex flex-col gap-2 justify-center items-center py-4"
        >
            {children}
        </a>
    )
}

export default Anchor;