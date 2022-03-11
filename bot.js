import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;
  const target = process.env.TARGET || "277387507400835072";

  const channelList = [
    "773713646824062998",
    "816710076600549416",
    "816714360545214536",
  ];

  setInterval(async () => {
    const index = await randomChannelIndex();
    await sendMessage(token, channelList[index], "un.crime");
    await delay(3);
    await sendMessage(token, channelList[index], "un.work");
    await delay(3);
    await sendMessage(token, channelList[index], `un.give ${target} all`);
    await delay(3);
    await sendMessage(token, channelList[index], "un.resetmoney");
    await delay(3);
    await sendMessage(token, channelList[index], "y");
    await delay(3);
    await sendMessage(token, channelList[index], "un.slut");
    await delay(3);
    await sendMessage(token, channelList[index], `un.give ${target} all`);
    await delay(3);
    await sendMessage(token, channelList[index], "un.resetmoney");
    await delay(3);
    await sendMessage(token, channelList[index], "y");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep...`);
  }, 65 * 1000);
})();
