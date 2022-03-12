import { randomChannelIndex, sendMessage, delay } from "./bin/discord.js";
import moment from "moment";

(async () => {
  const token = process.env.TOKEN;

  const owoChannelList = [
    "775261763163521055",
    "840360413719298069",
    "840360978242732052",
    "908011945356058744",
    "908012010028036206",
  ];

  const workChannelList = [
    "773713646824062998",
    "816710076600549416",
    "816714360545214536",
  ];

  //work
  setInterval(async () => {
    const index = await randomChannelIndex(0, workChannelList.length);
    await sendMessage(token, workChannelList[index], "un.work");
    await delay(3);
    await sendMessage(token, workChannelList[index], "un.dep all");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep 45 seconds...`);
  }, 45 * 1000);

  setInterval(async () => {
    const index = await randomChannelIndex(0, owoChannelList.length);
    await sendMessage(token, owoChannelList[index], "owo pray");
    await delay(3);
    await sendMessage(token, owoChannelList[index], "owo sell c u r");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep 5 minutes...`);
  }, 5 * 60 * 1000);

  setInterval(async () => {
    const index = await randomChannelIndex(0, owoChannelList.length);
    await sendMessage(token, owoChannelLis[index], "owo hunt");
    await delay(3);
    await sendMessage(token, owoChannelLis[index], "owo coinflip 500");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep 10 seconds...`);
  }, 10 * 1000);

  setInterval(async () => {
    const index = await randomChannelIndex(0, owoChannelList.length);
    await sendMessage(token, owoChannelLis[index], "owo daily");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep 6 hours...`);
  }, 6 * 60 * 60 * 1000);
})();
