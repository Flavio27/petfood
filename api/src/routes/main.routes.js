const express = require('express');
const Petshop = require('../models/petshop');
const Product = require('../models/product');
const { createSplitTransaction } = require('../services/pagarme');

const router = express.Router();

router.get('/petshops', async (req, res) => {
  try {
    const petshops = await Petshop.find();
    res.json({ error: false, petshops });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/petshops/:id', async (req, res) => {
  try {
    const petshop = await Petshop.findById(req.params.id);
    const products = await Product.findById({
      petshop_id: petshop._id,
    }).populate('petshop_id', 'recipient_id');

    res.json({ error: false, petshop: { ...petshop._doc, products } });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post('/purchase', async (req, res) => {
  try {
    const transaction = await createSplitTransaction(req.body);
    res.json(transaction);
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
