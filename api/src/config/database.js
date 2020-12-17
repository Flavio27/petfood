const mongoose = require('mongoose');

const { DATABASE_URL } = process.env.DATABASE_URL;

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

mongoose
  .connect(DATABASE_URL)
  .then(() => console.log('DB is up'))
  .catch((err) => console.log(`Error in DB initialization! error: ${err}`));
