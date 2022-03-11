import {
  getUserInfo,
  getMessages,
  deleteMessage,
  delay,
} from "./bin/discord.js";

const tokens = [];
const channelId = "946305403539582976";

(async () => {
  while (true) {
    for (let token of tokens) {
      const { id, username } = await getUserInfo(token);
      console.log(`Login as ${username}`);

      let found = 0;

      do {
        const data = await getMessages(token, channelId, 100);
        const filterData = data.filter((el) => {
          return el.author.id == id;
        });

        console.log(`Found ${filterData.length} items...`);
        found = filterData.length;

        for (let el of filterData) {
          delay(2);
          await deleteMessage(token, channelId, el.id);
        }
      } while (found !== 0);
    }
  }
})();
