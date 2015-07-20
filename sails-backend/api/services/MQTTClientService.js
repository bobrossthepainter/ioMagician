var mqtt = require('mqtt')
  , client;


var MQTTClientService = {
  initClient: function initClient() {

    client = mqtt.connect();

    client.on('connect', connect);

    client.on('message', message);

  },

  saveConfig: saveConfig,

  statusChange: statusChange


}


console.log("mqttClientService loaded...");
module.exports = MQTTClientService;

function connect() {
  client.subscribe('/#/config');
};

function message(topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
};

function saveConfig(config) {

  ControlableUnit.find({address: config.unitAddress}).exec(function (err, foundUnits)
  {
    if (err) {
      console.log("sth wrong!");
    }

    if (foundUnits.length === 0) {
      var newUnit = {};
      newUnit['address'] = config.unitAddress;
      newUnit['name'] = config.unitAddress;
      var ports = [];
      if (!config.ports){
        console.log("No ports found for unit " + config.unitAddress);
        return;
      }
      config.ports.forEach(function (port) {
        ports.push({name : port.portAddress, portAddress : port.portAddress})
      });
      createUnit(newUnit, ports);
      return;
    }

    console.log("unit found: " + JSON.stringify(foundUnits, null, '\t'))
  });


};

function createUnit(unit, ports){
  //ControlableUnit.create(unit).exec(function createCB(err, created){
  //  console.log('Created unit ' + JSON.stringify(created, null, '\t'));
  //});
  ControlableUnit.create(unit).then(function (createdUnit) {
    console.log('Created unit ' + JSON.stringify(createdUnit, null, '\t'));

    var createdPorts = [];
    ports.forEach(function(port){
      port.controlableUnit = createdUnit.id;
      Port.create(port).then(function (createdPort){
        createdPorts.push(createdPort);
        return;
      });
    });
    return [createdUnit, createdPorts];
  })
    .spread(function (createdUnit, createdPorts) {

      ControlableUnit.update({id : createdUnit.id},{ports : createdPorts}).exec(function afterwards(err, updatedUnit){

        if (err) {
          console.log('Error2 happened: ' + err);
          // handle error here- e.g. `res.serverError(err);`
          return;
        }

        console.log('Updated unit ' + JSON.stringify(updatedUnit, null, '\t'));
        return;
      });

    })
    .catch(function (err) {
      if (err) {
        console.log('Error happened: ' + err);
      }
      return ;
    });
}

function statusChange(status) {

};
