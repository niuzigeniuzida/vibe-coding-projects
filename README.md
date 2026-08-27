# 小工具合集

用 Electron 做的两个小型桌面应用。

## 📌 卡片笔记

极简卡片式笔记应用,左侧抽屉切换笔记,支持搜索、新建/删除、本地持久化存储。

**功能**
- 卡片式笔记列表
- 实时搜索
- 一键新建 / 删除笔记
- 本地存储(localStorage)

## 🐦 管道小鸟

一个类似 Flappy Bird 的小游戏,支持自定义造型、历史最高分、背景设置等,数据本地持久化保存。

**功能**
- 经典管道躲避玩法
- 自定义鸟的造型
- 历史最高分记录
- 背景设置可保存

## 开发

每个项目各自是独立的 Electron 应用,进入对应目录后:

\`\`\`bash
npm install
npm start
\`\`\`

## 打包

\`\`\`bash
npm run dist
\`\`\`

打包产物输出到各项目的 \`dist/\` 目录(Windows NSIS 安装包)。

## 技术栈

- [Electron](https://www.electronjs.org/)
- 原生 HTML / CSS / JavaScript

## License

MIT
