/**
 * command.js
 *
 * @description :: TODO: You might write a short summary of how this model works
 *              and what it represents here.
 * @docs :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

	attributes : {

		name : {
      type : "string",
      required: true
    },

		description : "string",

		port : {
      model : "Port"
    },

    portAggregation : {
      model : "PortAggregation"
    },

		valueStart : "string",

		valueEnd : "string",

    /**
     * -1 is infinite, 0 is triggering
     */
    time : "int",

		statusAffect : {
			type : "string",
			enum : [ "ADD_TIME", "REMOVE_TIME" ]
		},

		statusMultiplicator : "float",

		validKeys : {
			collection : "apiKey"
		}
	}

};
