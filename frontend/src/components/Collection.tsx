function Collection({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div
            className={"flex flex-col divide-y divide-[var(--border-color)] " + (className ? className : "")}
        >
            {children}
        </div>
    )
}

export default Collection;