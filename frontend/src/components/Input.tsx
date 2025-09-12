type InputProps = {
    type?: string,
    label?: string,
    placeholder?: string,
    name: string,
    disabled?: boolean,
    value?: string,
    change?: (value: string) => void,
    className?: string,
    children?: React.ReactNode,
    required?: boolean
}

function Input({ type='text', label, placeholder, name, disabled=false, value, change, className, children, required=false }: InputProps) {
    return (
        <div
            className={"text-black flex flex-col gap-2 w-full" + (disabled ? "hidden" : "")}
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
            <div
                className="w-full grid grid-cols-[1fr_auto]"
            >
                <input 
                    id={`${label}-${type}`} 
                    type={type} 
                    placeholder={placeholder}
                    className={className ? className : "focus:outline-0 text-lg"}
                    name={name}
                    value={value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => change?.(e.target.value)}
                    required={required}
                />
                {children}
            </div>
        </div>
    )
}

export default Input;