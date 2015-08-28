/**
 * action.js
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

		description : 'string',

		executionTime : 'string',

		ifCondition : {
			collection : 'condition'
		},

		commandExecutions : {
			collection : 'CommandExecution'
		},

    commands : {
      type: 'json'
    }

	}
};
