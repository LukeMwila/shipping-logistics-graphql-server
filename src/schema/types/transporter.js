/**
 * Transporter type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString, GraphQLList,
} = graphql;

const TransporterType = new GraphQLObjectType({
  name: 'TransporterType',
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
    transporterEmployee: {
      type: new GraphQLList(require('./transporterEmployee')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporters/${parentValue.id}/transporteremployees`)
          .then(response => response.data);
      },
    },
    trips: {
      type: new GraphQLList(require('./trip')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporters/${parentValue.id}/trips`)
          .then(response => response.data);
      },
    }
  }),
});

module.exports = TransporterType;
