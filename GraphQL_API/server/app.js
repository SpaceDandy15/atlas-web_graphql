// server/app.js

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true  // Enables GraphiQL GUI at http://localhost:4000/graphql
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});
