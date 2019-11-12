/**
 * LoadStatus type
 */

const graphql = require('graphql');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString
} = graphql;

const LoadStatus = new GraphQLObjectType({
  name: 'LoadStatus',
  fields: () => ({
    id: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

module.exports = LoadStatus;