/**
 * Virtualhost.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    sslCert: {
      type: 'string'
    },
    sslKey: {
      type: 'string'
    },
    sslChain: {
      type: 'string'
    },
    portsPlain: {
      type: 'string'
    },
    portsSsl: {
      type: 'string'
    },
    locations: {
      collection: 'location',
      via: 'virtualhost'
    },
    aliases: {
      collection: 'virtualhostalias',
      via: 'virtualhost'
    },

  }
};

