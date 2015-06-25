clientId , portArray, getNodeInfo = dofile("config.lua")
print (clientId)
-- init mqtt client with keepalive timer 120sec
mq = mqtt.Client(clientId , 120, "user", "password")
mq:lwt("/lwt", "offline", 0, 0)
mq:on("connect", function(con)
    print ("connected")
end)
mq:on("offline", function(con) print ("offline") end)
-- on publish message receive event
mq:on("message", function(conn, topic, data)
  print(topic .. ":" )
  print(data)
  if data ~= nil then
    if portArray[topic] ~= nil then
      print("do some shit")
    end
  end
end)
-- for secure: m:connect("192.168.11.118", 1880, 1)
mq:connect("10.77.5.15", 1883, 0, function(connection) 
    print("connected") 
    mq:publish(clientId .."config",getNodeInfo(clientId, portArray),0,0, function(call) print("sent data")
    subscribeToTopics = {}
    for k,v in pairs(portArray) do
      subscribeToTopics[k]=0
    end
    mq:subscribe(subscribeToTopics, function(conn) print("subscribed all ports") end)
    return call
 end)
 return connection
end)