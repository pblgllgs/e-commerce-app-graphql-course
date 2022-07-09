import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
        reviews: [Review!]!
    }

    type Mutation {
        addCategory(input: AddCategoryInput): Category!
        addProduct(input: AddProductInput): Product!
        addReview(input: AddReviewInput): Review!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        price: Float!
        quantity: Int!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }
    type Category {
        id: ID!
        name: String!
        products(filter: ProductFilterInput): [Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }
    input AddProductInput {
        name: String!
        description: String!
        image: String!
        price: Float!
        quantity: Int!
        onSale: Boolean!
        categoryId: String!
    }

    input AddReviewInput {
        date: String!
        title: String!
        comment: String!
        rating: Int!
        productId: String!
    }
`;
