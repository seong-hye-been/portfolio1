//뉴스레터

var newsletter = "";

var newsletter_img = new Array();

newsletter_img[0] = "news_1.jpg";
newsletter_img[1] = "news_2.jpg";
newsletter_img[2] = "news_3.jpg";
newsletter_img[3] = "news_4.jpg";

var newsletter_title = new Array();

newsletter_title[0] = "군면제 받은 24살 아빠, 두 딸 위해 힘내겠습니다!";
newsletter_title[1] = "열일곱 연희 후원금, 이렇게 사용했습니다";
newsletter_title[2] = "코로나19 기부금, 이렇게 사용했습니다!";
newsletter_title[3] ="의료비 지원받고 완치판정 받았어요!";

var newsletter_content = new Array();

newsletter_content[0]="아빠는 아프고 어린 두 딸과 떨어져 군대에 가야 했습니다. 군인이 되면 수급비도 절반으로 줄어듭니다. 세상이 깜깜했습니다.안타까운 소식을 접한 많은 분이 가족처럼 함께 아파하며 걱정해 주셨습니다. 어떤 분들은 세이브더칠드런에 전화해 ‘이게 말이 되냐’며 울분을 토하기도 했습니다. 덕분에 지난해 11월 20일 아빠는 군대 면제 통보를 받았습니다.";
newsletter_content[1]="'3년전 갑작스런 사고로 아빠를 잃은 연희'와 '생계유지를 위해 아픈 몸을 이끌고 노점에서 장사를 하는 엄마'를 기억하시나요? 학교가 끝나면 아픈 엄마를 도와 계란빵을 팔던 연희는 빠듯한 생계를 알기에 롱패딩 한 벌 사달라는 말도 꺼내지 못했습니다.";
newsletter_content[2]="겨울과 봄의 경계선에 있는 3월. 볕이 제법 따뜻해졌는데도 찬 바람이 붑니다. 코로나19 바이러스도 확진자가 줄어들고 있지만 여전히 안심하기는 어려운 상황입니다. ‘사회적 거리 두기’ 기간이 길어지면서 저소득가정은 생계도 어렵고, 마스크를 구하기도 힘든 상황에 놓여있습니다.";
newsletter_content[3]="유난이 바람이 차던 12월 초, 세이브더칠드런에 전화 한 통이 걸려왔습니다. 7년 전, 세이브더칠드런의 지원으로 수술을 받았던 이보라 씨가 올해 완치되었다는 소식이었습니다. 당시 아동이었던 보라 씨는 가정 형편이 어려워 수술비를 마련하지 못해 반쯤은 치료를 포기한 상태였는데, 세이브더칠드런 덕분에 수술할 수 있었고 올해는 완치판정까지 받았다고 합니다.";
    
var newsletter_date = new Array();

newsletter_date[0]="2020.05.04";
newsletter_date[1]="2020.04.06";
newsletter_date[2]="2020.03.17";
newsletter_date[3]="2019.12.23";

for(var i=0; i<=newsletter_img.length-1; i++){
newsletter+="<li>"
newsletter+="   <ol class='newsletter_list'>"
newsletter+="   <li>"
newsletter+="      <img src=images/"+newsletter_img[i]+" alt='뉴스1' class='newsletter_img'>"
newsletter+="   </li>"
newsletter+="   <li>"
newsletter+="       <div class='newsletter_txt'>"
newsletter+="            <h3 class='newsletter_title'>"
newsletter+=                 newsletter_title[i]
newsletter+="            </h3>"
newsletter+="            <p class='newsletter_content'>"
newsletter+=                 newsletter_content[i]
newsletter+="            </p>"
newsletter+="            <span class='newsletter_date'>"
newsletter+=                 newsletter_date[i]
newsletter+="            </span>"
newsletter+="       </div>"
newsletter+="   </li>"
newsletter+="   </ol>"
newsletter+="</li>"
    
}



document.getElementById("newsletter").innerHTML=newsletter;


















































