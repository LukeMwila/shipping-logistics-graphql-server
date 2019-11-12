/**
 * Supplier type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString, GraphQLList,
} = graphql;

const SupplierType = new GraphQLObjectType({
  name: 'SupplierType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    registrationNumber: { type: GraphQLString },
    vatNumber: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    faxNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    addressLine1: { type: GraphQLString },
    addressLine2: { type: GraphQLString },
    addressLine3: { type: GraphQLString },
    loads: {
      type: new GraphQLList(require('./load')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/supplier/${parentValue.id}/loads`)
          .then(response => response.data);
      },
    },
    supplierEmployees: {
      type: new GraphQLList(require('./supplierEmployee')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/supplier/${parentValue.id}/supplieremployees`)
          .then(response => response.data);
      },
    }
  }),
});

module.exports = SupplierType;
