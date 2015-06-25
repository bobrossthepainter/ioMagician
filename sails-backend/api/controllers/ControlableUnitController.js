/**
 * ControlableUnitController
 *
 * @description :: Server-side logic for managing Controlableunits
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  subscribe: function (req, res) {
    console.log('Entering subscribe ' + JSON.stringify(req.body, null, '\t'));

    //json = _.merge({}, req.params.all(), req.body);

    var data_from_client = req.params.all();
    var id = req.body.message.id;

    if(!id){
      return;
    }

    if (req.isSocket) {
      console.log('Client subscribed on socket ' + req.socket.id + ' for contolableunit: ' + id );
      // This is the message from connected client
      // So add new conversation
      ControlableUnit.find(id).exec(function (error, foundUnit) {
        if(error){
          console.log('Error while fetching controlable-unit: ' + id);
          return;
        }
        if(!foundUnit){
          console.log('Could not find controlable-unit for id: ' + id);
          return;
        }
        console.log('subscription for ' + JSON.stringify(foundUnit, null, '\t'));
        ControlableUnit.subscribe(req.socket, foundUnit, ['update']);
        console.log('id for ' + JSON.stringify(foundUnit.id));
        ControlableUnit.publishUpdate(foundUnit.id, foundUnit);
      });
    }
    else if (req.isSocket) {
      console.log('not supported request ' + req);
    }

  },

  unsubscribe: function (req, res) {

    //json = _.merge({}, req.params.all(), req.body);

    var data_from_client = req.params.all();
    var id = req.param('id');

    if (req.isSocket) {
      console.log('unsubscribing ' + req);
    }
    else if (req.isSocket) {
      console.log('not supported request ' + req);
    }

  },

};

