import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;

  const channelList = [
    "773713646824062998",
    "816710076600549416",
    "816714360545214536",
  ];

  setInterval(async () => {
    const index = await randomChannelIndex();
    await sendMessage(token, channelList[index], "un.work");
    await delay(3);
    await sendMessage(token, channelList[index], "un.dep all");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep...`);
  }, 45 * 1000);
})();
