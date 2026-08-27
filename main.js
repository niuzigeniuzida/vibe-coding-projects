const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');

// 注册一个"标准"的自定义协议 app://
// 用它加载页面，而不是直接用 file://
// 这样 localStorage / IndexedDB 等本地存储行为会和正常网页一致、稳定持久，
// 不会出现"file://协议下存储被浏览器限制导致存不进去"的问题
// （自定义造型、历史最高分、背景设置等都是靠这个存的）
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true,
    },
  },
]);

function createWindow() {
  const win = new BrowserWindow({
    width: 480,
    height: 820,
    minWidth: 320,
    minHeight: 560,
    title: '管道小鸟',
    icon: path.join(__dirname, 'icon.ico'),
    autoHideMenuBar: true, // 隐藏顶部菜单栏（文件/编辑那一条），窗口更干净
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.setMenuBarVisibility(false);
  win.loadURL('app://game/index.html');

  // 如果想调试时看到控制台报错，取消下面这行的注释
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  // 把 app://game/xxx 映射到 app 文件夹里的实际文件
  protocol.registerFileProtocol('app', (request, callback) => {
    const url = request.url.replace('app://game/', '');
    const filePath = path.join(__dirname, 'app', decodeURIComponent(url) || 'index.html');
    callback({ path: filePath });
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

