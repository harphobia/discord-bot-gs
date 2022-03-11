import { login } from "./bin/discord.js";

(async () => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const { token } = await login(email, password);
  console.log(token);
})();
