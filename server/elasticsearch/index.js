const { Client } = require('@elastic/elasticsearch');
const {
  ELASTICSEARCH_SCHEME,
  ELASTICSEARCH_HOST,
  ELASTICSEARCH_PORT
} = require('../config');

exports.elasticsearch = new Client({
  node: `${ELASTICSEARCH_SCHEME}://${ELASTICSEARCH_HOST}:${ELASTICSEARCH_PORT}`,
  // requestTimeout: 300000,
});
