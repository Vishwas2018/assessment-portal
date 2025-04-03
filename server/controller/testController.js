// server/controller/testController.js
const mongoose = require('mongoose');
const Test = require('../models/Test');

// Get all tests
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.find().sort({ createdAt: -1 });
    res.json(tests);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get test by ID
exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    
    res.json(test);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Test not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a test
exports.createTest = async (req, res) => {
  try {
    const { title, description, questions, timeLimit, passingScore } = req.body;
    
    // Create new test
    const newTest = new Test({
      title,
      description,
      questions,
      timeLimit,
      passingScore,
      createdBy: req.user.id
    });
    
    const test = await newTest.save();
    
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update test
exports.updateTest = async (req, res) => {
  try {
    const { title, description, questions, timeLimit, passingScore, isPublished } = req.body;
    
    // Find test
    let test = await Test.findById(req.params.id);
    
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    
    // Check user
    if (test.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'User not authorized' });
    }
    
    // Update fields
    if (title) test.title = title;
    if (description) test.description = description;
    if (questions) test.questions = questions;
    if (timeLimit !== undefined) test.timeLimit = timeLimit;
    if (passingScore !== undefined) test.passingScore = passingScore;
    if (isPublished !== undefined) test.isPublished = isPublished;
    
    await test.save();
    
    res.json(test);
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Test not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete test
exports.deleteTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    
    // Check user
    if (test.createdBy.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'User not authorized' });
    }
    
    await test.remove();
    
    res.json({ message: 'Test removed' });
  } catch (err) {
    console.error(err.message);
    
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Test not found' });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
};