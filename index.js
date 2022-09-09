const Upload = require("./Upload.js");
const GraphQLUpload = require("./GraphQLUpload.js");
const graphqlUploadExpress = require("./graphqlUploadExpress.js");
const graphqlUploadKoa = require("./graphqlUploadKoa.js");
const processRequest = require("./processRequest.js");

module.exports = {
  Upload,
  GraphQLUpload,
  graphqlUploadExpress,
  graphqlUploadKoa,
  processRequest
}