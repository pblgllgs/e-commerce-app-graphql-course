export const Query = {
    hello: (parent, args, context) => {
        return 'Hello World!';
    },
    products: (parent, { filter }, { products, reviews }) => {
        let filteredProducts = products;
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale === true) {
                filteredProducts = filteredProducts.filter((prt) => {
                    return prt.onSale;
                });
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((prt) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach((review) => {
                        if (review.productId === prt.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= avgRating;
                });
            }
        }
        return filteredProducts;
    },
    product: (parent, { id }, { products }) => {
        return products.find((product) => product.id === id);
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
    category: (parent, { id }, { categories }) => {
        return categories.find((category) => category.id === id);
    },
};
