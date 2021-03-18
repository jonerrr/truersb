const poopFart = require("discord.js-selfbot");
const client = new poopFart.Client();
client.on("ready", () => {
  console.log(`logged in as ${client.user.tag}`);
  client.user.setStatus("idle");
  client.user.setPresence({
    status: "idle",
    activity: {
      name: "TRUE😎",
      type: "WATCHING",
    },
  });
});
const generateReply = () => {
  let randomNumber = Math.floor(Math.random() * 1000);

  if (randomNumber == 0) {
    return "False!";
  } else if (randomNumber < 10) {
    return "Maybe?";
  } else {
    return "True!";
  }
};
client.on("message", function (message) {
  if (message.content.toLowerCase().includes("throw error")) {
    if (message.author.id !== "758420602808959046") return;
	message.channel,send("fuck you all")
    throw new Error("poop");
  }
  if(message.guild.id === "695354962921914439") return
  if(message.author.id === "514332511426445338") return
  if (message.author.bot) return;
  if (message.mentions.users.has(client.user.id)) {
//    if (message.guild.id === "695354962921914439") return;
//    if (message.author.id === "758420602808959046") return;
    message.reply(generateReply());
  }
});

client.login("NzgxNTk5NTYyMzg4NDcxODE5.YE-k3A.zw1E02oK4s4GgosIEkrgrLYITf0");
