<h1 align="center">
Aww-Discord-BOT
</h1>

<p align="center">
<a href="https://awwbot.pages.dev" title="Visit WebSite">
<img src="https://awwbot.pages.dev/svg/cute_cat.svg" alt="meow">
</a>
</p>

<p align="center">
<a href="https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/codeql.yml" title="CodeQL">
<img src="https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/codeql.yml/badge.svg" alt="CodeQL" >
</a>
<a href="https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ossar.yml" title="OSSAR">
<img src="https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ossar.yml/badge.svg" alt="OSSAR" >
</a>
<a href="https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ci.yaml" title="CI">
<img src="https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ci.yaml/badge.svg" alt="CI" >
</a>
<a href="" title="">
<img src="https://img.shields.io/uptimerobot/ratio/7/m793480164-7f48a4946f537990dd03a397?label=Bot%20Uptime" alt="Up-Time" >
</a>
</p>

<p align="center">
<a href="https://awwbot.pages.dev/invite" title="Add Bot To Your Discord Server">
<img alt="Add To Discord" src="https://img.shields.io/badge/Add%20BOT%20To%20Your%20Discord%20Server-EB459E?style=for-the-badge&logoColor=white&logo=discord">
</a>
<br><br>
<a href="https://awwbot.pages.dev/support" title="Join Support Server">
<img alt="Discord" src="https://img.shields.io/discord/917792741054894131?color=%235865F2&label=Discord&logo=discord&logoColor=%23FFFFFF&style=for-the-badge">
</a>
</p>

