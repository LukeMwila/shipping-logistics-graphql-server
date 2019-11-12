/**
 * Load type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt,
} = graphql;

const LoadType = new GraphQLObjectType({
  name: 'LoadType',
  fields: () => ({
    id: { type: GraphQLString },
    totalWeight: { type: GraphQLInt },
    distanceForTrip: { type: GraphQLInt },
    pickupDate: { type: GraphQLString },
    pickupTime: { type: GraphQLString },
    pickupLocation: { type: GraphQLString },
    dropOffDate: { type: GraphQLString },
    dropOffTime: { type: GraphQLString },
    dropOffLocation: { type: GraphQLString },
    supplier: {
      type: require('./supplier'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/suppliers/${parentValue.supplierId}`)
          .then(response => response.data);
      },
    },
    units: {
      type: new GraphQLList(require('./unit')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/load/${parentValue.id}/units`)
          .then(response => response.data);
      },
    },
    offers: {
      type: new GraphQLList(require('./offer')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/load/${parentValue.id}/offers`)
          .then(response => response.data);
      },
    },
    loadStatus: {
      type: require('./loadStatus'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/loadstatus/${parentValue.loadStatusId}`)
          .then(response => response.data);
      },
    },
  }),
});

module.exports = LoadType;
