import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        trim: true,
        validate: {
            validator: function(v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); // Basic email validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    contact_number: {
        type: Number,
        unique: true,
        required: [true, "Contact number is required"],
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Validates that the number has exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit contact number!`
        }
    },
    neetScore: {
        type: Number,
        required: [true, "NEET score is required"],
        default: 0,
        min: [0, "NEET score should be greater than or equal to 0"],
        max: [720, "NEET score should be less than or equal to 720"]
    },
    neetAIR: {
        type: Number,
        required: [true, "NEET AIR is required"],
        min: [1, "NEET AIR should be greater than or equal to 1"]
    },
    state: {
        type: String,
        required: [true, "State is required"],
        trim: true
    },
    district: {
        type: String,
        required: [true, "District is required"],
        trim: true
    },
    course: {
        type: String,
        required: [true, "Course is required"],
        trim: true,
        enum: {
            values: ["MBBS", "BDS", "BAMS", "BHMS", "BUMS"], // Example courses
            message: "{VALUE} is not a valid course"
        }
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

