/**
 * JobsCreated.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    connection: 'soEconomicMongoDB',
    tableName: 'jobsCreated',
    attributes: {

        year: {
            type: 'integer',
            required: true
        },
        month: {
            type: 'integer',
            required: true
        },
        yearMonth: {
            type: 'string',
            required: true
        },
        blsJobsCreated: {
            type: 'integer',
            required: true
        }
    }
};