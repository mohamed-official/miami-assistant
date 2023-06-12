const express = require("express");
require("dotenv").config({ path: "./.env.local" });
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Express app!");
});
app.listen(3000, () => {
  console.log("\033[32m SERVER STARTED");
});
app.use("/ping", (req, res) => {
  res.send(new Date());
});

//=================================

const Discord = require("discord.js");
const client = new Discord.Client();
const ms = require("ms");
const fs = require("fs");
const disbut = require("discord-buttons");
disbut(client);
const axios = require("axios");

//=================================

client.on("ready", () => {
  console.log(`[NAME] ${client.user.tag}`);
  console.log(`[ID] ${client.user.id}`);
  console.log(`[GUILDS] ${client.guilds.cache.size}`);
  console.log(`[PING] ${client.ws.ping}`);
  client.user.setStatus("online");
  function msg() {
    let status = [`Devil Store`, "By M7md.#0001"];
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: "PLAYING" });
  }

  setInterval(msg, 7000);
});

//=================================

let sug = ["1117386355568295986", "1117386058607374417", ""];

let shopChannels = [
  "1116354613126381650",
  "1116354064465281044",
  "1116353921645023242",
  "1116353941018513468",
  "1116353897699754036",
  "1116353881115475988",
  "1116353858097131600",
  "1116328757414862929",
];

let link =
  "https://media.discordapp.net/attachments/1116328731527610368/1117385723314720788/1065272365476478997.png";

//=================================

client.on("message", function (message) {
  if (message.author.bot) return;

  if (message.content == "خط") {
    message.delete();
    message.channel.send({ files: [link] });
  }

  if (shopChannels.includes(message.channel.id)) {
    message.channel.send({ files: [link] });
  }
});

client.on("message", function (message) {
  let args = message.content.split(",");
  if (message.author.bot) return;
  if (sug.includes(message.channel.id)) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        `${message.author.tag}`,
        message.author.avatarURL({ dynamic: true })
      )
      .setColor(`RANDOM`)
      .setThumbnail(message.author.avatarURL({ dynamic: true }))
      .setDescription(`> **${args}**`)
      .setTimestamp();
    let attachm = message.attachments.first();
    if (attachm) {
      embed.setImage(attachm.proxyURL);
    }
    message.channel.send(embed).then((msg) => {
      if (msg.channel.id == "1117386355568295986") {
        msg.react(`1117757543796719743`).then(() => {
          msg.react("1117389705017827338");
        });
      } else if (msg.channel.id == "1117386058607374417") {
        msg.react(`1117389077696745502`);
      }
      message.channel.send({ files: [link] });
    });
  }
});

//=================================

client.login(process.env.token).catch((err) => {
  console.warn("\033[31m Token Invalid");
});
