/**
 * Backend.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ip: {
      type: 'string',
      primaryKey: true
    },
    ports: {
      type: 'string',
      primaryKey: true
    },
    lastSeen: {
      type: 'datetime'
    },
    static: {
      type: 'boolean'
    },
    location: {
      model: 'location',
      primaryKey: true
    }
  }
};

