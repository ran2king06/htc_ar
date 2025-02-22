import CryptoJS from 'crypto-js';

const generateFingerprint = async () => {
    const msg = navigator.userAgent + navigator.language;
    const msgBuffer = new TextEncoder().encode(msg);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
};

const getOrCreateDeviceID = () => {
    let deviceID = localStorage.getItem(generateFingerprint());
    if (!deviceID) {
        deviceID = crypto.randomUUID(); // 生成唯一 ID
        localStorage.setItem(generateFingerprint(), deviceID);
    }
    return deviceID;
};

const SECRET_KEY = getOrCreateDeviceID();

// 生成資料的 hash
const generateHash = (data) => {
    return CryptoJS.MD5(data).toString();
};

// 檢查函數是否從 Console 呼叫
const isCalledFromConsole = () => {
    const stack = new Error().stack;
    return stack && (stack.includes('(eval at') || stack.includes('<anonymous>') || stack.includes('console'));
};

// 加密資料並存入 localStorage
export const setEncryptedData = (key, data) => {
    if (isCalledFromConsole()) {
        console.warn('⚠️ 禁止從 Console 呼叫此函數！');
        return;
    }

    try {
        const dataString = data;
        const encryptedData = CryptoJS.AES.encrypt(dataString, SECRET_KEY).toString();
        const dataHash = generateHash(dataString);

        localStorage.setItem(key, encryptedData);
        localStorage.setItem(`${key}_hash`, dataHash);
    } catch (error) {
        console.error('加密並存儲資料時發生錯誤:', error);
    }
};

// 從 localStorage 取得資料，並驗證 hash
export const getEncryptedData = (key) => {
    if (isCalledFromConsole()) {
        console.warn('⚠️ 禁止從 Console 呼叫此函數！');
        return null;
    }

    try {
        const encryptedData = localStorage.getItem(key);
        const storedHash = localStorage.getItem(`${key}_hash`);

        if (!encryptedData || !storedHash) return null;

        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

        if (!decryptedData) return null;

        const dataHash = generateHash(decryptedData);
        if (dataHash !== storedHash) {
            alert('資料已被篡改或不一致');
            localStorage.removeItem(key);
            localStorage.removeItem(`${key}_hash`);
            window.location.reload();
            return null;
        }

        return decryptedData;
    } catch (error) {
        console.error('解密資料時發生錯誤:', error);
        alert('解密資料時發生錯誤');
        localStorage.removeItem(key);
        localStorage.removeItem(`${key}_hash`);
        return null;
    }
};
