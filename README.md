# 小工具合集

两个用 Electron 做的 Windows 桌面小应用。

## 📌 卡片笔记

极简卡片式笔记应用,左侧抽屉列出所有笔记,右侧富文本编辑区。

**功能**
- 卡片式笔记列表,按更新时间倒序排列
- 顶部搜索框,按标题/正文实时过滤
- 一键新建卡片,标题为空时显示"无标题"
- 富文本编辑:加粗、斜体、下划线、删除线、字号、字体颜色
- 5 种卡片标签色可选,列表和编辑区同步显示
- 删除笔记(编辑区右上角垃圾桶图标)
- 编辑后自动保存(防抖 300ms),优先走云端存储,不可用时自动降级为浏览器 `localStorage`
- 窗口标题栏隐藏,背景色 `#E7E2D4`,默认 1200×800(最小 860×560)

**技术栈**:Electron 31、原生 HTML/CSS/JS(无框架,单文件 `index.html`)

**运行 / 打包**
```bash
npm install
npm start          # 开发模式启动
npm run dist        # 打包 Windows 安装包(electron-builder --win)
```
打包产物在 `dist/` 目录下,生成 NSIS 安装包,可自定义安装目录、创建桌面/开始菜单快捷方式。

---

## 🐦 管道小鸟

一个类似 Flappy Bird 的小游戏,窗口标题"管道小鸟"。

**功能**
- 经典管道躲避玩法
- 自定义鸟的造型、历史最高分、背景设置等数据本地持久化保存
- 使用自定义 `app://` 协议加载页面(而非 `file://`),让 `localStorage` / `IndexedDB` 等本地存储行为和普通网页一致,避免 `file://` 协议下存储受限、存不进去的问题
- 窗口默认 480×820(最小 320×560),隐藏顶部菜单栏,自带图标 `icon.ico`

**技术栈**:Electron 31、原生 HTML/CSS/JS

**运行 / 打包**
```bash
npm install
npm start          # 开发模式启动
npm run dist        # electron-builder 打包
```
打包配置为 Windows NSIS 安装包,产物在 `dist/` 目录下。

## License

MIT
