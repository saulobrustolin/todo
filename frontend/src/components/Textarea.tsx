type TextareaProps = {
    name: string,
    label: string,
    placeholder: string,
    value?: string,
    change?: any
}

function Textarea({ name, label, placeholder, value, change }: TextareaProps) {
    return (
        <div
            className="text-black flex flex-col"
        >
            <label 
                htmlFor={`${label}-${name}`}
                className="text-md font-semibold cursor-pointer"
            >
                {label}
            </label>
            <textarea 
                name={name}
                id={`${label}-${name}`}
                className="focus:outline-0 resize-none text-lg"
                placeholder={placeholder}
                rows={4}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => change(e.target.value)}
            />
        </div>
    )
}

export default Textarea;