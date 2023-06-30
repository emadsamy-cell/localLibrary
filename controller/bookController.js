const book = require('../model/book');
const asyncHandler = require('express-async-handler');

const {body , validationResult} = require('express-validator');
// Display list of all books.
exports.book_index = asyncHandler(async (req, res, next) => {
    const books = await book.find({} , "title author").exec();
    await console.log(books);
    res.render('allBooks' ,{books : books});
});
  
// Display detail page for a specific book.
exports.book_show = asyncHandler(async (req, res, next) => {
    const curBook = await book.find({id : req.params.id}).exec();
    res.render('show_book' , {book : curBook});
    res.send(`NOT IMPLEMENTED: book detail: ${req.params.id}`);
});

// Display book create form on GET.
exports.book_create = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book create GET");
});

// Handle book create on POST.
exports.book_store = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book create POST");
});

// Display book delete form on GET.
exports.book_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book delete GET");
});

// Handle book delete on POST.
exports.book_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book delete POST");
});

// Display book update form on GET.
exports.book_edit = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book update GET");
});

// Handle book update on POST.
exports.book_update = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: book update POST");
});