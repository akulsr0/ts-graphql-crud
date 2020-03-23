import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';

import { typeDefs } from './src/typeDefs';
import { resolvers } from './src/resolvers';

const app: Application = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });

mongoose.connect(
  'mongodb://localhost:27017/ts-graphql-crud',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`Database Connected`);
    app.listen(4444, () => {
      console.log(`Server is running at http://localhost:4444`);
    });
  }
);
