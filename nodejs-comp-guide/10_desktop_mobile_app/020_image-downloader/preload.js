
//mainとrendererの橋渡し役
const{contextBridge,ipcRenderer}=require("electron")
contextBridge.exposeInMainWorld("imgDl",{
// rendere.jsで呼び出す時→window.imgDl.fetchImgs("http://localhost:3000")

  async fetchIms(targetUrl){
    const result =await ipcRenderer.invoke("fetchImgs",targetUrl)
    return result;
  },
  //rendere.jsで呼び出す時→window.imgDl.saveImgs;で呼び出す事ができる
  async saveImgs(){
    const result =await ipcRenderer.invoke("saveImgs")
    return result;
  }})