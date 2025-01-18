import { useSearchParams } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import SearchBar from '../../components/shared/SearchBar';
import styles from './SearchResults.module.scss'
import { useQuery } from 'react-query';
import { getSearchItems } from '../../services/api';
import type { Product } from '../../types'
import CircularProgress from '@mui/material/CircularProgress';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search') || '';
    const { data: listItems, isLoading, isError} = useQuery<Product[]>({ queryFn: () => getSearchItems(query), queryKey: ['getItems', {query}]})

    if (isLoading) return (
        <div className={styles.isLoading}>
          <SearchBar />
          <div className={styles.circularProgress}>
            <CircularProgress />
          </div>
        </div>
    );

    if (isError) return <p>Error al cargar resultados</p>;
    
    return (
        <div className={styles.searchResults}>
            <SearchBar />
            <div className={styles.resultsBox}>
                {listItems?.map((item: Product) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export {SearchResults};
