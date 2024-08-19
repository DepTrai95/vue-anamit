# My Vite-powered Vue-Restaurant-Website for Anamit

This is a simple vietnamese restaurant website Rebuild, which is built using Vue 3 with Vite and plain CSS/SCSS. Reason for the rebuild is, the project was a WordPress project before with extremely low performance, it took 3s previously to load the page, the lighthouse-score was also low, especially the performance was at ~50-ish. This rebuild scores a perfect 100 in each relevant category on desktop and almost 100 on mobile.

This project is currentliy specifically built to be hosted on [Netlify](https://www.netlify.com/), as it used [Netlify Functions](https://www.netlify.com/platform/core/functions/) to send E-Mails.

The contact form is powered with [SendGrid](https://app.sendgrid.com/) which has good documentations and a very easy way to setup the project. All you need is to follow their instructions and implement their API-Key in your project/Netlify Environments. 
You can test it the menu-fetching and the contact-form locally by installing the [Netlify CLI](https://www.netlify.com/platform/core/cli/) and setup your SendGrid.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
