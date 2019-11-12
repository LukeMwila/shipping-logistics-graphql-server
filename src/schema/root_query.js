const graphql = require("graphql");
const axios = require("axios");

const { GraphQLObjectType, GraphQLList } = graphql;
const LoadType = require("./types/load");
const UnitType = require("./types/unit");
const SupplierType = require("./types/supplier");
const SupplierEmployeeType = require("./types/supplierEmployee");
const TransporterType = require("./types/transporter");
const TransporterEmployeeType = require("./types/transporterEmployee");
const TripType = require("./types/trip");
const VehicleType = require("./types/vehicle");
const LoadStatusType = require("./types/loadStatus");
const TripStatusType = require("./types/tripStatus");
const PaymentType = require("./types/payment");
const OfferType = require("./types/offer");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    loads: {
      type: new GraphQLList(LoadType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/loads")
          .then(response => response.data);
      }
    },
    units: {
      type: new GraphQLList(UnitType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/units")
          .then(response => response.data);
      }
    },
    suppliers: {
      type: new GraphQLList(SupplierType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/suppliers")
          .then(response => response.data);
      }
    },
    supplierEmployees: {
      type: new GraphQLList(SupplierEmployeeType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/supplieremployees")
          .then(response => response.data);
      }
    },
    transporters: {
      type: new GraphQLList(TransporterType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/transporters")
          .then(response => response.data);
      }
    },
    transporterEmployees: {
      type: new GraphQLList(TransporterEmployeeType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/transporteremployees")
          .then(response => response.data);
      }
    },
    trips: {
      type: new GraphQLList(TripType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/trips")
          .then(response => response.data);
      }
    },
    vehicles: {
      type: new GraphQLList(VehicleType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/vehicles")
          .then(response => response.data);
      }
    },
    loadStatuses: {
      type: new GraphQLList(LoadStatusType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/loadstatus")
          .then(response => response.data);
      }
    },
    tripStatuses: {
      type: new GraphQLList(TripStatusType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/tripstatus")
          .then(response => response.data);
      }
    },
    payments: {
      type: new GraphQLList(PaymentType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/payments")
          .then(response => response.data);
      }
    },
    offers: {
      type: new GraphQLList(OfferType),
      resolve(parentValue, args) {
        return axios
          .get("http://localhost:3004/offers")
          .then(response => response.data);
      }
    }
  })
});

module.exports = RootQuery;
