/**
 * SupplierEmployee type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString
} = graphql;

const SupplierEmployeeType = new GraphQLObjectType({
  name: 'SupplierEmployeeType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    company: {
      type: require('./supplier'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/suppliers/${parentValue.supplierId}`)
          .then(response => response.data);
      },
    },
  }),
});

module.exports = SupplierEmployeeType;
