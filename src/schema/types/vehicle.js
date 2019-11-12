/**
 * Vehicle type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString,
} = graphql;

const VehicleType = new GraphQLObjectType({
  name: 'VehicleType',
  fields: () => ({
    id: { type: GraphQLString },
    numberPlate: { type: GraphQLString },
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    color: { type: GraphQLString },
    company: {
      type: require('./transporter'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporters/${parentValue.transporterId}`)
          .then(response => response.data);
      },
    },
  }),
});

module.exports = VehicleType;