const Discord = require("discord.js");
const client = new Discord.client();
const DBL = require("dblapi.js");
const Conf = require("conf");
const config = new Conf({cwd: "./.config"});

let dbl;
if ((config.get("dbl") && config.has("token")) || (process.env.dbl && process.env.token)) {
  if (config.get("dbl") && config.get("token")) {
    client.login(config.get("token"));
  }
}
dbl = new DBL(config.DBLToken, client, {statsInterval: config.postInterval});

dbl.on('posted', () => {
  console.log('Server count posted!');
});
  
dbl.on('error', () => {
  console.log("Something happened!");
});
