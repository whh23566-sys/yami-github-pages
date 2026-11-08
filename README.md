# leiruoxuan.com

使用 React 和 Vite 的网站骨架。从 `src/App.jsx` 开始编写首页。

在 Windows PowerShell 中启动本地预览：

```powershell
npm.cmd ci
npm.cmd run dev
```

打开终端显示的本地地址，保存修改后预览会自动更新。

`npm.cmd run build` 将网站构建到 `dist/`，`npm.cmd run preview` 用于检查构建后的页面。

推送到 `main` 后，GitHub Actions 会构建并发布到 GitHub Pages。可以在仓库的 **Actions** 页面查看发布进度。
