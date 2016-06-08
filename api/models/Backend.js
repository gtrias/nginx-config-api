/**
 * Backend.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ip: {
      type: 'string'
    },
    ports: {
      type: 'string'
    },
    lastSeen: {
      type: 'datetime'
    },
    static: {
      type: 'boolean'
    },
    location: {
      model: 'location'
    }
  }
};

