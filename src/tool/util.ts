import {ref} from 'vue'

const nowTime = ref("00:00:00");
const getNowTime = ()=> {
    const now = new Date();
    // const hour = now.getHours() < 10 ? '0'+ now.getHours(): now.getHours();
    // const minu = now.getMinutes() < 10 ? '0'+ now.getMinutes(): now.getMinutes();
    // const sec = now.getSeconds() < 10 ? '0' + now.getSeconds(): now.getSeconds();
    
    // 这里用到toString() 是因为 padStart(),是字符串的向前补全法 padEnd() 向后补全法
    const hour = now.getHours().toString().padStart(2, '0');
    const minu = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    // console.log(typeof hour);

    // nowTime.value = hour.toString()  + minu.toString() + sec.toString();
    nowTime.value = hour+ ':' + minu + ":" + sec;
    setTimeout(getNowTime, 1000)
}

export {nowTime, getNowTime}