function doFist(){
    
    //先跟HTML畫面產生關聯，再建立視件聆聽功能
    let canvas = document.getElementById('canvas')
    let context = canvas.getContext('2d')
    
    var captionObj =document.querySelector('.clothing-emulator-caption')
    let hEmulator = captionObj.offsetHeight;
    let WEmulator = captionObj.offsetWidth;
    // let aaa = document.getElementsByClassName('.QR')

    
    // let hEmulator = ('.clothing_emulator-present').height()
    
    // let hEmulator =  $('.clothing_emulator-present').attr(height);
    // let wEmulator = $(window).document.getElementsByClassName('.clothing_emulator-present').width
    // 監聽
    $(window).resize
    console.log(hEmulator);
    console.log(WEmulator);
    canvas.width = WEmulator
    canvas.height = hEmulator + 106
    // 格線




    for(let i = 0; i < 100; i++){
        let interval = i * 50
        // 水平線
        context.moveTo(0,interval);
        context.lineTo(canvas.width,interval);
        context.fillText(interval,0,interval);
        // 垂直線
        context.moveTo(interval,0);
        context.lineTo(interval,canvas.height);
        context.fillText(interval,interval,8);
    }
    context.strokeStyle='rgba(0,0,0,0.3)';
    context.stroke()

    
    // =====================

    // 載入別的圖片會發生load事件，要做事件聆聽功能

    let pic = new Image()
    pic.src = '../pic/clothing-emulator/clothing-emulator-background.jpg'
    pic.addEventListener('load',function(){

        context.drawImage(pic,0,0,WEmulator,526);
        // context.drawImage(Image,dx,dy,dWidth,dHeight);
    })




    // let m = 5;
    // let m = new Number(5); // constructor 建構函數:功能是給初值
    // ----------------------
    // let str = 'ABC';
    // let str = new String('ABC');
    // ----------------------
    // let arr = [2,4,6,'ABC',true,new Date()];
    // let arr = new Array(2,4,6,'ABC',true,new Date());
    // ----------------------
    // let ans = true;
    // let ans = new Boolean(true);
    // let ans = new Boolean();  // false
    // ----------------------
    // let obj ={};
    // let obj ={};
    // ----------------------
    // let today = '2022/10/21'    // 字串
    // let today = new Date("2022/10/21") // 日期時間物件
}

window.addEventListener('load',doFist)