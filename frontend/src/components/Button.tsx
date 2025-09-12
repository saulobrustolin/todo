type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    handleClick?: any,
    type?: "submit" | "reset" | "button"
}

function Button({ children, className, handleClick, type='button' }: ButtonProps) {
    return (
        <button
            className={"rounded flex justify-center p-2 cursor-pointer scale-100 hover:scale-[101%] " + (className)}
            onClick={handleClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button;