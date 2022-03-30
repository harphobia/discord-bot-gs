import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;
  const target = process.env.TARGET || "277387507400835072";

  const workChannelList = [
    "773713646824062998",
    "816710076600549416",
    "816714360545214536",
    "775261763163521055",
    "840360413719298069",
    "840360978242732052",
    "908011945356058744",
    "908012010028036206"
  ];

  try {
    //work
    setInterval(async () => {
      const index = await randomChannelIndex(0, workChannelList.length);
      await sendMessage(token, workChannelList[index], "un.crime");
      await delay(5);
      await sendMessage(token, workChannelList[index], "un.work");
      await delay(5);
      await sendMessage(token, workChannelList[index], `un.give ${target} all`);
      await delay(5);
      await sendMessage(token, workChannelList[index], "un.resetmoney");
      await delay(5);
      await sendMessage(token, workChannelList[index], "y");
      await delay(5);
      await sendMessage(token, workChannelList[index], "un.slut");
      await delay(5);
      await sendMessage(token, workChannelList[index], `un.give ${target} all`);
      await delay(5);
      await sendMessage(token, workChannelList[index], "un.resetmoney");
      await delay(5);
      await sendMessage(token, workChannelList[index], "y");
      console.log(`[${moment().format("hh:mm:ss")}] Sleep 65 seconds...`);
    }, 80 * 1000);
  } catch (error) {
    console.log(error);
  }
})();
