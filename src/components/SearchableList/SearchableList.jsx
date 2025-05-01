import { useState } from "react";

export default function SearchableList({ items }) {
    const [searchTerm, setSearchTerm] = useState('');


    const searchResults = items.filter(item =>
        JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="searchable-list">
            <input onChange={handleSearch} type="search" placeholder="search" />
            <ul>
                {searchResults.map((item, index) => (
                    <li key={index}>{item.toString()}</li>
                ))}
            </ul>
        </div>
    );
};
