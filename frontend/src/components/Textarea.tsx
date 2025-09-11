function Textarea({ name, label, placeholder }: { name: string, label: string, placeholder: string }) {
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
                className="focus:outline-0 resize-none"
                placeholder={placeholder}
                rows={4}
            />
        </div>
    )
}

export default Textarea;