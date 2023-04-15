# **👻 202130226 이진아**
## React 강의 전용 레포지터리
***

>## **🍔 0413(목) 7주차 수업**<br><br>
>
>**Hook** 
>- 함수형 컴포넌트에서 react state와 생명주기 기능(lifecycle features)을 "연동(hook into)할 수 있게 해준다
>
>
>
>**Hook의 규칙**
> - Hook은 무조건 최상위 레벨에서만 호출
>
>- React function Component의 최상위 레벨
>- 반복문, 조건문 중첩된 함수들 안에서 Hook 호출 금지
>- Hook은 컴포넌트가 렌더링될 때마다 매번 같은 순서로 호출
>- 리액트가 다수의 useState Hook과 useEffect Hook 호출해서 컴포넌트 state를 올바르게 관리
>- 리액트 함수 컴포넌트에서만 Hook을 호출
>- 직접 만든 Custom Hook도 가능
>- React Component에 있는 state와 관련된 모든 로직은 소스코드를 통해 명확하게 확인이 가능해야 함
>
>**잘못된 Hook 사용법**
>
>```js
>// if문의 조건문에서 참인 경우에 useEffect Hook 호출
>// name의 값이 빈 문자열이 되면 조건문의 값이 false가 되어 useEffect Hook이 호출되지 않음
>function MyComponent(props) {
>  	const [name, setName] = useState('Inje');
>  
>  	if (name !== '') }
>    	useEffect(() => {
>          	...
>        });
>    }
>
>    ...
> }
>// 결과적으로 렌더링될 때마다 Hook이 같은 순서대로 호출되는 것이 아니라 조건문의 결과에 따라 호출되는 >
>```
>
>
>
>Hook이 달라지므로 잘못된 코드
>- Hook은 최상위 레벨에서만 호출
>
>**eslint-plugin-react-hooks**
> : Hook의 규칙을 따르도록 강제해주는 것
>
>- 리액트 컴포넌트가 Hook의 규칙을 따르는지 분석
>- 의존성 배열이 잘못된 경우, 자동으로 경고 표시 및 고칠방법을 제안
>
>```js
>const memoizedValue = useMemo(
>	() => {
 >   	// 연산량이 높은 작업을 수행하여 결과를 반환
  >      return computeExpensiveValue(의존성 변수1, 의존성 변수2);
   > },
 >   [의존성 변수1, 의존성 변수2]
>);
>
>// useMemo에서 의존성 배열에 넣은 변수들은 create 함수에 파라미터로 전달되지 않음
>// useMemo Hook의 원래 의미가 의존성 배열에 있는 변수 중에 하나라도 변하면 create 함수를 다시 호출
>// create 함수를 참조하는 모든 변수를 의존성 배열에 넣어주는 것이 맞음
>
>```
>
>Custom Hook 만들기
>**여러 컴포넌트에서 반복적으로 사용되는 로직을 Hook으로 만들어 재사용**
>
>Custom Hook을 만들어야하는 상황
>```js
>// UserStatus Component, IsOnline status에 따라서 사용자의 상태 온라인인지 아닌지 테스트로 >보여주는 Component
>import React, { useState, useEffect } from "react";
>
>function UserListItem(props) {
>  const [isOnline, setIsOnline] = useState(null);
>  
>  useEffect(() => {
>     function handleStatusChange(status) {
>       	setIsOnline(status.isOnline);
>     }
>    
>    ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange);
>    return () => {
>      	ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange);
>    };
> });
>  
>  return (
>      <li style={{ color: isOnline ? 'green' : 'black' }}>
>          {props.user.name}
>      </li>
>	);
>}
>
>```
>
>Custom Hook 추출하기
>**이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수**
>
>중복되는 로직을 useUserStatus라는 Custom Hook 추출
>```js
>// 두 개의 Component에서 중복되는 로직을 추출
>// 여기서 useUserStatus Hook의 목적은 사용자의 온라인, 오프라인 상태를 구독하는 것
>
>import import React, { useState, useEffect } from "react";
>
>function useUserStatus(userId) {
>  	const [isOnline, setIsOnline] = useState(null);
>  
>  	useEffect(() => {
>      	function handleStatusChange(status) {
>          	setIsOnline(status.isOnline);
>        }
>      
>      ServerAPI.subscribeUserStatus(userId, handleStatusChange);
>      return () => {
>        ServerAPI.unsubscribeUserStatus(userId, handleStatusChange);
>      };
>    });
>  
>  	return isOnline;
>}
>
>// useUserStatus Hook의 파라미터로 userId를 받도록 만들고 해당 사용자가 온라인인지 오프라인지 상태를 리턴
>
>```
>
>- Custom Hook은 특별한 규칙이 없음
>- 단순한 함수와 같음
>- 파라미터로 무엇을 받을지, 어떤 것을 리턴할 지, 개발자가 직접 정함
>
>**Custom Hook 사용하기**
>- Custom Hook의 이름은 꼭 use로 시작
>
>- 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때 컴포넌트 내부에 있는 모든 state와 efffects는 전부 분리
>- 각 Custom Hook 호출에 대해서 분리된 state를 얻음
>- 각 Custom Hook의 호출 또한 완전히 독립적
>- Hook들 사이에서 데이터를 공유하는 방법
><br>
><br>


