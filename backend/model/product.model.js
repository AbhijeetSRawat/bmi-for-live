const mongoose = require('mongoose');

const ProductModel = new mongoose.Schema(
    {
        sale: String,
        title: String,
        price: Number,  
        image: String,
        category: {
            type: String,
            required: true,
            enum: [
                "Bannertop",
                "Shopby",
                "Superoffer1",
                "Restaurant",
                "Bakery",
                "Superoffer2",
                "NamkeenMaking",
                "DairySweet"
            ]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('bmi', ProductModel);
