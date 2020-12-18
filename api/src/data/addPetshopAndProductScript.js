const Petshop = require('../models/petshop');
const Produto = require('../models/produto');
const { createRecipient } = require('../services/pagarme');
const petshopData = require('./initial-petfood-bulk.json');

require('../config/database');

const addPetshopsAndProducts = async () => {
  try {
    petshopData.map(async (petshop) => {
      const recipient = await createRecipient(petshop.nome);
      if (!recipient.error) {
        const newPetshop = await Petshop({
          ...petshop,
          recipient_id: recipient.data.id,
        }).save();
        await Produto.insertMany(
          // eslint-disable-next-line no-underscore-dangle
          petshop.produtos.map((p) => ({ ...p, petshop_id: newPetshop._id })),
        );
      } else {
        // eslint-disable-next-line no-console
        console.error(recipient.message);
      }
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.message);
  }
};

addPetshopsAndProducts();
