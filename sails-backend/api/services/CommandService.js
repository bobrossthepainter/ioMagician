var CommandService = {
  execute: function executeAction(action, cb) {
    console.info('Executin Action ' + action.name);
    var commandExecutions = action.commandExecutions;
    if (!commandExecutions) {
      return cb('No commands for action!');
    }
    var statusOK = true;
    commandExecutions.forEach(function (commandExecution) {
      console.info("forEach : " + commandExecution.command);


      Command.findOne(commandExecution.command).populateAll().then(function (foundCommand) {
        console.info(foundCommand.toJSON());


        var controlableUnit = ControlableUnit.findOne(foundCommand.port.controlableUnit).then(function (controlableUnit) {
          return controlableUnit;
        });
        return [foundCommand, controlableUnit];
      })
        .spread(function (foundCommand, controlableUnit) {
          console.info(controlableUnit.toJSON());

          var topic = controlableUnit.address + foundCommand.port.portAddress;
          var payload = {
            valueStart: foundCommand.valueStart,
            valueEnd: foundCommand.valueEnd,
            time: foundCommand.time
          };

          return MQTTBrokerService.publish(topic, payload, cb);
        })
        .catch(function (err) {
          if (err) return cb(err);
        });
    });
    return cb();
  }
}


//  exec(function (err, foundCommand) {
//  if (err) return cb('Error fetching command');
//
//  if (!foundCommand) {
//    // TODO: hanling of not found commands
//    return cb('Command not found!', null);
//  }
//
//  console.info(foundCommand.toJSON());
//
//
//
//  var port = foundCommand.port;
//  ControlableUnit.findOne(port.controlableUnit).exec(function (err, foundControlableUnit) {
//    if (err) return cb('Error fetching ControlableUnit');
//
//    if (!foundControlableUnit) {
//      // TODO: hanling of not found commands
//      return cb('ControlableUnit not found!', null);
//    }
//
//    var topic = foundControlableUnit.address + port.portAddress;
//    var payload = {
//      valueStart: foundCommand.valueStart,
//      valueEnd: foundCommand.valueEnd,
//      time: foundCommand.time
//    }
//
//    MQTTBrokerService.publish(topic, payload);
//  });
//});

//return 'Hello I am the real Service';
//    });
//  }
//};


module.exports = CommandService;
