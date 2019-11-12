/**
 * Trip type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString, GraphQLList,
} = graphql;

const TripType = new GraphQLObjectType({
  name: 'TripType',
  fields: () => ({
    id: { type: GraphQLString },
    load: {
      type: require('./load'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/loads/${parentValue.loadId}`)
          .then(response => response.data);
      },
    },
    driver: {
      type: require('./transporterEmployee'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporteremployees/${parentValue.transporterEmployeeId}`)
          .then(response => response.data);
      },
    },
    vehicle: {
      type: require('./vehicle'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/vehicles/${parentValue.vehicleId}`)
          .then(response => response.data);
      },
    },
    tripCheckpoints: {
      type: new GraphQLList(require('./tripCheckpoint')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/trip/${parentValue.id}/tripcheckpoints`)
          .then(response => response.data);
      },
    },
    payments: {
      type: new GraphQLList(require('./payment')),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/trip/${parentValue.id}/payments/`)
          .then(response => response.data);
      },
    },
  }),
});


module.exports = TripType;
