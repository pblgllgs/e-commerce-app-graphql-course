export const Category = {
    products: ({ id: categoryId }, {filter}, { db }) => {
        const categoryProducts = db.products.filter(
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
