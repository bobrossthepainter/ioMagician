clientId = "node/"..node.chipid().."/"
function Port(iid, igpio)
  local object = {
      id = iid,
      gpio= igpio
    }
    return object
end
portArray = {}
    portArray[clientId.."0"] = Port(0,16)
    portArray[clientId.."1"] = Port(1,5)
    portArray[clientId.."2"] = Port(2,4)
    portArray[clientId.."3"] = Port(3,0)
    portArray[clientId.."4"] = Port(4,2)
    portArray[clientId.."5"] = Port(5,14)
    portArray[clientId.."6"] = Port(6,12)
    portArray[clientId.."7"] = Port(7,13)
    portArray[clientId.."8"] = Port(8,15)
    portArray[clientId.."9"] = Port(9,3)
    portArray[clientId.."10"] = Port(10,1)
function getNodeInfo(clientId, portArray)
    portArrayJson= "{\"unitAddress\":\""..clientId.."\",\"ports\":["
    for k,v in pairs(portArray) do
      portArrayJson = portArrayJson.."{\"portAddress\":\""..v.id.."\"},"
    end
    portArrayJson = string.sub(portArrayJson, 1, string.len(portArrayJson)-1).."]}"
  print (portArrayJson)
  return portArrayJson
end
return clientId , portArray, getNodeInfo




for k,v in pairs(portArray) do
   print(k.."\t"..v.id.."\t"..v.gpio.."\n")
end