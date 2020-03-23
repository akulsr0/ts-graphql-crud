import { Product } from './models/Product';

export const resolvers = {
  Query: {
    products: (): Object => Product.find()
  },
  Mutation: {
    createProduct: async (_: any, product: Object) => {
      const p = new Product(product);
      await p.save();
      return p;
    },
    deleteProduct: async (_: any, p: any) => {
      let product = await Product.findById(p.id);
      await Product.findByIdAndDelete(p.id);
      return product;
    },
    updateProduct: async (_: any, p: any) => {
      let { name, price, category } = p;
      if (name !== undefined) {
        await Product.findOneAndUpdate({ id: p.pid }, { name });
      }
      if (price !== undefined) {
        await Product.findOneAndUpdate({ id: p.pid }, { price });
      }
      if (category !== undefined) {
        await Product.findOneAndUpdate({ id: p.pid }, { category });
      }
      return;
    }
  }
};
