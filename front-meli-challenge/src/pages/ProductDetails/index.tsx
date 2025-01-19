import { useParams } from 'react-router-dom';
import ProductDetailsCard from './components/ProductDetailsCard';
import SearchBar from '../../components/shared/SearchBar';
import styles from './ProductDetails.module.scss'
import { useQuery } from 'react-query';
import type { ProductDetail} from '../../types'
import { getProductoDetail } from '../../services/api';
import CircularProgress from '@mui/material/CircularProgress';

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data: itemDetail, isLoading, error} = useQuery<ProductDetail>({ 
        queryFn: () => getProductoDetail(id || '' ), 
        queryKey: ['getProductoDetail', {id}],
    })

    if (isLoading) return (
        <div className={styles.isLoading}>
          <SearchBar />
          <div className={styles.circularProgress}>
            <CircularProgress />
          </div>
        </div>
    );
    if (error) return <p style={{color: 'black'}}>Error al cargar detalles del producto</p>;
    if (!itemDetail) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <div className={styles.productDetails}>
            <SearchBar />
            <div className={styles.resultsBox}> 
                <ProductDetailsCard data={itemDetail} />
            </div>
        </div>
    )
};

export {ProductDetails};
