const mongoose = require('mongoose');

const { Schema } = mongoose;
const produto = new Schema({
  petshop_id: {
    type: Schema.Types.ObjectId,
    ref: 'Petshop',
  },
  nome: String,
  capa: String,
  preco: Number,
  avaliacoes: Number,
});

module.exports = mongoose.model('Produto', produto);
