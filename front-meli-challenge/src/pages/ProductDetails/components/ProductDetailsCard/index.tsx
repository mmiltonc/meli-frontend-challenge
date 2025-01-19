import React from 'react';
import styles from './ProductDetailsCard.module.scss';
import type { ProductDetail } from '../../../../types';
import { formattedPrice } from '../../../../utils';

interface ProductCardProps {
    data: ProductDetail;
}

const ProductDetailsCard: React.FC<ProductCardProps> = ({ data }) => {
    const { title, price, description, picture } = data.item

    return (
        <div className={styles.productDetailsCard}>
            <div className={styles.infoDetail}>
                <img src={picture} alt={title} />
                <div className={styles.productTitlePrice}>
                    <h1>{title}</h1>
                    <p>{formattedPrice(price.amount)} </p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className={styles.infoDescription}>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProductDetailsCard;
