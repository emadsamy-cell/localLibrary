const Author = require('../model/author');
const asyncHandler = require('express-async-handler');
const {body , validationResult} = require('express-validator');

// Display list of all Authors.
exports.author_index = asyncHandler(async (req, res, next) => {
    const authors = await Author.find().exec();
    res.render('showAuthor' , {authors : authors});
});
  
// Display detail page for a specific Author.
exports.author_show = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
});

// Display Author create form on GET.
exports.author_create = asyncHandler(async (req, res, next) => {
    res.render('add_Author');
    
});

// Handle Author create on POST.
exports.author_store = [
    body('fname').trim().isLength({min:1}).escape().withMessage('First name is required').isNumeric().withMessage('First name has non-alpha characters'),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const author = new Author({
            fname : req.body.fname,
            sname : req.body.sname,
            birth : req.body.birth,
            death : req.body.death
        })

        if(errors.isEmpty()){
            await author.save();
            res.redirect('/catalog/author');
        }
        else{
            res.render('add_Author' , {title : 'author form' , errors: errors.array()});
        }
    })
]
;

// Display Author delete form on GET.
exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete GET");
});

// Handle Author delete on POST.
exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author delete POST");
});

// Display Author update form on GET.
exports.author_edit = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update GET");
});

// Handle Author update on POST.
exports.author_update = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Author update POST");
});