import SearchBar from '../../components/shared/SearchBar';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <SearchBar />
        </div>
    );
};

export {Home};