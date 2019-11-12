const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const expressPlayground = require('graphql-playground-middleware-express')
  .default;

const schema = require('./schema');

const app = express();

app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;
