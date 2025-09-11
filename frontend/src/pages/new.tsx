import { useState } from "react";
import Input from "../components/Input";

function New() {
    const [title, setTitle] = useState<string>("");
    const [subtitle, setSubtitle] = useState<string>("");

    const apiUrl = import.meta.env.VITE_API_URL;

    const submitList = async () => {
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, subtitle: subtitle })
        }

        await fetch(`${apiUrl}/lists`, options);
    };

    return (
        <>
            <div
                className="mt-6"
            >
                <Input
                    className="text-4xl focus:outline-0 font-bold text-[var(--contrast-color)]"
                    name="title"
                    placeholder="Digite o título..."
                    value={title}
                    change={setTitle}
                />
                <div
                    className="my-6"
                >
                    <Input
                        placeholder="digite o subtítulo... (opcional)"
                        label="subtítulo"
                        name="subtitle"
                        className="text-[var(--secondary-text)] focus:outline-0 text-lg"
                        value={subtitle}
                        change={setSubtitle}
                    />
                </div>
            </div>
            {
                title.length > 3 ? (
                    <button
                        className="absolute right-12 top-8 cursor-pointer font-bold text-[var(--contrast-color)] text-lg"
                        onClick={submitList}
                    >
                        Concluído
                    </button>
                ) : null
            }
        </>
    )
}

export default New;