# Yami 的个人小天地

用 React 和 Vite 编写的个人网站。作品、手记和详情内容在 `src/content.js` 中维护。

```sh
npm ci
npm run dev
```

`npm run build` 将网站构建到 `dist/`，`npm run preview` 用于检查构建后的页面。

在 GitHub 仓库的 **Settings → Pages** 将发布来源选为 **GitHub Actions**。之后推送到 `main`，工作流会构建并发布网站，也可以在 **Actions** 中手动运行。
