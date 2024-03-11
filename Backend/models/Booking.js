const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must contain atleast 3 characters!"],
        maxLength: [30, "First name cannot exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must contain atleast 3 characters!"],
        maxLength: [30, "Last name cannot exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a Valid Email !"],
    },
    phone: {
        type: Number,
        required: true,
        minLength: [10, "Phone Number must contain atleast 10 Numbers!"],
        maxLength: [10, "Phone Number cannot exceed 10 Numbers !"],
    },
    time: {
        type: String,
        required: true, 
    },
    date: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Booking",bookingSchema);