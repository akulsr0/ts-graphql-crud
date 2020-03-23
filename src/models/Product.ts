import mongoose, { Schema } from 'mongoose';

const productSchema: Schema = new Schema({
  name: {
    type: String
  },
  price: {
    type: Number
  },
  category: {
    type: String
  },
  dateCreated: {
    type: String,
    default: getDate()
  }
});

function getDate() {
  let today: Date = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let d: String = dd + '/' + mm + '/' + yyyy;
  return d;
}

export const Product = mongoose.model('product', productSchema);
