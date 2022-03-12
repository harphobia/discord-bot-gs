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

export const getUserInfo = (token, userId = "@me") =>
  new Promise((resolve, reject) => {
    fetch(`https://discord.com/api/v9/users/${userId}`, {
      headers: {
        Host: "discord.com",
        "user-agent": "Discord-Android/117014",
        authorization: token,
        "x-discord-locale": "en-US",
        "accept-language": "en-US",
        "content-type": "application/json; charset=UTF-8",
        "accept-encoding": "gzip",
      },
    })
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export const getMessages = (token, channelId, limit = 50) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://discord.com/api/v9/channels/${channelId}/messages?limit=${limit}`,
      {
        headers: {
          Host: "discord.com",
          "user-agent": "Discord-Android/117014",
          authorization: token,
          "x-discord-locale": "en-US",
          "accept-language": "en-US",
          "content-type": "application/json; charset=UTF-8",
          "accept-encoding": "gzip",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

export const sendMessage = (token, channelId, message) =>
  new Promise((resolve, reject) => {
    fetch(`https://discord.com/api/v9/channels/${channelId}/messages`, {
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
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(
          `[${moment().format("hh:mm:ss")}] [${
            res.author.username ?? "null"
          }] send Message : ${res.content ?? "null"}`
        );
        resolve();
      })
      .catch((err) => reject(err));
  });

export const deleteMessage = (token, channelId, messageId) =>
  new Promise((resolve, reject) => {
    fetch(
      `https://discord.com/api/v9/channels/${channelId}/messages/${messageId}`,
      {
        method: "DELETE",
        headers: {
          Host: "discord.com",
          "user-agent": "Discord-Android/117014",
          authorization: token,
          "x-discord-locale": "en-US",
          "accept-language": "en-US",
          "content-type": "application/json; charset=UTF-8",
          "accept-encoding": "gzip",
        },
      }
    )
      .then((res) => {
        console.log(`[${moment().format("hh:mm:ss")}] Deleting message..}`);
        resolve();
      })
      .catch((err) => reject(err));
  });

export const delay = (second) =>
  new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });

export function randomChannelIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
