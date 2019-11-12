/**
 * TripCheckpoint type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString,
} = graphql;

const TripCheckpointType = new GraphQLObjectType({
  name: 'TripCheckpointType',
  fields: () => ({
    id: { type: GraphQLString },
    date: { type: GraphQLString },
    time: { type: GraphQLString },
    address: { type: GraphQLString },
    status: {
      type: require('./tripStatus'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/tripstatus/${parentValue.id}/`)
          .then(response => response.data);
      },
    },
    collectedFrom: {
      type: require('./supplierEmployee'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/supplieremployees/${parentValue.supplierEmployeeId}`)
          .then(response => response.data);
      },
    },
    collectedBy: {
      type: require('./transporterEmployee'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporteremployees/${parentValue.transporterEmployeeId}`)
          .then(response => response.data);
      },
    },
  }),
});

module.exports = TripCheckpointType;
