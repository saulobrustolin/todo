type TextareaProps = {
    name: string,
    label: string,
    placeholder: string,
    value?: string,
    change?: (value: string) => void,
    className?: string
}

function Textarea({ name, label, placeholder, value, change, className }: TextareaProps) {
    return (
        <div
            className="text-black flex flex-col gap-2"
        >
            <label 
                htmlFor={`${label}-${name}`}
                className={"text-md font-semibold cursor-pointer " + (className ? "text-[var(--primary-text)]" : "")}
            >
                {label}
            </label>
            <textarea 
                name={name}
                id={`${label}-${name}`}
                className={"focus:outline-0 resize-none text-lg " + (className ? className : "")}
                placeholder={placeholder}
                rows={4}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => change?.(e.target.value)}
            />
        </div>
    )
}

export default Textarea;