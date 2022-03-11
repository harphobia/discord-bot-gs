import { sendMessage } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;
  const channelId = "946305403539582976";

  setInterval(async () => {
    await sendMessage(token, channelId, "emine");
  }, 16 * 1000);

  setInterval(async () => {
    console.log(`[${moment().format("hh:mm:ss")}] Do daily task...`);
    await sendMessage(token, channelId, "edaily");
    await delay(3);
    await sendMessage(token, channelId, "eupgrade");
  }, 24 * 60 * 60 * 1000);
})();
