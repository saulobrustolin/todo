type InputProps = {
    type?: string,
    label?: string,
    placeholder?: string,
    name: string,
    disabled?: boolean,
    value?: string,
    change?: (value: string) => void,
    className?: string
}

function Input({ type, label, placeholder, name, disabled=false, value, change, className }: InputProps) {
    return (
        <div
            className={"text-black flex flex-col " + (disabled ? "hidden" : "")}
        >
            {
                label ? (
                    <label 
                        htmlFor={`${label}-${type}`}
                        className={"text-md font-semibold cursor-pointer " + (className ? "text-[var(--primary-text)]" : "")}
                    >
                        {label}
                    </label>
                ) : null
            }
            <input 
                id={`${label}-${type}`} 
                type={type ? type : "text"} 
                placeholder={placeholder}
                className={className ? className : "focus:outline-0 text-lg"}
                name={name}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => change?.(e.target.value)}
            />
        </div>
    )
}

export default Input;