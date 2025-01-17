import React from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    title: string;
    price: number;
    seller: {id: number, nickname: string};
    thumbnail: string;
    free_shipping: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, seller, thumbnail, free_shipping }) => {
    
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0, // No mostrar decimales
        maximumFractionDigits: 0, // No mostrar decimales
    }).format(price);

    return (
        <Link to={`/items/${id}`}>
            <div className={styles.productCard}>
                <img className={styles.image} src={thumbnail} alt={title} />
                <div className={styles.infoProduct}>
                    <p className={styles.productPrice}>{formattedPrice}</p>
                    <div className={styles.productTitles}>
                        <h3>{title}</h3>
                        <div className={styles.productSeller}>
                        <p>Por</p>
                        <h4>{seller.nickname}</h4>
                        </div>
                    </div>
                    {free_shipping && <span>Envío gratis</span>}
                </div>
            </div>

        </Link>
    );
};

export default ProductCard;