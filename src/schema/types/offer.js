/**
 * Offer type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString,
} = graphql;

/** Import data types being referenced */

const OfferType = new GraphQLObjectType({
  name: 'OfferType',
  fields: () => ({
    id: { type: GraphQLString },
    cost: { type: GraphQLString },
    load: {
      type: require('./load'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/loads/${parentValue.loadId}`)
          .then(response => response.data);
      },
    },
    transporter: {
      type: require('./transporter'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporters/${parentValue.transporterId}`)
          .then(response => response.data);
      }
    },
    offerStatus: {
      type: require('./offerStatus'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/offerstatus/${parentValue.offerStatusId}`)
          .then(response => response.data);
      }
    }
  }),
});

module.exports = OfferType;
