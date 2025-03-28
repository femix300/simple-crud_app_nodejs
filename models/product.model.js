const { required } = require('joi')
const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image:  {
            type: String,
            required: false
        },
    },
    {
        timestamps: true,
    }
);

const product = mongoose.model("Product", ProductSchema);

// mongoose.model.exports = ProductSchema;
module.exports = mongoose.model("Product", ProductSchema);
