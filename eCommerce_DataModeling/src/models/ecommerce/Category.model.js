import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    

}, {timestamps: true});

const Category = mongoose.model("Category", categorySchema, "categories");

export default Category;