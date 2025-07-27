import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Food name is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    price: {
        type: String,
        required: [true, 'Price is required'],
    },
    
    image: {
        type: String,
        required: [true, 'Image URL is required'],
    },
    category: {
        type: String,
        required: [true, 'Category is required'], // e.g., Pizza, Burger, Dessert
    }
});

export const foodModel = mongoose.models.food || mongoose.model('Food', foodSchema);
