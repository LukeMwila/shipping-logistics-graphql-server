/**
 * OfferStatus type
 */

const graphql = require('graphql');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString
} = graphql;

const OfferStatus = new GraphQLObjectType({
  name: 'OfferStatus',
  fields: () => ({
    id: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

module.exports = OfferStatus;