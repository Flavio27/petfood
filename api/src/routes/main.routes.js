const express = require('express');
const Petshop = require('../models/petshop');
const Produto = require('../models/produto');
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
    const produtos = await Produto.find({
      // eslint-disable-next-line no-underscore-dangle
      petshop_id: petshop._id,
    }).populate('petshop_id', 'recipient_id');

    // eslint-disable-next-line no-underscore-dangle
    res.json({ error: false, petshop: { ...petshop._doc, produtos } });
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
