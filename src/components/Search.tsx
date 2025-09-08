import { SearchIcon } from "lucide-react";

function Search() {
    return (
        <div
            className="p-2 border-2 rounded-sm border-[var(--border-white)] flex gap-2"
        >
            <label htmlFor="search-value">
                <SearchIcon />
            </label>
            <input 
                id="search-value"
                type="text"
                className="w-full focus:outline-0" 
                placeholder="Digite o nome da lista" 
            />
        </div>
    )
}

export default Search;