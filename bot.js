import {
  randomChannelIndex,
  sendMessage,
  delay,
  login,
} from "./bin/discord.js";
import moment from "moment";

(async () => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const { token } = await login(email, password);

  setInterval(async () => {
    const index = await randomChannelIndex();
    await sendMessage(token, index, "un.crime");
    await delay(1);
    await sendMessage(token, index, "un.work");
    await delay(1);
    await sendMessage(token, index, "un.give 277387507400835072 all");
    await delay(1);
    await sendMessage(token, index, "un.resetmoney");
    await delay(1);
    await sendMessage(token, index, "y");
    await delay(1);
    await sendMessage(token, index, "un.slut");
    await delay(1);
    await sendMessage(token, index, "un.give 277387507400835072 all");
    await delay(1);
    await sendMessage(token, index, "un.resetmoney");
    await delay(1);
    await sendMessage(token, index, "y");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep...`);
  }, 65 * 1000);
})();
