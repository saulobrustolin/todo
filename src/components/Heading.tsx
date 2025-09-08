function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1
            className="text-4xl capitalize font-semibold text-[var(--primary-text)]"
        >
            {children}
        </h1>
    )
}

export default Heading;