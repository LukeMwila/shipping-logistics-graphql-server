/**
 * TripStatus type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString,
} = graphql;

const TripStatus = new GraphQLObjectType({
  name: 'TripStatus',
  fields: () => ({
    id: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

module.exports = TripStatus;