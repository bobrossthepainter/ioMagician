var PortService = {
  execute: function executePort(port, cb) {
    console.info('Executing Port action ' + port.name + " - " + port.description);

    var topic = port.controlableUnit.address + port.portAddress;
    var payload = {
      value: port.value
    };

    return MQTTBrokerService.publish(topic, payload, cb);

  }
}


module.exports = PortService;
