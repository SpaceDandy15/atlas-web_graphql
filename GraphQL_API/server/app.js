// server/app.js

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://malikovance:NKei6aKv2TQSKSmb@cluster0.axq6bf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true  // Enables GraphiQL GUI at http://localhost:4000/graphql
}));

// Start server
app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
