function doFist(){


    // 彈跳視窗提醒
    $(".terms1").click(function () {
        // if ($(document).height() > $(window).height()) {
        //     $("html").addClass("noscroll");
        // }else{
        //     $("html").addClass("fixWindow"); 
        // }
        $(".dialog").addClass("dialogOn")
        $(".allViewport").addClass("allViewportOn");
        
    });
    $(".terms2").click(function () {
        // if ($(document).height() > $(window).height()) {
        //     $("html").addClass("noscroll");
        // }else{
        //     $("html").addClass("fixWindow"); 
        // }
        $(".dialog").addClass("dialogOn")
        $(".allViewport").addClass("allViewportOn");
        
    });
    $(".X").click(
        function () {
            $(".dialog").removeClass("dialogOn");
            $(".allViewport").removeClass("allViewportOn")

            // if ($(document).height() > $(window).height()) {
            //     $("html").removeClass("noscroll");
            // }else{
            //    $("html").removeClass("fixWindow");
            // }
    });
    $(".allViewport").click(
        function () {
            $(".dialog").removeClass("dialogOn");
            $(".allViewport").removeClass("allViewportOn");

            // if ($(document).height() > $(window).height()) {
            //     $("html").removeClass("noscroll");
            // }else{
            //    $("html").removeClass("fixWindow");
            // }
    });


    // $(function() {
    //     $("#dialogOn").dialog({
    //         autoOpen: false,
    //         show: "blind",
    //         hide: "explode",
    //         buttons: {
    //             "Ok": function() { $(this).dialog("close"); },
    //             "Cancel": function() { $(this).dialog("close"); }
    //             }
    //     });
    
    //     $("#opener").click(function() {
    //         $("#dialog_div").dialog("open");
    //         return false;
    //     });
    // });
    
    //先跟HTML畫面產生關聯，再建立視件聆聽功能
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');

    let captionObj = document.querySelector('.clothing-emulator-caption');  // 監聽繪圖畫面
    const ImageRatio = 0.66708860759493670886075949367089;  // 底圖長寬比
    let WEmulator = captionObj.offsetWidth;     // 繪圖範圍寬
    let HEmulator = Math.floor(WEmulator * ImageRatio);     // 無條件捨去(繪圖範圍高) 

    // 除以100，方便作為百分比計算
    let pic_size =  $('#pic_size').val() / 100  // 大小控制桿
    let pic_Y =  $('#pic_Y').val() / 100        // 高度控制桿
    let pic_X =  $('#pic_X').val() / 100        // 寬度控制桿
    
    
    console.log(pic_size);
    console.log(pic_Y);  
    console.log(pic_X);
    
    let bgc = ('rgb(255,255,255)');    //選取衣服顏色
    let r =('#ffffff');   
    // 監聽選取的顏色
    
    $('input[name="color"]+span').click(
        function(){
            bgc=$(this).css('background-color')
            r = rgb2hex(bgc)
            console.log(r)
            doIt();
    });
    
    // 將rbg轉為16進位
    function rgb2hex(rgb) {  
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {    
            return ("0" + parseInt(x).toString(16)).slice(-2);  }  
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }


    // 載入畫面要先跑一次
    doIt();
    // 監聽視窗變化
    $(window).resize(()=>{
        doIt();
    })


    function doIt (){
        moveCenter();
        picXY();
    }
    
    
    
    // 重新計算input參數
    function picXY (){
        pic_size = $('#pic_size').val() / 100;
        pic_Y = $('#pic_Y').val() / 100;
        pic_X = $('#pic_X').val() / 100;
        draw();
    }

    // 監聽input數值變化
    $('#pic_size').bind("input",picXY)
    $('#pic_Y').bind("input",picXY)
    $('#pic_X').bind("input",picXY)

    

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

        let pic0 = new Image()
        pic0.src = './pic/clothing-emulator/clothing-emulator-background.jpg'
        pic0.addEventListener('load',loadImage)

        let pic1 = new Image()
        pic1.src = './pic/clothing-emulator/clothing-emulator.png'
        pic1.addEventListener('load',loadImage)

        // 圖騰加載，尚未製作圖片上傳的功能，先用範例圖

        pic2 = new Image()
        pic2.src = '././pic/icon/totem500px.png'
        pic2.addEventListener('load',loadImage)



        function loadImage(){

            picW = WEmulator*0.28 * pic_size

            // c.drawImage(Image,dx,dy,dWidth,dHeight);
            // 底色繪製

            // console.log(rgb);
            // c.fillStyle(bgc);
            c.globalCompositeOperation = 'source-over';
            c.fillStyle = (r);
            c.fillRect(0,0,WEmulator,HEmulator);
            // 底圖繪製
            c.globalCompositeOperation = 'multiply'
            c.drawImage(pic0,0,0,WEmulator,HEmulator);
            c.globalCompositeOperation = 'source-over';
            // 圖騰繪製
            // c.globalCompositeOperation = 'multiply'
            c.drawImage(pic2,
                ((WEmulator *0.12)+(((WEmulator* 0.28)-(WEmulator * 0.28 * pic_size))* pic_X)),
                ((WEmulator *0.15)+(((HEmulator*0.6)-(WEmulator * 0.28 * pic_size)) * pic_Y )),
                (WEmulator * 0.28 * pic_size),
                (WEmulator * 0.28 * pic_size));
                // c.globalCompositeOperation = 'source-over';
                // 紋理繪製
                
            c.globalCompositeOperation = 'multiply';
            c.globalCompositeOperation = 'source-over';
            c.drawImage(pic1,0,0,WEmulator,HEmulator);

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
}

window.addEventListener('load',doFist)