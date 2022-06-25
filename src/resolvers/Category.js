export const Category = {
    products: ({ id: categoryId }, {filter}, { products }) => {
        const categoryProducts = products.filter(
            (product) => product.categoryId === categoryId
        );
        let filteredCategoryProducts = categoryProducts;
        if (filter) {
            if (filter.onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter(
                    (prt) => {
                        return prt.onSale;
                    }
                );
            }
        }
        return filteredCategoryProducts;
    },
};
