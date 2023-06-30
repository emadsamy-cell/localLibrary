const BookInstance = require('../model/BookInstance');
const asyncHandler = require('express-async-handler');

// Display list of all BookInstances.
exports.BookInstance_index = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance index");
});
  
// Display detail page for a specific BookInstance.
exports.BookInstance_show = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// Display BookInstance create form on GET.
exports.BookInstance_create = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// Handle BookInstance create on POST.
exports.BookInstance_store = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
});

// Display BookInstance delete form on GET.
exports.BookInstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// Handle BookInstance delete on POST.
exports.BookInstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// Display BookInstance update form on GET.
exports.BookInstance_edit = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
});

// Handle BookInstance update on POST.
exports.BookInstance_update = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
});