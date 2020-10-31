const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const DBL = require("dblapi.js");
const dbl = new DBL(config.DBLToken, client, {statsInterval: config.postInterval});

console.log("Logging in...");
client.login(config.discordToken);

client.on("ready", () => {
  console.log(`Logged as ${client.user.tag}!`);
  dbl.postStats(client.guilds.cache.size);
});

client.on("guildCreate", guild => {
  console.log(`Join new guild:${guild.name}`);
});

client.on("guildDelete", guild => {
  console.log(`Leave guild:${guild.name}`);
});

dbl.on('posted', () => {
  console.log('Server count posted!');
});
  
dbl.on('error', e => {
  console.log("Eww, something went wrong!");
  console.log(e);
});
