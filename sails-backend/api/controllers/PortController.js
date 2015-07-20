/**
 * PortController
 *
 * @description :: Server-side logic for managing Ports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  register: function(req, res){

    //json = _.merge({}, req.params.all(), req.body);

    var data_from_client = req.params.all();

    if(req.isSocket && req.method === 'POST'){

      // This is the message from connected client
      // So add new conversation
      Chat.create(data_from_client)
        .exec(function(error,data_from_client){
          console.log(data_from_client);
          Chat.publishCreate({id: data_from_client.id, message : data_from_client.message , user:data_from_client.user});
        });
    }
    else if(req.isSocket){
      // subscribe client to model changes
      Chat.watch(req.socket);
      console.log( 'User subscribed to ' + req.socket.id );
    }

  },

  execute: function (req, res) {
    console.info('Incoming request:\n\t' + req.body);

    var id = req.params.id;

    Port.findOne(id).populate('controlableUnit').exec(function (err, foundPort) {
      if (err) return res.badRequest(err);

      if (!foundPort) {
        return res.notFound();
      }
      console.info(foundPort.toJSON());


      PortService.execute(foundPort, function (err, status) {
        if (err) return res.badRequest(err);

        if (!status) {
          return res.notFound();
        }

        res.ok();
      });


    });
  }



};

