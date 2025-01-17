import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import ProductCard from '../components/product-card/ProductCard';
import SearchBar from '../components/search-bar/SearchBar';
import styles from './SearchResults.module.scss'

interface SearchResult {
    results: { id: number; name: string; price: number; image: string }[]; // Aquí defines las propiedades de cada item
}

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search') || '';
    console.log('query: ', query)
    const { data, loading, error } = useFetch<SearchResult>(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar resultados</p>;
    const filteredResults = data?.results.slice(0, 4);
    return (
        <div className={styles.searchResults}>
            <SearchBar />
            <div className={styles.resultsBox}>
                {filteredResults?.map((item: any) => (
                    <ProductCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