<!--
[![CodeQL](https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/codeql.yml/badge.svg)](https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/codeql.yml)
[![OSSAR](https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ossar.yml/badge.svg)](https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ossar.yml)
[![ci](https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ci.yaml/badge.svg)](https://github.com/itskdhere/Aww-Discord-BOT/actions/workflows/ci.yaml)
![Uptime Robot ratio (7 days)](https://img.shields.io/uptimerobot/ratio/7/m793480164-7f48a4946f537990dd03a397?label=Bot%20Uptime)
-->

---

<font size='5px'>
<p>
<b>What's this..?</b>😄
</p>
</font>

**Aww BOT** brings the cuteness of [r/aww](https://www.reddit.com/r/aww/) straight to Discord Server. **Just use slash command: `/aww` 😋** <br>
This BOT is Hosted on [⛅Cloudflare Workers](https://workers.cloudflare.com/)


<!--
🌐[**Website**](https://awwbot.pages.dev/)
<font size='8px'>
<p style="border: #5865F2 2px solid">
<a href="https://awwbot.pages.dev/invite" style='text-decoration: none'>
<img width='20px' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg'>
<b>Add BOT To Your Server</b>
</a>
</p>
<p style="border: #5865F2 2px solid">
<a href="#" style='text-decoration: none'>
<img width='17px' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg'>
<b>Join Support Server</b>
</a>
</p>
</font> 
-->

### Resources used:
- [Discord Interactions API](https://discord.com/developers/docs/interactions/receiving-and-responding)
- [Cloudflare Workers](https://workers.cloudflare.com/) for hosting
- [Reddit API](https://www.reddit.com/dev/api/) to send messages back to the user
---


## 📡 Quick Start [Self-Hosting] 
### **Requirements:**
 - [Discord Account](https://discord.com/) (You have it already 😉)
 - [Cloudflare Account](https://www.cloudflare.com/)

### **Steps:**
**0. Creating the BOT:** <br>
Goto [Discord Developer Portal](https://discord.com/developers/applications) && Create a **New Application** with the following permissions:
- `bot` with the `Send Messages` and `Use Slash Command` permissions
- `applications.commands` scope
- Keep the `APPLICATION_ID` , `PUBLIC_KEY` , `TOKEN` of your BOT handy.

**1. Creating your Cloudflare Worker:** <br>
- Goto [Cloudflare Dashboard](https://dash.cloudflare.com/) && Login to your account. <br>
- Click on the `Workers` tab, and create a new service using the same name as the username of your Discord BOT.

**2. Creating API Token for Cloudflare Worker:**
- Goto the `Workers` tab and copy your `Account ID`
- Click on [API tokens](https://dash.cloudflare.com/profile/api-tokens) and then click `Create Token`
- Choose the `Edit Cloudflare Workers` Template.
- Copy your API Token and keep it handy.


**3. `⭐Star This  Repository` && [`Fork  This  Repository`](https://github.com/itskdhere/Aww-Discord-BOT/fork)** <br>

**4. Adding Repository Secrets:**
- Goto `Settings>Secrets>Actions` of your forked  repository && add the following secrets:
```yaml
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
DISCORD_APPLICATION_ID
DISCORD_PUBLIC_KEY
DISCORD_TOKEN
DISCORD_TEST_GUILD_ID
```

**5. Enable GitHub Actions:** <br>
- Goto the **`Actions`** tab of your forked repo.
- Then click **`I understand my workflows, go ahead and enable them`**

**6. Configure Wrangler:** <br>
- Goto the `wrangler.toml` file. Then edit `name` & `account_id` accrodingly.
   - `name` is the name of your Cloudflare Worker Service
   - `account_id` is your Cloudflare Account ID
- Commit this changes to your repo. 
> You can either *directly edit the file* or, *use GitHub CodeSpaces*

**7. Deployment:** <br>
Now the GitHub Action `ci` should trigger  which will do the following things:
- Test the code.
- Lint the code.
- Register the Slash Commands of the BOT
- Set Environment Variables of your Cloudflare Workers from GitHub Repository Actions Secrets:
- Bundle & Deploy the code to your Cloudflare Worker

**8. Adding *Interactions Endpoint URL***
- Head back to the [Discord Developer Dashboard](https://discord.com/developers/applications).
- Select your app & in general tab scroll down.
- Add the URL of your Cloudflare Worker in the `Interactions Endpoint URL` field. This should look something like this:
```yml
https://<CF_WORKER_NAME>.<CF_WORKER_SUBDOMAIN>.workers.dev
```

**9. Finally 🎉**
- Goto [Discord](https://discord.com/app)
- Use the slash command `/aww`

Thats it... 😊<br>
Wait.. 🤨 <br>
Still not ?😕 Facing Problems ? 😭<br>
See [Issues](https://github.com/itskdhere/Aww-Discord-BOT/issues) **or,** [Create New Issue](https://github.com/itskdhere/Aww-Discord-BOT/issues/new) **or,** [Join My Discord Server](https://awwbot.pages.dev/support)


---
## Local Development:
- Clone the repo:
```bash
git clone https://github.com/itskdhere/Aww-Discord-BOT.git
```

- Navigate to its directory:
```bash
cd Aww-Discord-BOT
```

- Install dependencies:
```bash
npm install
```

- Make sure to [install the Wrangler CLI](https://developers.cloudflare.com/workers/cli-wrangler/install-update/) and set it up. The production service needs access to credentials from your app:

```bash
wrangler secret put DISCORD_TOKEN
```
```bash
wrangler secret put DISCORD_PUBLIC_KEY
```
```bash
wrangler secret put DISCORD_APPLICATION_ID
```
```bash
wrangler secret put DISCORD_TEST_GUILD_ID
```

- Register Slash commands (This only needs to be run once):
```bash
DISCORD_TOKEN=<your-token> DISCORD_APPLICATION_ID=<your-app-id> node src/register.js
```

- Run app (This will start your server):
```bash
npm run dev
```

- Setting up ngrok: <br>
When a user types a slash command, Discord will send an HTTP request to a given endpoint. During local development this can be a little challenging because of the firewall of your network, so we're going to use a tool called [`ngrok`](https://ngrok.com/) to create an HTTP tunnel.
```bash
npm run ngrok
```

![forwarding](https://user-images.githubusercontent.com/534619/157511497-19c8cef7-c349-40ec-a9d3-4bc0147909b0.png)

This is going to bounce requests off of an external endpoint, and forward them to your machine. Copy the HTTPS link provided by the tool. It should look something like `https://8098-24-22-245-250.ngrok.io`. Now head back to the [Discord Developer Dashboard](https://discord.com/developers/applications), select your app, scroll down and update the `Interactions Endpoint URL` for your bot. <br>
This is the process we'll use for local testing and development. When you've published your bot to Cloudflare, you will heve to update this field to use your `Cloudflare Worker URL`.

> Facing Issues ? 😐<br>
See [Issues](https://github.com/itskdhere/Aww-Discord-BOT/issues) **or,** [Create New Issue](https://github.com/itskdhere/Aww-Discord-BOT/issues/new) **or,** [Join My Discord Server](https://awwbot.pages.dev/support)


---

## ⛓Others
##### 📝 License: [MIT](https://github.com/itskdhere/Aww-Discord-BOT/blob/main/LICENSE)
##### 💡 Initial Inspiration:  [discord/cloudflare-sample-app](https://github.com/discord/cloudflare-sample-app)
##### ✒ The tutorial for building Aww BOT is in the [discord developer documentation](https://discord.com/developers/docs/tutorials/hosting-on-cloudflare-workers)
##### 🎨 Cat <a href="https://www.freepik.com/free-vector/set-vector-cute-cartoonish-cats-isolated-white-background_26373379.htm#query=cat%20svg&position=6&from_view=search&track=sph">Image by callmetak</a> on Freepik

<br>
<font size='3px'>
<p align='center'>
-- 🙂 --
</p>
</font>
