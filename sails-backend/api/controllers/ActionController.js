/**
 * ActionController
 *
 * @description :: Server-side logic for managing Actions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  execute: function (req, res) {
    console.info('Incoming request:\n\t' + req.body);

    var id = req.params.id;

    Action.findOne(id).populate('commandExecutions').exec(function (err, foundAction) {
      if (err) return res.badRequest(err);

      if (!foundAction) {
        return res.notFound();
      }
      console.info(foundAction.toJSON());


      CommandService.execute(foundAction, function (err, status) {
        if (err) return res.badRequest(err);

        if (!status) {
          return res.notFound();
        }

        res.ok();
      });


    });
  }

};

