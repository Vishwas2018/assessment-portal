// server/routes/tests.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllTests, getTestById, createTest, updateTest, deleteTest } = require('../controller/testController');

// @route   GET /api/tests
// @desc    Get all tests
// @access  Public
router.get('/', getAllTests);

// @route   GET /api/tests/:id
// @desc    Get test by ID
// @access  Public
router.get('/:id', getTestById);

// @route   POST /api/tests
// @desc    Create a test
// @access  Private
router.post('/', auth, createTest);

// @route   PUT /api/tests/:id
// @desc    Update test
// @access  Private
router.put('/:id', auth, updateTest);

// @route   DELETE /api/tests/:id
// @desc    Delete test
// @access  Private
router.delete('/:id', auth, deleteTest);

module.exports = router;