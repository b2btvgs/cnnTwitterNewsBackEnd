/**
 * Gdp.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    connection: 'soEconomicMongoDB',
    tableName: 'gdp',
    attributes: {

        year: {
            type: 'integer',
            required: true
        },
        quarter: {
            type: 'integer',
            required: true
        },
        yearQuarter: {
            type: 'string',
            required: true
        },
        gdpPctChange: {
            type: 'float',
            required: true
        }
    }
};