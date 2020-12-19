const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);

mongoose
  .connect(process.env.DATABASE_URL)
  // eslint-disable-next-line no-console
  .catch((err) => console.error(`Error in DB initialization: ${err}`));
