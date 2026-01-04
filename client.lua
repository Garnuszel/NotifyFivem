local function addNotify(type, title, desc, length)
    SendNUIMessage({
        action = "addNotify",
        type = type,
        title = title,
        desc = desc,
        lenght = length
    })
end

exports("addNotify", addNotify)

RegisterCommand("testnotify", function()
    exports[GetCurrentResourceName()]:addNotify("info", "Info", "TEST", 4000)
    exports[GetCurrentResourceName()]:addNotify("success", "Success", "TEST", 8000)
    exports[GetCurrentResourceName()]:addNotify("warning", "Warn", "TEST", 12000)
    exports[GetCurrentResourceName()]:addNotify("error", "Error", "TEST", 16000)
end)