/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
document.addEventListener('DOMContentLoaded', () => {
    const $inputUrl = document.querySelector('#input-url');
    const $msg = document.querySelector('#msg');
    const $btnGet = document.querySelector('#btn-get');
    const $btnSave = document.querySelector('#btn-save');
    const $result = document.querySelector('#result');

    $btnGet.addEventListener('click', async () => {
        const targetUrl = $inputUrl.value;
        console.log(targetUrl);
        //ブラウザ→画像URLの一覧を取得
         const imgUrls = await window.imgDl.fetchImgs(targetUrl);
         console.log(imgUrls);
        //  const imgUrls = ["http://localhost:3000/villa-1.jpg","http://localhost:3000/villa-2.jpg"];
         let imgHtmlStr="";
         for(const url of imgUrls){
            imgHtmlStr+=`<img src="${url}"/>`
         }
        // let resultInnerHTML = "";
        // imgUrls.forEach(url => resultInnerHTML += `<img src="${url}" style="max-width: 300px;" />`);
        // $result.innerHTML = resultInnerHTML;
                 $result.innerHTML = imgHtmlStr;

    });

    $btnSave.addEventListener('click', async () => {
        const result = await window.imgDl.saveImgs();
        console.log(result);
        const MSG = {
            "failed": '保存に失敗しました。',
            "success": '保存に成功しました。',
            "cancel": '保存を中断しました。',
        }
        $msg.textContent = MSG[result];
    });
    
})