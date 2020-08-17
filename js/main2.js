$("#siteclick").click(function () {

    if ($(".sitemap_area").css("display") == "none") {
        $(".sitemap_area").show(400);
        $(".sbtn").text("－");
        $("html,body").animate({scrollTop:"+=450px"},400);
    } else {
        $(".sitemap_area").hide(400);
        $(".sbtn").text("＋");
        $("html,body").animate({scrollTop:"-=450px"},400);
    }

}); /////////click///////////////

//전역변수//////////////////////////////////////////

// 1. 페이지 번호
var pno = 0;

// 2. 전체 페이지 수
const totnum = 5;
// const는 변수 var와 달리 변경 불가한 상수를 말한다.

// 3. 광스크롤 방지
var psts = 0; //(0-허용,1-불허용)

// 4. 스크린높이값
var winh = $(window).height();

/////////////////////////////////////////////////////

$(function () {
    $(document).on("mousewheel DOMMouseScroll",
        function (e) {

            if (psts === 1) return true; 

            psts = 1; 
            setTimeout(function () {
                psts = 0;
            }, 800); /// 타임아웃 ///

            console.log("휠~~");

            e = window.event || e;


            var delta = e.detail ? e.detail : e.wheelDelta;

            console.log("델타값:" + delta);


            if (delta < 0) {
                pno++;
                if (pno === totnum) pno = totnum - 1;
            } ///////////////if////////////////
            else {
                pno--; 
                if (pno === -1) pno = 0;
            }

            console.log("페이지 번호:" + pno);

            var pgpos = winh * pno;
                //$(".page").eq(pno).offset().top;

            console.log("이동페이지 위치:" + pgpos);

            $("html,body").stop().animate({
                scrollTop: pgpos + "px"
            }, 800, "easeOutExpo");

            chgMenu();
        
        }) ////////// 마우스 휠//////////////////////////

    
    /////GNB a 링크를 클릭하면 해당 페이지 위치로 이동 애니메이션//질문
            // 이벤트대상 : .now_list a
            $(".now_list a").click(function(e) {

                // 1. a태그 기본 이동 막기
                e.preventDefault();

                // 클릭된 순번 알아오기
                var idx = $(this).parent().index(); // li의 순번
                console.log("클릭된순번:" + idx);

                // 전역 페이지 번호의 idx 일치 시키기
                pno = idx; // 메뉴변경함수를 위해 전역변수에 일치!


                // 2. a태그의 href 값 읽어오기(이동할 페이지 아이디값)
                var pid = $(this).attr("href")
                console.log("아이디:" + pid);

                // 3. 이동할 페이지 아이디로 페이지 위치값(top값) 구하기
                // offset() 메서드로 현재 요소 위치, 크기정보를 알 수 있다!
                var pgpos = $(pid).offset().top;
                console.log("top 위치값" + pgpos);

                $("html,body").animate({
                    scrollTop: pgpos + "px" // 제이쿼리 용!
                }, 800, "easeOutQuint");


                /// 5. 이동선택된 메뉴변경하기(class="on"넣기)
                chgMenu();//메뉴변경 함수호출



            }); //////////click////////////////
    
    
    
}); /////////////jQB제이쿼리코드블록/////////////////////////
///////////////////////////////////////////








/*/////////////////////////////////////////////////////////
           함수명:chgMenu
           기능:GNB 메뉴와 블릿메뉴 현재 페이지에 맞게 변경하기
       */ /////////////////////////////////////////////////////////
function chgMenu() {
    $(".now_list li").eq(pno)
        .addClass("now_page") 
        .siblings() 
        .removeClass("now_page"); 

} ////// chgMenu 함수 /////////////////////////////////////////////
///////////////////////////////////////////////////////////

