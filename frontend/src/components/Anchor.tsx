function Anchor({ to, children, className }: { to: string, children: React.ReactNode, className?: string }) {
    return (
        <a
            href={to}
            className={"flex flex-col gap-2 justify-center items-center py-4 " + (className ? className : "")}
        >
            {children}
        </a>
    )
}

export default Anchor;