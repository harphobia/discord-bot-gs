import fetch from "node-fetch";
import moment from "moment";

export const login = (email, password) =>
  new Promise((resolve, reject) => {
    fetch("https://discord.com/api/v9/auth/login", {
      method: "POST",
      headers: {
        Host: "discord.com",
        "user-agent": "Discord-Android/117014",
        "x-fingerprint": "951067920606330901.Sy0VwEda0fhJzqkrhKXVqwA5PfA",
        "x-discord-locale": "en-US",
        "accept-language": "en-US",
        "content-type": "application/json; charset=UTF-8",
        "accept-encoding": "gzip",
      },
      body: JSON.stringify({
        login: email,
        password: password,
        undelete: false,
      }),
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export const sendMessage = (token, index, message) =>
  new Promise((resolve, reject) => {
    const channelList = [
      "773713646824062998",
      "816710076600549416",
      "816714360545214536",
    ];

    fetch(
      `https://discord.com/api/v9/channels/${channelList[index]}/messages`,
      {
        method: "POST",
        headers: {
          Host: "discord.com",
          "user-agent": "Discord-Android/117014",
          authorization: token,
          "x-discord-locale": "en-US",
          "accept-language": "en-US",
          "content-type": "application/json; charset=UTF-8",
          "accept-encoding": "gzip",
        },
        body: JSON.stringify({
          content: message,
          sticker_ids: [],
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(
          `[${moment().format("hh:mm:ss")}] [work-${index + 1}] [${
            res.author.username
          }] send Message : ${res.content}`
        );
        resolve();
      })
      .catch((err) => reject(err));
  });

export const delay = (second) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`[${moment().format("hh:mm:ss")}] Delay ${second} second...`);
      resolve();
    }, second * 1000);
  });

export function randomChannelIndex() {
  return Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}
