
const formattedPrice = (price: number, currency: string, decimal: number) => {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: decimal,
        maximumFractionDigits: decimal,
    }).format(price);
       
}
export { formattedPrice }