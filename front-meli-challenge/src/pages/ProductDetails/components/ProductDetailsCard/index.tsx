import React from 'react';
import styles from './ProductDetailsCard.module.scss';
import type { ProductDetail } from '../../../../types';
import { formattedPrice } from '../../../../utils';

interface ProductCardProps {
    data: ProductDetail;
}

const ProductDetailsCard: React.FC<ProductCardProps> = ({ data }) => {
    const { title, price, descriptions, pictures } = data

    return (
        <div className={styles.productDetailsCard}>
            <div className={styles.infoDetail}>
                <img src={pictures[0].secure_url} alt={title} />
                <div className={styles.productTitlePrice}>
                    <h1>{title}</h1>
                    <p>{formattedPrice(price)} </p>
                    <button>Comprar</button>
                </div>
            </div>
            <div className={styles.infoDescription}>
                <p>{descriptions}</p>
            </div>
        </div>
    );
};

export default ProductDetailsCard;
