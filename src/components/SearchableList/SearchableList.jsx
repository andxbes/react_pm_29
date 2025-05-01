import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
    const [searchTerm, setSearchTerm] = useState('');
    const lastChange = useRef();


    const searchResults = items.filter(item =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleSearch(event) {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }
        lastChange.target = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event.target.value);
        }, 500);

    }

    return (
        <div className="searchable-list">
            <input onChange={handleSearch} type="search" placeholder="search" />
            <ul>
                {searchResults.map((item) => (
                    <li key={itemKeyFn(item)}>{children(item)}</li>
                ))}
            </ul>
        </div>
    );
};
