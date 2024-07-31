/**
 * unity 是否讀取完畢
 */
let isUnityReady = false;

async function waitUntilUnityReady() {
    return new Promise(r => {
        const checkInterval = setInterval(() => {
            if (window.unityInstance != null && isUnityReady) {
                clearInterval(checkInterval);
                r();
            }
        }, 100);
    });
}

/**
 * 開始錄製影片
 */
function startRecordVideo() {
    return new Promise(r => {
        function callback(e) {
            const detail = e.detail;
            if (detail.requestType == "StartRecordVideo") {
                r(detail.result);
                document.removeEventListener("unityWebGL_onVideoStateChanged", callback);
            }

        }
        document.addEventListener("unityWebGL_onVideoStateChanged", callback);
        window.unityInstance.SendMessage("WebGLAPI", "StartRecordVideo");
    });
}

/**
 * 停止錄製影片
 */
function stopRecordVideo() {
    return new Promise(r => {
        function callback(e) {
            const detail = e.detail;
            if (detail.requestType == "StopRecordVideo") {
                r(detail.result);
                document.removeEventListener("unityWebGL_onVideoStateChanged", callback);
            }
        }
        document.addEventListener("unityWebGL_onVideoStateChanged", callback);
        window.unityInstance.SendMessage("WebGLAPI", "StopRecordVideo");
    });
}

/**
 * 取得錄製影片的base64
 */
function getRecordedVideoBytes() {
    window.unityInstance.SendMessage("WebGLAPI", "GetRecordedVideoBytes");
}

/**
 * unity畫面截圖
 * @returns 照片base64
 */
function takeScreenshot() {
    return new Promise(r => {
        function callback(e) {
            const detail = e.detail;
            r(detail);
            document.removeEventListener("unityWebGL_onScreenshotBase64Recived", callback);
        }
        document.addEventListener("unityWebGL_onScreenshotBase64Recived", callback);
        window.unityInstance.SendMessage("WebGLAPI", "TakeScreenshot");
    });
}

//當unity準備完成，將狀態設為true
document.addEventListener("unityWebGL_onReady", function () {
    isUnityReady = true;
});

function base64ToBlob(base64, contentType = '') {
    const byteCharacters = atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
}

//////////以下只是範例，可以刪除

//範例顯示如何透過takeScreenshot取得照片base64，並顯示在前端網頁
async function createScreenshotTexture() {
    const texBase64 = await takeScreenshot();
    const imgBlob = base64ToBlob(texBase64, 'image/jpg');
    const imageUrl = URL.createObjectURL(imgBlob);

    const imgElement = document.createElement('img');
    imgElement.controls = true;
    imgElement.src = imageUrl;

    imgElement.style.position = 'fixed';
    imgElement.style.top = '0';
    imgElement.style.left = '50%';
    imgElement.style.transform = 'translateX(-50%)';
    imgElement.style.zIndex = '100';
    imgElement.style.width = '100%';
    imgElement.style.maxHeight = '200px';

    document.body.appendChild(imgElement);
}

//範例顯示如何在影片產生後，取得影片的base64，並顯示在前端網頁
function autoCreateVideoElement() {
    //只有在影片產生後才會呼叫這個事件，所以可以一直監聽
    document.addEventListener("unityWebGL_onVideoBase64Recived", function (e) {
        const videoBase64 = e.detail;

        const videoBlob = base64ToBlob(videoBase64, 'video/webm');
        const videoUrl = URL.createObjectURL(videoBlob);

        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = videoUrl;

        videoElement.style.position = 'fixed';
        videoElement.style.top = '0';
        videoElement.style.left = '50%';
        videoElement.style.transform = 'translateX(-50%)';
        videoElement.style.zIndex = '100';
        videoElement.style.width = '100%';
        videoElement.style.maxHeight = '200px';

        document.body.appendChild(videoElement);
        videoElement.play();
    })
}
