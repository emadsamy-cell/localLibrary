const genre = require('../model/genre');
const asyncHandler = require('express-async-handler');

// Display list of all genres.
exports.genre_index = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre index");
});
  
// Display detail page for a specific genre.
exports.genre_show = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: genre detail: ${req.params.id}`);
});

// Display genre create form on GET.
exports.genre_create = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre create GET");
});

// Handle genre create on POST.
exports.genre_store = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre create POST");
});

// Display genre delete form on GET.
exports.genre_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre delete GET");
});

// Handle genre delete on POST.
exports.genre_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre delete POST");
});

// Display genre update form on GET.
exports.genre_edit = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre update GET");
});

// Handle genre update on POST.
exports.genre_update = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre update POST");
});