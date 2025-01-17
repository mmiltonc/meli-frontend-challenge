import React from 'react';
import styles from './ProductDetailsCard.module.scss';

interface ProductDetailsCardProps {
    title: string;
    price: number;
    description?: string;
    thumbnail: string;
    condition: string;
}

const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({  
    title,
    price,
    description,
    thumbnail,
    condition
 }) => {

    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0, // No mostrar decimales
        maximumFractionDigits: 0, // No mostrar decimales
    }).format(price);

    return (
        <div className={styles.productDetailsCard}>
            <div className={styles.infoDetail}>
                <img src={thumbnail} alt={title} />
                <div className={styles.productTitlePrice}>
                    <h1>{title}</h1>
                    <p>{formattedPrice} </p>
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
