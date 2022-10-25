    function doFist() {
        
    let clothesWrapper = document.querySelector(".swiper-wrapper");
 
    let curIndex = 0;
        $("#clothesLeft").click(function(){
            if (curIndex === 5) {
                curIndex = 0;
                clothesWrapper.style = `transform: translateX(0px);`;
            }else {
                curIndex ++ ;
                clothesWrapper.style.transform = `translateX( ${curIndex * 220}px)`;           
            }
        }) 
        
        



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




    }

    window.addEventListener("load",doFist)


    


    