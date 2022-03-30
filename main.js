import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;

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
      await sendMessage(token, workChannelList[index], "un.work");
      await delay(5);
      await sendMessage(token, workChannelList[index], "un.dep all");
      console.log(`[${moment().format("hh:mm:ss")}] Sleep 45 seconds...`);
    }, 50 * 1000);
  } catch (error) {
    console.log(error);
  }
})();
