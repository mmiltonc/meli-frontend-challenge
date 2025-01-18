import { useState } from 'react';
import styles from './SearchBar.module.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/image/logo_meli.png';
const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (query) navigate(`/items?search=${query}`);
    };

    return (
        <div className={styles.searchBar}>
            <img className={styles.logo} src={logo} alt='logo' />
            <form onSubmit={(e) => handleSearch(e)}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="No dejes de buscar"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className={styles.buttonSearch} type='submit'>B</button>
            </form>
        </div>
    );
};

export default SearchBar;