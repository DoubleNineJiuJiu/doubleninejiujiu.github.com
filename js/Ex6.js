
 $(init)
  function init(){
    $(".first-imgbig").hide();
    $(".first-img").click(function(){
        $(".big").attr("src",$(this).children("img").attr("src"));
       $(".first-imgbig").show();
    });


    $(".first-imgbig").click(function(){
       $(".first-imgbig").hide();
     });

    /***************2**********/
     $(".second-slip-one").click(function(){
       $(this).css("background","gray");
       $(".second-slip-two").css("background","white");
       $(".second-slip-three").css("background","white");
       $('.second-content').text(1);
     });


      $(".second-slip-two").click(function(){
       $(this).css("background","gray");
       $(".second-slip-one").css("background","white");
       $(".second-slip-three").css("background","white");
       $('.second-content').text(2);
     });


       $(".second-slip-three").click(function(){
       $(this).css("background","gray");
       $(".second-slip-one").css("background","white");
       $(".second-slip-two").css("background","white");
       $('.second-content').text(3);         
     });

       /********************3******************/
       $(".third-add").click(function(){
         var v = '<div class="third-item"><div class="third-item-num">3</div><div class="third-item-content"></div><div class="third-item-delete">Delete</div></div>'
        $(".third-item").eq(-1).after(v);
        var len=$(".third-item").length;
        for(var i=0; i<len;++i)
        {
           $(".third-item-num").eq(i).text(i+1);
        }
       });

$(document).on("click",".third-item-delete",function(){
        $(this).parent().remove();
        var len=$(".third-item").length;
        for(var i=0; i<len;++i)
        {
           $(".third-item-num").eq(i).text(i+1);
        }
       });

  }
