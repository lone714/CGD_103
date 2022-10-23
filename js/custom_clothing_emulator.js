function doFist(){
    
    
    //先跟HTML畫面產生關聯，再建立視件聆聽功能
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');

    let captionObj = document.querySelector('.clothing-emulator-caption');
    const ImageRatio = 0.66708860759493670886075949367089;
    let WEmulator = captionObj.offsetWidth;
    let HEmulator = Math.floor(WEmulator * ImageRatio);

    let pic_size =  $('#pic_size').val() / 100
    let pic_Y =  $('#pic_Y').val() / 100 
    let pic_X =  $('#pic_X').val() / 100 

    console.log(pic_size);
    console.log(pic_Y);
    console.log(pic_X);


    // 載入畫面要先跑一次
    doIt();
    function doIt (){
        moveCenter();
        inputValue();
        draw();
    }
    
    // 監聽視窗變化
    $(window).resize(()=>{
        doIt();
    })
    // 監聽input數值變化
    // 重新計算input參數
    function inputValue (){
        pic_size =  $('#pic_size').val() / 100
        pic_Y =  $('#pic_Y').val() / 100
        pic_X =  $('#pic_X').val() / 100
    }

    $('#pic_size').bind("input", function(){
        pic_size =  $('#pic_size').val() / 100
        draw();
    })
    $('#pic_Y').bind("input", function(){
        pic_Y =  $('#pic_Y').val() / 100
        draw();
    })
    $('#pic_X').bind("input", function(){
        pic_X =  $('#pic_X').val() / 100
        draw();
    })


    // 重新計算畫面尺寸
    function moveCenter(){
        captionObj = document.querySelector('.clothing-emulator-caption');
        WEmulator = captionObj.offsetWidth;
        HEmulator = Math.floor(WEmulator * ImageRatio);
        // var hEmulator = captionObj.offsetHeight;
 
        console.log(WEmulator);
        console.log(HEmulator);

        canvas.width = WEmulator
        canvas.height = HEmulator
    }

    // 計算繪圖
    function draw(){


        
        // 載入別的圖片會發生load事件，要做事件聆聽功能

        // 底圖加載

        let pic1 = new Image()
        pic1.src = '../pic/clothing-emulator/clothing-emulator-background.jpg'
        pic1.addEventListener('load',loadImage)

        // 圖騰加載，尚未製作圖片上傳的功能，先用範例圖

        pic2 = new Image()
        pic2.src = '../pic/icon/totem500px.png'
        pic2.addEventListener('load',loadImage)

        function loadImage(){

            picW = WEmulator*0.28 * pic_size

            // c.drawImage(Image,dx,dy,dWidth,dHeight);
            // 底圖繪製
            c.drawImage(pic1,0,0,WEmulator,HEmulator);
            c.globalCompositeOperation = 'multiply'
            // 圖騰繪製
            c.drawImage(pic2,
                ((WEmulator *0.11)+(((WEmulator* 0.28)-(WEmulator * 0.28 * pic_size))* pic_X)),
                ((WEmulator *0.18)+(((HEmulator* 0.4)-(WEmulator * 0.28 * pic_size)) * pic_Y )),
                (WEmulator * 0.28 * pic_size),
                (WEmulator * 0.28 * pic_size));

            // 紋理繪製
            c.globalCompositeOperation = 'multiply'
            // c.globalAlpha=0.5;
            c.drawImage(pic1,0,0,WEmulator,HEmulator);
            c.globalCompositeOperation = 'source-over';
            // c.globalAlpha=1;
            
            // 說明文字
            c.font='bold 20px Tahoma';
            c.fillStyle='#ccc'
            c.fillText('正面',(WEmulator * 0.25 -15),(HEmulator * 0.07));
            c.fillText('背面',(WEmulator * 0.75 -35),(HEmulator * 0.07));
        
            // 格線
            // c.font='bold 8px Tahoma';
            // for(let i = 0; i < 100; i++){
            //     let interval = i * (WEmulator/10)
            //     // 水平線
            //     c.moveTo(0,interval);
            //     c.lineTo(canvas.width,interval);
            //     c.fillText(interval,0,interval);
            //     // 垂直線
            //     c.moveTo(interval,0);
            //     c.lineTo(interval,canvas.height);
            //     c.fillText(interval,interval,8);
            // }
            // c.strokeStyle='rgba(0,0,0,0.3)';
            // c.stroke()
        }


    }




    let clothesWrapper = document.querySelector(".clothes-swiper-wrapper");
    let curIndex = 0;

    $id("clothesLeft").onclick = function () {
        if (curIndex === 5) {
            curIndex = 0;
            clothesWrapper.style = `transform: translateX(0px);`;
        }else {
            curIndex ++ ;
            clothesWrapper.style.transform = `translateX( ${curIndex * 220}px)`;           
        }

    };

}

window.addEventListener('load',doFist)