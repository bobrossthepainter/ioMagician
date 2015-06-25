/**
 * PortAggregationController
 *
 * @description :: Server-side logic for managing Portaggregations
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  getAll: function(req, res){
    PortAggregation.find().populate('commands').exec(function (err, found){
      if(err){
        return res.badRequest(err);
      }

      if(!found){
        return res.notFound();
      }

      return res.ok(JSON.stringify(found));
    });
  },

  get: function(req, res){
    PortAggregation.findOne(req.params.id).populate('commands').exec(function (err, found){
      if(err){
        return res.badRequest(err);
      }

      if(!found){
        return res.notFound();
      }

      return res.ok(JSON.stringify(found));
    });
  }

};

