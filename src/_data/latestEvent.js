const fetch = require("node-fetch");
const flatcache = require("flat-cache");
const path = require("path");

function getCacheKey() {
  let date = new Date();
  return `${date.getUTCFullYear()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCDate()}`;
}

async function fetchLatestEvent() {
  console.log("--------- Fetching connpass events ------------------");

  try {
    const response = await fetch(
      "https://connpass.com/api/v1/event/?series_id=4097&order=3&count=1"
    );
    const data = await response.json();

    return data.events[0];
  } catch (error) {
    return error;
  }
}

module.exports = async function () {
  let cache = flatcache.load("latest-event", path.resolve("./_datacache"));

  let key = getCacheKey();
  let cachedData = cache.getKey(key);

  if (!cachedData) {
    const newData = await fetchLatestEvent();

    if (newData.title != null) {
      cache.setKey(key, newData);
      cache.save();
      return newData;
    }
  }

  return cachedData;
};
