
const router = require('express').Router();
const { addExpense, getExpense, deleteExpense } = require('../Controllers/Expense');


router
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id', deleteExpense)

module.exports = router