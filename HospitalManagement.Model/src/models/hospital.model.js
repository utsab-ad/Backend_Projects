import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine01: {
      type: String,
      required: true,
    },
    addressLine02: {
      type: String,
    },
     city: {
      type: String,
      required: true,
    },
     pincode: {
      type: String,
      required: true,
    },
     specializedIn: [
        {
            type: String
        }
     ],
  },
  { timestamps: true }
);

const Hospital = mongoose.model("Hospital", hospitalSchema, "hospitals");

export default Hospital;
