/**
 * Payment type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString
} = graphql;

const PaymentType = new GraphQLObjectType({
  name: 'PaymentType',
  fields: () => ({
    id: { type: GraphQLString },
    dateReceived: { type: GraphQLString },
    terms: { type: GraphQLString },
    amountPaid: { type: GraphQLString },
    trip: {
      type: require('./trip'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/trips/${parentValue.tripId}/`)
          .then(response => response.data);
      },
    },
    paidBy: {
      type: require('./supplier'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/suppliers/${parentValue.supplierId}/`)
          .then(response => response.data);
      },
    },
    paidTo: {
      type: require('./transporter'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporters/${parentValue.transporterId}/`)
          .then(response => response.data);
      },
    },
  }),
});

module.exports = PaymentType;
