
## 💡정신차렷!

 <img src="/src/assets/LOGO.png">
 <br/>
 정신전력 교육을 언제 어디에서나, 쉽고 간편하게 정신차렷! 
 입니다.  
  <br>
  
 > '차렷'이 군인의 가장 기본적인 제식인 만큼,  
 정신전력 또한 가장 근본적이고 중요함을 강조하는 의도로  
 프로젝트명을 '정신 차렷!' 으로 지었습니다.

<br><br>
## 💭기존 정신전력 교육의 문제점
 - 정신전력교육을 위한 시간과 공간이 한정적이기 때문에 근무, 휴가, 특수보직 등의 이유로 열외한다면 교육을 듣고 싶어도 들을 수가 없었음.
 - 매주 한명당 한장의 종이만 쓴다고 하더라도 일주일이면 60만장, 일년이면 3120만장의 종이를 낭비함.
 - 지휘관 입장에서는 정신전력 교육 후 용사들의 답변을 종이로 확인하는데 불편함이 있었고 이전 정신전력교육에 대한 제출물을 찾기도 어려움.

<br>

## 프로젝트 설명 동영상

[![Watch the video](https://img.youtube.com/vi/LjX3eVQdIyk/0.jpg)](https://www.youtube.com/watch?time_continue=117&v=LjX3eVQdIyk)

<br>

## 💡정신차렷!의 장점
 - 코로나 19로 인해 **비대면**이 강조되는 상황에서 여러명이 모이지 않고도 정신전력 교육을 받을 수 있음.<br>
 - 휴가, 근무나 사정상 불참한 인원들이 **열외없이** 정신전력 교육에 참여할 수 있음.<br>
 - 각 부대 지휘관이 부대원의 정신전력 현황을 실시간으로 파악할 수 있어 **부대관리**에 용이함.<br>
 - 정신전력 교육 자료에 사용되는 종이를 **절약**할 수 있음.<br>
 - 오픈소스 형식으로 부대별 **특색있는 운영**이 가능함.<br>

<br>

## 기능 설계
 
  <a href="https://ovenapp.io/view/e3xbSgDSvHHfOtzvoxsaMCY55vfirBg9/wWcRb">Oven으로 확인</a>
  
**대시보드**<br>
<img src="/src/assets/dashboard.png" width="500" height="400"><br>
대시보드에서는 이번주의 정신전력과 최신의 우리역사 바로알기 컨텐츠를 확인할 수 있으며, 우리 부대원들의 정신전력교육 응답도 확인할 수 있습니다.
**주간정신전력**<br>
주간정신전력에서는 정신전력을 수강할 수 있으며 수강후에는 간단한 평가가 가능합니다.
<img src="https://user-images.githubusercontent.com/47639762/97774382-a3166700-1b9a-11eb-8a82-e9c6698ce4a3.png" width="500" height="400"><br>
<img src="/src/assets/weekly-2.png" width="500" height="400">**주간정신전력**<br>주간정신전력에서는 정신전력을 수강할 수 있고<br> 수강후에는 간단한 평가가 가능합니다.

<img src="/src/assets/history.png" width="500" height="400">**우리역사바로알기**<br>우리역사 바로알기에서는 다양한 역사, 안보관 자료들을 수강할 수 있습니다.<br> > 역사를 잊은 민족에게 미래는 없다


## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)
* ECMAScript 6 지원 브라우저 사용
* 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used) 

 
### front-end
<table>
 <tr>
  <td>
<img src="/src/assets/vuejs.svg" width="100" height"100">
  </td>
  <td>
<img src="/src/assets/vuetify.svg" width="100" height"100">
  </td>
  <td>
<img src="/src/assets/js.png" width="100" height"100">
  </td>
  
 </tr>
 <tr>
  <td>
Vue.js
  </td>
  <td>
Vuetify
  </td>
  <td>
JavaScript
  </td>
  
 </tr>
 </table>
 
### Server(back-end)
<table>
 <tr>
  <td>
<img src="https://user-images.githubusercontent.com/47639762/97767923-cd4c3280-1b62-11eb-824f-98e50d7db5cb.png" width="100" height"100">
  </td>
  <td>
<img src="https://user-images.githubusercontent.com/47639762/97774574-4916a100-1b9c-11eb-8b3e-5145073f3558.png" width="100" height"100">
  </td>
 </tr>
 <tr>
  <td>
Firebase
  </td>
  <td>
   Node.js
  </td>
 </tr>
 </table>
 
 #### firebase를 backend로 사용한 이유
 > 각 부대의 지휘관이 서비스의 관리자가 되어 플랫폼을 운영해야 하기 때문에 가입자(부대원)과 데이터를 직관적으로 볼 수 있고 관리가 편하며, 여러가지 부가기능이 있는 firebase가 관리 및 운용에 적합하기 때문입니다.

## 설치 및 실행 방법
```bash
$ git clone https://github.com/osamhack2020/WEB_SmartMind_CameToWin
$ yarn or npm install
$ yarn start or npm run start
```

## 지휘관을 위한 Firesbase 사용법

 
## 팀 정보 (Team Information)

 #### 팀장

- 김현재 (peterhyunjae@naver.com) : Front_end 담당, 발표자료 제작  
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:peter.hyunjae@gamil.com)](mailto:peter.hyunjae@gamil.com)
  <a href="https://github.com/itsnowkim">
  <img 
        src="http://img.shields.io/badge/-Tech%20Blog-655ced?style=flat&logo=github&link=https://github.com/itsnowkim"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
 </a>
 
  #### 팀원
 
- 최현수 (chs98105@gmail.com) : Back_end 담당, DB 설계  
[![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:chs98105@gmail.com)](mailto:chs98105@gmail.com)
  <a href="https://github.com/Keep-Going-HyeonSoo">
  <img 
        src="http://img.shields.io/badge/-Tech%20Blog-655ced?style=flat&logo=github&link=https://github.com/Keep-Going-HyeonSoo"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
 </a> 


- 최이현 (chyh0182@naver.com) : Front_end 담당, 시연 영상 제작, README 작성  
 [![Gmail Badge](https://img.shields.io/badge/Gmail-d14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:chldldgus123@gmail.com)](mailto:chldlgus123@gmail.com)
  <a href="https://github.com/Choieeh">
  <img 
        src="http://img.shields.io/badge/-Tech%20Blog-655ced?style=flat&logo=github&link=https://github.com/Choieeh"
        style="height : auto; margin-left : 10px; margin-right : 10px;"/>
 </a>


## 저작권 및 사용권 정보 (Copyleft / End User License)
 * [MIT](https://github.com/Keep-Going-HyeonSoo/WEB_SmartMind_CameToWin/blob/master/license.md)
