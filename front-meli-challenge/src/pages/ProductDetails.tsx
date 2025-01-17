import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import ProductDetailsCard from '../components/product-details/ProductDetailsCard';
import SearchBar from '../components/search-bar/SearchBar';
import styles from './ProductDetails.module.scss'
interface ProductDetails {
    data: {
        thumbnail: string;
        title: string;
        price: number;
        condition: string;
        descriptions: []
    };
}

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useFetch<ProductDetails>(`https://api.mercadolibre.com/items/${id}`);
    const [product, setProduct] = useState<any>(null);
    
    useEffect(() => {
    if (data) {
        setProduct(data); // Aquí guardamos el objeto data en el estado
    }
    }, [data]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar detalles del producto</p>;

    console.log('data: ', data)
    if (!data) {
        return <p>No se encontró el producto.</p>;
    }

    return (
        <div className={styles.productDetails}>
            <SearchBar />
            {product && (
                <div className={styles.resultsBox}> 
                    <ProductDetailsCard 
                        title={product.title} 
                        price={product.price}
                        description={product.description || 'Sin descripción'}
                        thumbnail={product.thumbnail}
                        condition={product.condition}
                    />
                </div>
            )}
        </div>
    )
};

export default ProductDetails;
