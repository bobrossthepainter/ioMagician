-- init config
-- dofile("config.lua")
-- init rest

tmr.alarm(1,1000, 1, function() 
    if wifi.sta.getip()==nil then 
        print(" Wait to IP address!") 
    else 
        print("New IP address is "..wifi.sta.getip()) 
        tmr.stop(1) 
        dofile("mqtt.lua")
    end 
end)

