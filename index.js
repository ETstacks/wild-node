var msg = require("./information.js");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : msg.localisation+" "+msg.name,
    e : "oO",
    T : "U "

}));