* * * 
>## **🍔 0406(목) 6주차 수업**<br><br>
>**✔︎ 컴포넌트의 추출**
>- 복잡한 컴포넌트를 쪼개서 여러개의 컴포넌트로 나눔
>- 큰 컴포넌트에서 일부를 추출해 새로운 컴포넌트를 만드는 것<br>
>**✔︎ Avatar**
><br>
>
>![텍스트](/image/Comment.png)
> - 컴포넌트를 반복해서 코드에 작성하면 갯수만큼 출력 됨.
>
>
>```js
>//Comment return안
>    return (
>        <div style={style.wrapper}>
>          <div style={style.imageContainer}>
>            <img src={cat} alt="" style={style.image} />
>          </div>
>          <div style={style.contentContainer}>
>            <span style={style.nameText}>{props.name}</span>
>            <span style={style.text}>{props.Comment}</span>
>          </div>
>        </div>
>      );
>```
>
>```js
>//CommentList return안
>        <div>
>            <Comment name={"이진아"} Comment={"안녕하세요, 이진아입니다."}/>
>            <Comment name={"이진아"} Comment={"안녕하세요, 이진아입니다."}/>
>            <Comment name={"이진아"} Comment={"안녕하세요, 이진아입니다."}/>
>        </div>
>```
>![텍스트](/image/commentlist.png)
> ✔︎ **이미지 파일은 public 폴더 안에 넣어도 됨.** <br>
> ✔︎ **리액트가 최종 렌더링 하는 폴더는 src가 아닌 public이기 때문.**
><br><br>
> ### **state와 생명주기**
> state : 리액트 컴포넌트의 상태를 의미 (변경가능한 컴포넌트의 데이터)
> - **state의 특징**
> - 리액트만의 특별한 형태가 아닌, 자바스크립트의 객체이다.
> - 함수형에서는 useState()를 사용.
> - 수정은 setstate()함수를 사용함.
><br>
>✔︎ 생명주기 
>- constructor가 실행되면서 컴포넌트가 생성
>- 생성 직후 conponentDidMount()함수가 호출
>- 컴포넌트가 소멸하기 전까지 여러 번 랜더링
>- 렌더링은 props, setState, dorcceUpdate에 의해 상태가 변경
>- 렌더링이 끝나면 conponentDidUpdate()함수 호출
>
>
>
>
>
><br><br><br>
> ## **실습** <br>
>
>```js
>import React from 'react';
>// import userinfo from './userinfo';
>function Comment(props){
>    return(
>        <div className="comment">
>            <userinfo user={props.author} />
>                <div className="comment-text">
>                    {props.text}
>                </div>
>                <div className="comment-data">
>                    {JSON.stringify(props.data)}
>                </div>
>        </div>
>    );
>}
>export default Comment;
>```
>
><br>
>
>```js
>//CommentList
>import React from 'react';
>import Comment from './Comment';
>
>function CommentList(props){
>    return(
>        <div>
>            <Comment />
>        </div>
>    )
>}
>
>export default CommentList;
>```
><br>
>
>```js
>//Notification.jsx
>import React from 'react';
>
>const styles = {
>    wrapper: {
>        margin: 8,
>        padding: 8,
>        display: "flex",
>        flexDirection: "row",
>        border: "1px solid grey",
>        borderRadius: 16,
>    },
>    messageText: {
>        color: "black",
>        fontSize: 16,
>    },
>};
>
>class Notification extends React.Component{
>    constructor(props){
>        super(props);
>
>        this.state={};
>   }
>    componentDidMount(){
>        console.log(`${this.props.id} componentDidMount() called.`);
>    }
>    componentDidUpdate(){
>        console.log(`${this.props.id} componentDidUpdate() called.`);
>    }
>    componentWillUnmount(){
>        console.log(`${this.props.id} componentWillUnmount() called.`);
>    }
>    render(){
>        return(
>            <div style={styles.wrapper}>
>                <span style={styles.messageText}>{this.props.message}</span>
>            </div>
>        );
>    }
>}
>export default Notification;
>```
><br>
>
>```js
>//NotificationList.jsx
>import React from 'react';
>import Notification from "./Notification";
>
>const reservedNotifications = [
>    {
>        id: 1,
>        message: "hi",
>    },
>    {
>        id: 2,
>        message: "hi",
>    }
>];
>
>var timer;
>
>class NotificationList extends React.Component{
>    constructor(props){
>        super(props);
>
>        this.state ={
>            notifications: [],
>        };
>    }
>
>    componentDidMount(){
>        const { notifications } = this.state;
>        timer = setInterval(()=> {
>            if(notifications.length < reservedNotifications.length){
>                const index = notifications.length;
>                notifications.push(reservedNotifications[index]);
>                this.setState({
>                    notifications: notifications,
>                });
>            }else{
>                this.setState({
>                    notifications: [],
>                });
>                clearInterval(timer);
>            }
>        }, 1000);
>    }
>}
>export default NotificationList;
>```
>
* * *

