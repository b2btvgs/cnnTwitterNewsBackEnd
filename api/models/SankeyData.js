/**
 * SankeyData.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    connection: 'soEconomicMongoDB',
    tableName: 'emersonSankeyTestData',
    attributes: {

        id: {
            type: 'string',
            unique: true
        },
        links: {
            type: 'array',
            required: true
        },
        nodes: {
            type: 'array',
            required: true
        }
    }
};