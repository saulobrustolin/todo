function Input({ type, label, placeholder, name }: { type?: string, label: string, placeholder: string, name: string }) {
    return (
        <div
            className="text-black flex flex-col"
        >
            <label 
                htmlFor={`${label}-${type}`}
                className="text-md font-semibold cursor-pointer"
            >
                {label}
            </label>
            <input 
                id={`${label}-${type}`} 
                type={type ? type : "text"} 
                placeholder={placeholder}
                className="focus:outline-0 text-lg"
                name={name}
            />
        </div>
    )
}

export default Input;