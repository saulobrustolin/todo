function Collection({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="flex flex-col divide-y divide-[var(--border-color)]"
        >
            {children}
        </div>
    )
}

export default Collection;