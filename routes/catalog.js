const express = require('express');
const router = express.Router();

const bookController = require('../controller/bookController');
const authorController = require('../controller/authorController');
const BookInstance = require('../controller/BookInstanceController');
const genre = require('../controller/genreController');
//index show create store edit update delete

router.get('/' , bookController.book_index);
router.get('/book/:id', bookController.book_show);
router.get('/book/create' , bookController.book_create);
router.get('/edit/:id' , bookController.book_edit);

router.post('/book/create' , bookController.book_store);
router.post('/update/:id' , bookController.book_update);
router.post('/delete/:id' , bookController.book_delete_post);

router.get('/author' , authorController.author_index);
router.get('/author/create' , authorController.author_create);

router.post('/author/create' , authorController.author_store);
module.exports = router;