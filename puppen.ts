const puppeteer = require("puppeteer");

const url = "http://localhost:1234";
const usernameInputId = "username";
const passwordInputId = "password";
const submitInputId = "submit";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  await sleep(1);

  await page.type(`#${usernameInputId}`, "username");

  await sleep(1);

  await page.type(`#${passwordInputId}`, "password");

  await sleep(1);

  await page.click(`#${submitInputId}`);

  await sleep(1);

  await browser.close();
})();

function sleep(timeInSeconds: number) {
  return new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000));
}
