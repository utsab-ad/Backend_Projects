import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }

}, {timestamps: true});

const Category = mongoose.model("Category", categorySchema, "categories");

export default Category;