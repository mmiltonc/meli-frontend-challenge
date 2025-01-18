import React from 'react';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../../../types';
import { formattedPrice } from '../../../../utils';

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    const { id, title, price, seller, thumbnail, free_shipping } = data

    return (
        <Link to={`/items/${id}`}>
            <div className={styles.productCard}>
                <img className={styles.image} src={thumbnail} alt={title} />
                <div className={styles.infoProduct}>
                    <p className={styles.productPrice}>{formattedPrice(price)}</p>
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