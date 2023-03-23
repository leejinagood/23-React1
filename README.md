# **👻 202130226 이진아**
## React 강의 전용 레포지터리
***


>## **🍔 0323(목) 4주차 수업**<br><br>
>1. README.md 백업 <br>
>2. local에 있는 저장소 바꾸기 <br>
>3. 새 프로젝트 생성(23-REACT1) <br>
>4. README.md 덮어쓰기 <br>
>5. GitHub 저장소 삭제 <br>
>6. 로컬에서 23-react1 push (소문자만)<br>
>7. GitHub 저장소 확인 <br>
>
> **✔︎ JSX : javascript에 XML을 추가해 확장한 문법** <br>
> + const name = <h1.>Hello,{name}</h1> <br>
> + </> 닫힘태그가 있음 <br>
> + jsx는 객체를 표현 : Babel<br>
> + ✔︎ 내부적으로 XML/HTML코드를 자바스크립크로 변환<br>
> + 리액트가 createElement함수로 표현<br>
>
> **장점 : 가독성이 높고 코드가 간결해짐, 보안에 강함**<br>
> + 모든 자바스크립트 문법을 지원하고 HTML과 XML을 섞어서 사용<br>
> 
><br>
>
> ## **실습** <br>
>
>```
>import React from "react"
>import Book from "./Book"
>
>function Book(props){ 
>    return ( 
>        <div>
>        <h1>{이 책의 이름은 ${props.book}입니다}</h1>
>        </div>
>    )}
>export default Book
>```
>  
> ✔︎ index.js에서 렌더링 해주기  
> <br>
> <br>

<br>

***
>## **🍔 0316(목) 3주차 수업**<br><br>
>**❗️ README.md 작성 방법❗️** <br>
>+ 이름 : h1 
>+ 강의 날짜 : h2 
>+ 학습내용(필수) 
>+ 작성 코드(선택) 
>+ 최근 내용이 위에 오도록 
>
>✔ Chocolatey for Individual Use <- 깃을 쓸 때 사용 <https://chocolatey.org/install>  
✔ node.js v18.15.0 다운 -> npm, npx도 자동으로 다운됨.  
> ### 리액트 : 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
>+ 복잡한 사이트를 쉽게 만들고 구현하기 위해 사용됨. 장점은 ***렌더링*** ! 
>+ ***DOM(Document Object Model)*** 은 동기식으로 이를 통해 빠른 업데이트와 렌더링을 사용할 수 있음. <br>
(Virtual DOM은 비동기식 방법으로 렌더링 함.)
>
> ![텍스트](/image/DOM.png )
>
>+ 컴포넌트 기반의 구조(모든 페이지가 컴포넌트로 구성되어 있음) <br>
따라서 **반복적인 작업을 줄여줌으로 생산성이 좋고 재사용성**이 뛰어남.
>+ 모바일 앱 개발 가능, 메타에서 오픈소스 프로젝트로 계속 관리 중
>+ 리액트의 단점 : 방대한 학습량, 높은 상태의 관리 복잡도
> 
>+ CDN <https://ko.reactjs.org/docs/cdn-links.html> <br> html 파일에  CDN방식으로 사용할 수 있도록 script파일을 갖고 옴
> <br><br>
> ## 실습   
>✔ <https://ko.reactjs.org/docs/add-react-to-a-website.html>  
>✔ index.html과 like_button.js파일 생성
> ```
> //like_button.js
>
>function MyButton (props) {
>    const [isClicked, setIsClicked] = React .useState(false);
>    return React. createElement (
>    'button' ,
>    { onClick: () => setIsClicked(true) }
>    , isClicked ? 'Clicked!' : 'click here!'
>    )}
>    const domContainer = document.querySelector('#root');
>    ReactDOM.render (React. createElement (MyButton), domContainer); 
>```
> ✔ **npx create-react-app 프로젝트명** 으로 리액트 설치  
> + 터미널에 npx create-react-app myapp 로 myapp 설치
> + cd 명령어로 폴더에 들어간 후 npm start
><br>
> ![텍스트](/image/npmstart.png)<br>
> <br>
> <br>

<br>

***
>## **🍔 0309(목) 2주차 수업** <br><br>
>
>✔︎ github에서 repository를 생성 -> 23-React1 <br>
>✔︎ LICENSE 파일, .gitignore파일 추가 <br>
>✔︎ html, css, 자바스크립트란 무엇인가~
>+ HTML(웹사이트 뼈대를 구성하는 태그들)
>+ 자바스크립트 (var, let, const...)<br>
> <br>
> <br>

<br>

***
>## **🍔 0302(목) 1주차 수업**<br><br>
>
>✔︎ github 맛보기 <br>
>✔︎ 깃허브 회원가입, Desktop과 깃허브 연동, 임시 Repository생성 <br>
> <br>
> <br>

<br>

***
>## 🍔 **리드미파일 마크 다운 문법** 👻 <br><br>
> - **글자 강조 →** ** 문자 **
> - **기울림체 →** *** 문자 ***
> - **글자 크기 →** # ## ### #### ##### ######
> - **구분 선 →** ***
> - **코드 삽입 →** ```로 감싸기 
> - ```System.out.println("Hi");```
> - **목록 차트 만들기 →** +로 시작 후 다음 줄에 -
> - **인용 →** > 문구
> - **링크 →** <링크>
> - **이미지 →** ![텍스트] (이미지경로)<br>
><br>
> <br>

