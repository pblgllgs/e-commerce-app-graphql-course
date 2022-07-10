import { v4 as uuid } from 'uuid';

export const Mutation = {
    addCategory: (parent, { input }, { db }) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name,
        };
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, { input }, { db }) => {
        const {
            name,
            description,
            image,
            price,
            quantity,
            onSale,
            categoryId,
        } = input;
        const newProduct = {
            id: uuid(),
            name,
            description,
            image,
            price,
            quantity,
            onSale,
            categoryId,
        };
        db.products.push(newProduct);
        return newProduct;
    },
    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating, productId } = input;
        const newReview = {
            id: uuid(),
            date,
            title,
            comment,
            rating,
            productId,
        };
        db.reviews.push(newReview);
        return newReview;
    },
    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((cat) => cat.id !== id);
        db.products = db.products.map((prod) => {
            if (prod.categoryId === id) {
                return {
                    ...prod,
                    categoryId: null,
                };
            } else {
                return prod;
            }
        });
        return true;
    },
    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter((prod) => prod.id !== id);
        db.reviews = db.reviews.filter((rev) => rev.id !== id);
        return true;
    },
    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter((rev) => rev.id !== id);
        return true;
    },
    updateCategory: (parent, { id, input }, { db }) => {
        const index = db.categories.findIndex((cat) => cat.id === id);
        if (index === -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input,
        };
        return db.categories[index];
    },
    updateProduct: (parent, { id, input }, { db }) => {
        const index = db.products.findIndex((prod) => prod.id === id);
        if (index === -1) return null;
        db.products[index] = {
            ...db.products[index],
            ...input,
        };
        return db.products[index];  
    },
    updateReview: (parent, { id, input }, { db }) => {
        const index = db.reviews.findIndex((rev) => rev.id === id);
        if (index === -1) return null;
        db.reviews[index] = {
            ...db.reviews[index],
            ...input,
        };
        return db.reviews[index];
    }
};
