/**
 * unity 是否讀取完畢
 */
let isUnityReady = false;


//當unity準備完成，將狀態設為true
document.addEventListener("unityWebGL_onReady", function () {
    isUnityReady = true;
});

document.addEventListener("unityWebGL_onTransitionPlayCompleted", function (e) {
    console.log(`tansition played ${e.detail}`);
});

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
 * 切換到起始場景，並等待初始化完成
 */
async function enterStartScene() {
    await changeScene(0);
}

let isAREnable = false;

/**
 * 切換到AR場景，並等待初始化完成
 */
async function enterARScene() {
    if (!isAREnable) {
        isAREnable = true;
        window.startARCamera();
        await sleep(500);
    }
    await changeScene(1);
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

/**
 * 切換Unity場景，可以透過 enterStartScene() 和 enterARScene() 切換就好
 * @param {number} sceneIndex 
 * @returns 
 */
function changeScene(sceneIndex) {
    return new Promise(r => {
        function callback(e) {
            const _sceneIndex = parseInt(e.detail);
            if (_sceneIndex === sceneIndex) r();
            document.removeEventListener("unityWebGL_onUnitySceneLoaded", callback);
        }
        document.addEventListener("unityWebGL_onUnitySceneLoaded", callback);
        window.unityInstance.SendMessage("WebGLAPI", "ChangeScene", sceneIndex.toString());
    });
}

/**
 * 當偵測到圖片，偵測到圖片後，要先顯示"辨識中..."，再呼叫 playCurrentTrackedImage() 秀出AR物件。
 */
function onImageTracked() {
    document.addEventListener('unityWebGL_onImageTargetTracked', (e) => {
        const targetIndex = e.detail.targetIndex;//偵測到第幾個效果(自駕車才會用到)
        console.log(`tracked target : ${targetIndex}`);
    });
}
onImageTracked();

/**
 * 設定路段種類 5=大港橋 6=棧貳庫
 * @param {number} index 
 */
function setGameMode(index) {
    window.unityInstance.SendMessage("GameManager", "SetGameMode", `${index}`);
}

/**
 * 設定路段為 大港橋
 */
function setGameMode_GreatHarborBridge() {
    setGameMode(5);
}

/**
 * 設定路段為 棧貳庫
 */
function setGameMode_Kw2() {
    setGameMode(6);
}

/**
 * 當圖片偵測丟失
 */
function onImageLost() {
    document.addEventListener('unityWebGL_onImageTargetLost', (e) => {
        const targetIndex = e.detail.targetIndex;//丟失第幾個效果
        console.log(`lost target : ${targetIndex}`);
    });
}
onImageLost();

/**
 * AR場景-當圖片效果撥放，呼叫 playCurrentTrackedImage() 才會觸發
 */
function onImagePlayed() {
    document.addEventListener('unityWebGL_onImageTargetPlayed', (e) => {
        const targetIndex = e.detail.targetIndex;//撥放第幾個效果
        console.log(`play target : ${targetIndex}`);
    });
}
onImagePlayed();

/**
 * 秀轉場效果
 * @param {number} index 
 */
function showTransition(index) {
    index = index - 1;
    if (index < 0) return;
    window.unityInstance.SendMessage("TransitionManager", "PlayIndex", `${index}`);
}

/**
 * AR場景-叫出開頭介紹教學的角色
 */
function playIntro() {
    window.unityInstance.SendMessage("ARCarProcessManager", "PlayIndex", "0");
    setTimeout(() => triggerRandomCurrentTargetEffect(), 100);
}

/**
 * AR場景-隱藏當前角色
 */
function hideCurrentCharacter() {
    window.unityInstance.SendMessage("ARCarProcessManager", "StopCurrent");
}

/**
 * AR場景-撥放當前偵測到的圖片，會直接出現第1個站點的角色
 */
function playCurrentTrackedImage() {
    window.unityInstance.SendMessage("ARManager", "PlayCurrentTrackedImage");
    setTimeout(() => triggerRandomCurrentTargetEffect(), 100);
}

/**
 * AR場景-切換到下一個角色
 */
function switchToNextCharacter() {
    window.unityInstance.SendMessage("ARCarProcessManager", "PlayNextIndex");
    setTimeout(() => triggerRandomCurrentTargetEffect(), 100);
}

/**
 * AR場景-切換到特定的角色
 * @param {number} index 角色index(跟站點是對應的 從0開始數)
 */
function switchToSpecificCharacter(index) {
    window.unityInstance.SendMessage("ARCarProcessManager", "PlayIndex", `${index + 1}`);
    setTimeout(() => triggerRandomCurrentTargetEffect(), 100);
}

/**
 * AR場景-照順序觸發當前觸發到的圖片的效果(照順序切換角色表演動作)
 */
function triggerNextCurrentTargetEffect() {
    window.unityInstance.SendMessage("ARCarProcessManager", "TriggerNextEffect", "effect");
}

/**
 * AR場景-隨機觸發當前觸發到的圖片的效果(隨機切換角色表演動作)
 */
function triggerRandomCurrentTargetEffect() {
    window.unityInstance.SendMessage("ARCarProcessManager", "TriggerRandomEffect", "effect");
}

/**
 * AR場景-隨機觸發當前觸發到的圖片的效果(隨機切換角色頒獎動作)
 */
function triggerRandomCurrentTargetReward() {
    window.unityInstance.SendMessage("ARCarProcessManager", "TriggerRandomEffect", "reward");
}

/**
 * 主畫面-照順序觸發主畫面的效果(照順序切換角色表演動作)
 */
function triggerNextStartSceneEffect() {
    window.unityInstance.SendMessage("StartSceneManager", "OnTriggerNextEffect", "effect");
}

/**
 * 主畫面-隨機觸發主畫面的效果(隨機切換角色表演動作)
 */
function triggerRandomStartSceneEffect() {
    window.unityInstance.SendMessage("StartSceneManager", "OnTriggerRandomEffect", "effect");
}

/**
 * 設定語言 zh-tw/en
 * @param {string} lang 
 */
function setLocalization(lang) {
    window.unityInstance.SendMessage("Localization", "LoadLocalization", lang);
}

// 只是測試用
// function enterAR(e) {
//     enterARScene();
//     window.removeEventListener('touchstart', enterAR);
// }
// window.addEventListener('touchstart', enterAR);