>## **🍔 0330(목) 5주차 수업**<br><br>
>**✔︎ 엘리먼트는 리액트앱의 가장 작은 빌딜 블록들**<br>
>- 엘리먼트는 자바스크립트 객체의 형태로 존재<br>
>- 컴포넌트, 속성 및 내부의 모든 children을 포함하는 일반 js객체<br>
>- 불변성을 가지고 있음<br>
>- 내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수 : createElement()<br>
>- **내용이 바뀔 땐 컴포넌트를 통해 새로운 엘리먼트를 생성하면 됨! 교체하는 방법으로**<br>
><br>
>
> **✔︎ 엘리먼트 렌더링하기**<br>
>- Root Dom node<br>
>
>```js
>  const element = <h1> 안녕 리액트? </h1>
>  ReactDom.render(element, document.getElementById('root'))
>```
>- 렌더링 업데이트 : **tick()**<br>
> ![텍스트](/image/tick.png)
>
>- **Clock.jsx**<br>
> ![텍스트](/image/Clock.png)
>
>**✔︎ 컴포넌트**<br>
>- 컴포넌트들이 모여 큰 컴포넌트를 구성하고 이는 한 페이지를 만듦 <br>
>- 컴포넌트는 재사용이 가능함. 개발시간과 유지보수 비용 줄일 수 있음<br>
>- 자바스크립트 함수 입력과 출력이 있다는 면에서 유사, 출력은 리액트 엘리언트의 형태로 출력<br>
><br>
>
>**✔︎ props**<br>
>- 속성의 준말로 컴포넌트의 속성<br>
>- props는 컴포넌트에 전달할 다양한 정보를 담고있는 자바스크립트의 객체<br>
>- 특징으로는 읽기 전용임으로 변경X, 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수임<br>
>- ***impure은 인수로 받은 정보가 함수 내부에서 변하는 함수임!***<br>
><br>
>
>**- 컴포넌트 종류**<br>
>- 초기는 클래스형, Hook이 등장하면서 함수형 컴포넌트 사용<br>
><br>
>✔︎ 함수형 
>
>```js
>function welcome(props){ return <h1> ,{props.name} </h1>; }<br>
>```
>
>✔︎ 클래스형 
>
>```js
>  Class welcome extends React:Component{ render(){ return <h1> ,{this.props.name} </h1>; }<br>
>```
>
><br>
>
> ## **실습** <br>
>
>```js
>function Button(props){
>  return(
>    <Button className={'bg-${props.color}'}>
>        <b>
>          {props.children}
>        </b>
>
>    </Button>
>  )
>}
>function ConfirmDialog(props){
>  return(
>    <div>
>      <p>내용을 확인하셨으면 확인 버튼을 눌러주세요</p>
>      <Button color="green">확인</Button>
>    </div>
>  )
>}
>```
>
>```js
>function tick(){
>    const element = (
>        <div>
>            <h1>안녕, 리액트?</h1>
>            <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
>        </div>
>    );
>    
>    // eslint-disable-next-line no-undef
>    ReactDOM.render(element. document.getElementById('root'));
>}
>setInterval(tick, 1000);
>```
>
>
>```js
>import React from 'react';
>import ReactDOM from 'react-dom';
>
>function Clock(props){
>    return(
>        <div>
>            <h1>안녕 리액트?</h1>
>            <h2>현재시간 : {new Date().toLocaleDateString()}</h2>
>        </div>
>    )
>}
>export default Clock;
>```
>
><br>
><br>

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
>```js
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
> ```js
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

