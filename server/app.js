const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster0.br1451q.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.once('open', () =>
  console.log('connected to database')
);

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});

