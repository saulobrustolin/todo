function Button({ children, className, handleClick }: { children: React.ReactNode, className?: string, handleClick: any }) {
    return (
        <button
            className={"rounded flex justify-center p-2 cursor-pointer scale-100 hover:scale-[101%] " + (className)}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button;