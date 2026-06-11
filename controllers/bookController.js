const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
    try { const newBook = new Book(req.body); await newBook.save(); res.status(201).json(newBook); }
    catch (err) { res.status(400).json({ error: err.message }); }
};

exports.getAllBooks = async (req, res) => {
    try { const books = await Book.find(); res.status(200).json(books); }
    catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getBookById = async (req, res) => {
    try { const book = await Book.findById(req.params.id); if (!book) return res.status(404).json({ error: 'Book not found' }); res.status(200).json(book); }
    catch (err) { res.status(400).json({ error: err.message }); }
};

exports.updateBook = async (req, res) => {
    try { const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.status(200).json(updatedBook); }
    catch (err) { res.status(400).json({ error: err.message }); }
};

exports.deleteBook = async (req, res) => {
    try { await Book.findByIdAndDelete(req.params.id); res.status(200).json({ message: 'Deleted successfully' }); }
    catch (err) { res.status(400).json({ error: err.message }); }
};