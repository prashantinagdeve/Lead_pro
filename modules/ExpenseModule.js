const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "expense"
    },
    description: {
        type: String,
        required: true,
        maxLength: 20,
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);