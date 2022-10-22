
    function $id(id) {
    return document.getElementById(id); 
    }
    window.addEventListener("load", function () {
    let clothesWrapper = document.querySelector(".clothes-swiper-wrapper");
    let bagsWrapper = document.querySelector(".bags-swiper-wrapper");
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
        let curIndexBOX = 0;
        $id("boxsLeft").onclick = function () {
            console.log('按右鍵');
            
            if (curIndexBOX === 4) {
                curIndexBOX = 0;
                bagsWrapper.style = `transform: translateX(0px);`;
            }else {
                curIndexBOX ++ ;
                bagsWrapper.style.transform = `translateX( ${curIndexBOX * -220}px)`;               
            }

        };


        let oth = $(window).innerHeight();
        $(window).scroll(function(){
            let sct = $(this).scrollTop()-30;
            let all = sct+oth;
            $(".fadeUp").each(function(){
                let sld = $(this).offset().top;
                if(all > sld){
                    $(this).addClass("fadeUpOn");
                }else{
                    $(this).removeClass("fadeUpOn")
                }
            });
            $(".fadeLeft").each(function(){
                let sld = $(this).offset().top;
                if(all > sld){
                    $(this).addClass("fadeLeftOn");
                }else{
                    $(this).removeClass("fadeLeftOn")
                }
            });
            $(".fadeRight").each(function(){
                let sld = $(this).offset().top;
                if(all > sld){
                    $(this).addClass("fadeRightOn");
                }else{
                    $(this).removeClass("fadeRightOn")
                }
            });
        });

    });



    


    