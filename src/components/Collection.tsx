function Collection({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="flex flex-col divide-y-2"
        >
            {children}
        </div>
    )
}

export default Collection;