import React, { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query) navigate(`/items?search=${query}`);
    };

    return (
        <div className={styles.searchBar}>
            <p className={styles.logo}>logo</p>
            <input
                className={styles.input}
                type="text"
                placeholder="No dejes de buscar"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.buttonSearch} onClick={handleSearch}>B</button>
        </div>
    );
};

export default SearchBar;