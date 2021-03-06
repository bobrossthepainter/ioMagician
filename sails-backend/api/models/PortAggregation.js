/**
 * portAggregation.js
 *
 * @description :: TODO: You might write a short summary of how this model works
 *              and what it represents here.
 * @docs :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes : {

		name : 'string',

		description : 'string',

		ports : {
			collection : "Port"
		},

		statusCurrent : "integer",

		statusMax : "integer",

		commands : {
			collection : "Command"
		}

	}
};
