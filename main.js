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
    await sendMessage(token, index, "un.work");
    await delay(1);
    await sendMessage(token, index, "un.dep all");
    console.log(`[${moment().format("hh:mm:ss")}] Sleep...`);
  }, 45 * 1000);
})();
