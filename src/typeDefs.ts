import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    category: String!
    dateCreated: String!
  }

  type Mutation {
    createProduct(name: String!, price: Float!, category: String!): Product!
    deleteProduct(id: String!): Product
    updateProduct(
      id: String!
      name: String
      price: Float
      category: String
    ): Product
  }
`;
