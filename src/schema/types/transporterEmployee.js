/**
 * TransporterEmployee type
 */

const graphql = require('graphql');
const axios = require('axios');

/** Import object types from GraphQL */
const {
  GraphQLObjectType, GraphQLString,
} = graphql;

const TransporterEmployeeType = new GraphQLObjectType({
  name: 'TransporterEmployeeType',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    surname: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    company: {
      type: require('./transporter'),
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3004/transporters/${parentValue.transporterId}`)
          .then(response => response.data);
      },
    },
  }),
});

module.exports = TransporterEmployeeType;
