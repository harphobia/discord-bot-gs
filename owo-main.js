import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;
  // const bid = process.env.BID || 100;

  // const owoChannelList = [
  //   "775261763163521055",
  //   "840360413719298069",
  //   "840360978242732052",
  //   "908011945356058744",
  //   "908012010028036206",
  // ];

  try {
    setInterval(async () => {
      await sendMessage(token, "952875549561339944", "owo");
      await delay(5);
      await sendMessage(token, "952875549561339944", "owo hunt");
      await delay(5);
      await sendMessage(token, "952875549561339944", "owo pray");
      await delay(5);
      await sendMessage(token, "952875549561339944", "owo slot 1");
      await delay(5);
      await sendMessage(token, "952875549561339944", "owo coinflip 1");
      console.log(`[${moment().format("hh:mm:ss")}] Sleep 5 minutes...`);
    }, 5 * 60 * 1000);

    // setInterval(async () => {
    //   await sendMessage(token, owoChannelList[index], "owo");
    //   await delay(5);
    //   await sendMessage(token, owoChannelList[index], `owo coinflip ${bid}`);
    //   await delay(5);
    //   await sendMessage(token, owoChannelList[index], `owo slot ${bid}`);
    //   console.log(`[${moment().format("hh:mm:ss")}] Sleep 15 minutes...`);
    // }, 15 * 60 * 1000);

    setInterval(async () => {
      const index = await randomChannelIndex(0, owoChannelList.length);
      await sendMessage(token, owoChannelList[index], "owo");
      await delay(5);
      await sendMessage(token, owoChannelList[index], "owo daily");
      console.log(`[${moment().format("hh:mm:ss")}] Sleep 6 hours...`);
    }, 6 * 60 * 60 * 1000);
  } catch (error) {
    console.log(error);
  }
})();
