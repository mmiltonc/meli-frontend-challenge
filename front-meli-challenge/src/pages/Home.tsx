import SearchBar from '../components/search-bar/SearchBar';
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.home}>
            <SearchBar />
        </div>
    );
};

export default Home;