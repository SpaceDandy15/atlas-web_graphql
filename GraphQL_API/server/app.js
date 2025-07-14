// server/app.js

require('dotenv').config(); // Load environment variables

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL UI
}));

// Start Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
