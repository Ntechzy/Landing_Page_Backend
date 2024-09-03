import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
        requied: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    contact_number: {
        type: Number,
        unique: true,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); // Validates that the number has exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit contact number!`
        }
    }, 

    neetScore: {
        type: Number,
        required: true,
        default: 0,
        min: [0, "Value Should be greater than 0"],
        max: [720, "Value Should be less than or equal to 720"]
    }

}, {timestamps: true})

export const User = new mongoose.model("User", userSchema)
