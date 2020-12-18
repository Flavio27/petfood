const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

mongoose
  .connect('mongodb+srv://book-test:xikOq2p7QZcqLpYC@cluster0.glb7j.mongodb.net/petfood?retryWrites=true&w=majority')
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Error in DB initialization: ${err}`));
