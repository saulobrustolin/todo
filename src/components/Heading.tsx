function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1
            className="text-4xl capitalize font-semibold text-[var(--primary-text)] mb-4"
        >
            {children}
        </h1>
    )
}

export default Heading;