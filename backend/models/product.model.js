import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		image: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true //createdAt and updatedAt
	}
);
//'Product' mongoose will look at it and convert it to (plural) products, which mongoose will automatically handle, it will get this products collections
const Product = mongoose.model('Product', productSchema);

export default Product;
