// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()//electronのアプリで開いているアプリが無ければ起動
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

const{chromium}=require("@playwright/test")
async function fetchImgs(event,targetUrl){//ipc で読んだメソッドの第一引数はeventが入るipcrendereで実行されるのは第二引数以下
  const browser=await chromium.launch({headless:false,slowMo:500})
  const page=await browser.newPage();
  await page.goto(targetUrl)//targetUrlを開く
  const imgLocators=page.locator("img")
  const imgCount=await imgLocators.count();

  const imgUrls=[];
  for(let i=0;i<imgCount;i++){
    const imgLocator=imgLocators.locator(`nth=${i}`)//n番目の要素を取得する
  const imgsrc=await imgLocator.evaluate(node=>node.currentSrc)
 imgUrls.push(imgsrc)
  }
  // await browser.close()

  return imgUrls;
}
async function saveImgs(){
  const win=BrowserWindow.getFocusedWindow()//アクティブなウィンドウを取得する
  const pathResult=dialog.showOpenDialog(win,{
    properties:[`openDirectory`],
    defaultPath:"."//←現在使用しているフォルダを指定
  })
  if(pathResult.canceled) return "candel"
  const dest=pathResult.filePaths[0]
  return "ImfetchImgs"
}
ipcMain.handle("fetchImgs",fetchImgs);
ipcMain.handle("saveImgs",saveImgs);

