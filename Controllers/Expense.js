const Expense = require('../modules/ExpenseModule');

exports.addExpense = async (req, res) => {
    const { description, type } = req.body;

    const expense = new Expense({
        type,
        description
    });

    try {
        // Validations
        if (!type || !description) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        await expense.save();
        res.status(200).json({ message: 'Expense Added' });
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(expense);
};

exports.getExpense = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ createdAt: -1 });
        res.status(200).json(expenses);
    } catch (error) {
        console.error(error); // Log the actual error
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        await Expense.findByIdAndDelete(id);
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (err) {
        console.error(err); // Log the actual error
        res.status(500).json({ message: 'Server Error' });
    }
};