    -- A simple http server
    srv=net.createServer(net.TCP)
    srv:listen(7889,function(conn)
      conn:on("receive",function(conn,payload)
        print(payload)
        id = node.chipid()
        -- print chip ID
        conn:send("{id : "..id.."}")
      end)
      conn:on("sent",function(conn) conn:close() end)
    end)