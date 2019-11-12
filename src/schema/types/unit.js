/**
 * Unit type
 */

const graphql = require('graphql');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString, GraphQLInt,
} = graphql;

/** Import data types being referenced */

const UnitType = new GraphQLObjectType({
  name: 'UnitType',
  fields: () => ({
    id: { type: GraphQLString },
    actualUnitType: { type: GraphQLString },
    size: { type: GraphQLString },
    weight: { type: GraphQLString },
    loadCategory: { type: GraphQLString },
    stackable: { type: GraphQLString },
    hazardous: { type: GraphQLString },
    commodityDescription: { type: GraphQLString },
    quantity: { type: GraphQLInt },
  }),
});

module.exports = UnitType;
