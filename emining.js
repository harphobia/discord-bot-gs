import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;
  const channelId = "946305403539582976";

  setInterval(async () => {
    await sendMessage(token, channelId, "emine");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep...`);
  }, 16 * 1000);
})();
