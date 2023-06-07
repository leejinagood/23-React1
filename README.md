# **👻 202130226 이진아**
## React 강의 전용 레포지터리
***

>## **🍔 0601(목) 14주차 수업**<br><br>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
* * *
>## **🍔 0525(목) 13주차 수업**<br><br>
>
>✔︎ 여러개의 컨텍스트 사용하기
>- 동시에 사용하려면 Context.Provider사용
>- 두 개 이상 컨텍스트 값이 자주 함께 사용될 경우 모든 값을 한 번에 제공해주는 별도의 render prop컴포넌트를 직접 만드는 것을 고려
>
>✔︎ useContext
>- 컨텍스트를 사용하기 위해 매번 Consumer 컴포넌트로 감싸는 것 보다 Hook을 사용하는 것이 좋음
>- useContext() 훅은 React.createContext() 함수 호출로 생선된 컨텍스트 객체를 인자로 받아서 현재 컨텍스트 값을 리턴한다.
>- useContext() 훅을 사용할 때는 파라미터로 컨텍스트 객체를 넣어줘야 됨.
>
>```js
>//DarkOrLight
>function DarkOrLight(props) {
>    const [theme, setTheme] = useState("light");
>    const toggleTheme = useCallback(() => {
>        if (theme == "light") {
>            setTheme("dark");
>        } else if (theme == "dark") {
>            setTheme("light");
>        }
>    }, [theme]);
>    return (
>        <ThemeContext.Provider value={{ theme, toggleTheme }}>
>            <MainContent />
>        </ThemeContext.Provider>
>    );
>}
>```
>
>```js
>//MainContent
>function MainContent(props) {
>    const { theme, toggleTheme } = useContext(ThemeContext);
>    return (
>        <div
>            style={{
>                width: "100vw",
>                height: "100vh",
>                padding: "1.5rem",
>                backgroundColor: theme == "light" ? "white" : "black",
>                color: theme == "light" ? "black" : "white",
>            }}
>        >
>            <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
>            <button onClick={toggleTheme}>테마 변경</button>
>        </div>
>    );
>}
>```
>
>```js
>//ThemeContext
>const ThemeContext = React.createContext();
>ThemeContext.displayName = "ThemeContext";
>```
>🔽🔽
>![텍스트](/image/theme.png)
>![텍스트](/image/theme2.png)
>
> ## ✔︎ css
>
>- Cascading Style Sheets 의 약자로 스타일링을 위한 언어
>- 충돌방지를 이유로 계단식으로 스타일이 적용된다. (여러 규칙 만족시 우선순위에 따라 적용)
>- 하나의 스타일이 여러 엘리먼트에 적용될 수 있으며 반대로 하나의 엘리먼트에 여러 스타일이 적용될 수도 있다.
>
>✔︎ styled-components
>- CSS문법을 컴포넌트 형태로 만드는 오픈소스 라이브러리
>
>
>```js
>npm install --save styled-components
>```
>
><br>


* * *
>## **🍔 0518(목) 12주차 수업**<br><br>
>
> ### 합성 : 여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
><br>
>✔︎ Containment
>- 특정 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
>- 엘리먼트가 들어올 지 미리 예상X, Sidebar와 Dialog같은 컴포넌트
>- children prop를 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 게 좋음
>
>```js 
>//JSX를 이용한 props전달 간단한 방법
> const jsxElement = <h1 className= "jsx">JSX Element</h1>
>```
>
>```js
>//리액트 기능을 사용한 방법
>const reactElement = React.createElement(
>  'h1',
>  {className: 'obj'},
>  'OBJ Element'
>)
>```
>
>✔︎ Specialization
>- 범용적인 개념을 구볋이 되게 구체화하는 것을 특수화라고 함
>- 객체지향 언어에서는 상속을 사용하여 특수화를 구현함.
>- 리액트에서는 합성을 사용하여 특수화를 구현
>- 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는 합성 방식
>```js
>function Dialog(props){
>  return(
>    <FancyBorder color="blue">
>      <h1>
>        {props.title}
>      </h1>
>      <p>
>       {props.message}
>      </p>
>    </FancyBorder>
>  );
>}
>funtion WelcomeDialog(props){
>  return(
>    <Dialog 
>      title= "어서오세요"
>      message= "우리 사이트에 방문하신 것을 환영합니다" 
>    />
>  )
>}
>```
>
>✔︎ Containment와 Specialization을 같이 사용하기
>- Containment는 props.children을 사용하고 Specialization을 위해 직접 정의한 props를 사용
><br>
>
>### 상속 : 합성과 대비되는 개념
>- 자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게되는 개념
>- 그러나 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성함.
>
><br>
>✔︎ 실습 <br>
>- card컴포넌트를 만들기. 하위 컴포넌트를 삼싸서 카드 형태로 보여주는 컴포넌트
>- card컴포넌트를 사용해서 스페셜카드(범용)를 생성 - profilecard
>
>```js
>// Card.jsx
>function Card(props) {
>    const { title, backgroundColor, children } = props;
>    return (
>        <div
>            style={{
>                margin: 8,
>                padding: 8,
>                borderRadius: 8,
>                boxShadow: "0px 0px 4px grey",
>                backgroundColor: backgroundColor || "white",
>            }}
>        >
>            {title && <h1>{title}</h1>}
>            {children}
>        </div>
>    );
>}
>```
>🔽🔽
>![텍스트](/image/card.png)
>
>```js
>//ProfileCard.jsx
>function ProfileCard(props) {
>    return (
>        <Card title="Jina Lee" backgroundColor="#4ea04e">
>            <p>안녕하세요, 나는 이진아</p>
>            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
>        </Card>
>    );
>}
>```
>🔽🔽
>![텍스트](/image/card2.png)
>
><br>
>
>### 컨텍스트
>
>- 리액트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식대신 '컴포넌트 트리를 통해 곧바로 컴포넌트에 전달하는 새로운 방식'을 제곧
>- 이것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있음.
>- 컨텐스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는 컴포넌트에 곧바로 데이터를 전달할 수 있음.
>
>![텍스트](/image/context.png)
>- props를 통해 데이터를 전달하는 기존 방식은 실제 데이타를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해지고 반복적인 코드를 작성해야 하기 때문에 가독성이 떨어지고 비효율적임.
>- 이때 컨텍스트를 사용하여 깔끔하게 개선
>
> **✔︎ React.createContext**
>- 컨텍스트를 생성하기 위한 함수로 파라미터에는 기본값을 넣어주면 됨.
>- 하위 컴포넌트는 가장 가까운 상위 레벨의 provider로부터 받아옴
>
>**✔︎ Context.Provider**
>- 하위 컴포넌트들을 감싸즈면 모든 하위 컴포넌트들이 해당 컨텍스트의 데이터에 접근할 수 있다.
>- value라는 prop이 있고 이것은 provider 컴포넌트 하위에 있는 컴포넌트에 전달 됨
>- 하위 컴포넌트를 consumer라고 함.
>
>**✔︎ Context.Consumer**
>- 함수형 컴포넌트에서 컨텍스트를 구독할 수 있음
>- 컴포넌트의 자식으로 함구가 올 수 있는데 이것을 funtion as a child라고 함
>- 자식으로 들어간 함수가 컨텍스트의 value 값을 받아서 리액트의 노드로 리턴
>
>**✔︎ Context.displayName**
>- 컨텍스트 객체는 displayName이라는 문자열 속성을 갖음
>- 크롬의 리액트 개발자 도구에서는 컨텍스트 Provider이나 Consumer를 표시할 때 displayName을 함께 공유
>
>
><br>
* * *
>## **🍔 0511(목) 11주차 수업**<br><br>
>
>**✔︎ Shared State**
>- 공유 state로 어떤 컴포넌트의 state에서 데이터를 여러 하위 컴포넌트에서 공통적으로 사용할 수 있도록 하는 것을 의미한다.
>
>- 부모 컴포넌트의 값이 자식 컴포넌트로 이동하여 자식 컴포넌트의 로직을 수행할 수 있도록 하는 것.
>- 자식 컴포넌트는 각각의 값을 갖지 않고 부모 컴포넌트의 값을 공유받기만 하면 된다.
>
>
>```js
>//TemperatureInput.jsx
>const scaleNames = {
>    c: "섭씨",
>    f: "화씨",
>};
>function TemperatureInput(props) {
>    const handleChange = (event) => {
>        props.onTemperatureChange(event.target.value);
>    };
>    return (
>        <fieldset>
>            <legend>
>                온도를 입력해주세요(단위:{scaleNames[props.scale]}):
>            </legend>
>            <input value={props.temperature} onChange={handleChange} />
>        </fieldset>
>    );
>}
>```
>
>```js
>//Calculator
>function BoilingVerdict(props) {
>    if (props.celsius >= 100) {
>        return <p>물이 끓습니다.</p>;
>    }
>    return <p>물이 끓지 않습니다.</p>;
>}
>function toCelsius(fahrenheit) {
>    return ((fahrenheit - 32) * 5) / 9;
>}
>function toFahrenheit(celsius) {
>    return (celsius * 9) / 5 + 32;
>}
>function tryConvert(temperature, convert) {
>    const input = parseFloat(temperature);
>    if (Number.isNaN(input)) {
>        return "";
>    }
>    const output = convert(input);
>    const rounded = Math.round(output * 1000) / 1000;
>    return rounded.toString();
>}
>function Calculator(props) {
>    const [temperature, setTemperature] = useState("");
>    const [scale, setScale] = useState("c");
>
>    const handleCelsiusChange = (temperature) => {
>        setTemperature(temperature);
>        setScale("c");
>    };
>    const handleFahrenheitChange = (temperature) => {
>        setTemperature(temperature);
>        setScale("f");
>    };
>    const celsius =
>        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
>    const fahrenheit =
>        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
>
>    return (
>        <div>
>            <TemperatureInput
>                scale="c"
>                temperature={celsius}
>                onTemperatureChange={handleCelsiusChange}
>            />
>            <TemperatureInput
>                scale="f"
>                temperature={fahrenheit}
>                onTemperatureChange={handleFahrenheitChange}
>            />
>            <BoilingVerdict celsius={parseFloat(celsius)} />
>        </div>
>    );
>}
>```
>
>![텍스트](/image/Tem.png)
>
>![텍스트](/image/tem1.png)
>
> ✔︎ 100도 넘는 온도를 입력하면 물이 끓음
>
>
>
>
>
><br>
>

* * *
>## **🍔 0504(목) 10주차 수업**<br><br>
>**✔︎ 리스트** <br>
> - 순서대로 나열하는 배열 형태 목록.
> - 자바스크립트 변수, 객체를 하나의 변수로 묶어 놓은 것
>
> const numbers = [1, 2, 3, 4, 5]; <br>
> **✔︎ 키**
> - 각각의 고유값을 가져 각 객체나 아이템을 구분할 수 있는 값을 의미
> 
> **✔︎ 다수의 컴포넌트 렌더링**
>반복되는 컴포넌트를 표현하는 렌더링 과정 중 하나씩 입력하는 것은 비효율적이며 동적인 화면의 경우 구현에 어려움이 존재한다.<br><br>
> 이 경우 사용하는 것? map() 함수 
> - 배열에 들어있는 변수를 처리한 뒤 리턴하여 하나씩 짝 지어줌
>
>map 함수를 사용하는 코드
>
>
>```js
>// #1
>const numbers = [1, 2, 3, 4, 5];
>const listItems = numbers.map((number) =>
>  <li>{number}</li>
>);
>      
>// #2
>ReactDOM.render(
>  <ul>{listItems}</ul>,
>  document.getElementById('root')
>);
>```
>#1.
> jsx의 경우 중괄호로 js 코드 삽입이 가능하기 때문에 numbers에 있는 각각의 값을 엘리먼트로 갖게 된다.
>
>#2.
>출력시 listItems를 불러오며 listItem은 numbers 값을 불러오기 때문에 리스트로 1~5의 글머리 기호 목록이 출력된다.
>
><br>
>
>**✔︎ list - Key 관계**
>
>- 리스트에서 아이템을 구분하기 위한 고유한 문자열.
>이를 이용하여 아이템의 추가, 제거등을 구분할 때 사용한다.
>
>- 리스트 아이템에는 키가 있어야 한다. (없을 경우 경고 문구 출력)
>
>✔︎ 리액트에서의 키의 값은 같은 리스트의 엘리먼트 사이에서 고유하면 된다.<br>
>✔︎ 3-1. 키 값으로 숫자를 사용한 경우
>- 숫자가 중복될 경우 키 값도 중복되어 고유한 값이 되지 않는다. ➡ 경고 메세지 출력 <br>
>
>✔︎ 3-2. 키 값으로 id 사용, 인덱스 값 사용
>- 현재 아이템의 인덱스 값을 부여한다. 단 배열 등 순서 변경이 가능한 경우 성능 저하, 오류 발생 (state 관련) 등의 문제가 발생 할 수 있다.
고유 id가 없을 경우에 사용하는 것이 좋으며 명시적으로 키 값을 부여하지 않으면 인덱스 값을 키 값으로 사용한다.
>
>**map()함수에서는 인자로 key가 필요하다**
>
>```js
>//Singup.jsx
>function SignUp(props) {
>    const [name, setName] = useState("");
>    const [gender, setGender] = useState("남자");
>   const handleChangeName = (event) => {
>      setName(event.target.value);
> };
> const handleChangeGender = (event) => {
>        setGender(event.target.value);
>    };
>   const handleSubmit = (event) => {
>      alert(`이름 : ${name}, 성별 : ${gender}`);
>     event.preventDefault();
>};
>    return (
>       <form onSubmit={handleSubmit}>
>          <label>
>             이름 :
>            <input type="text" value={name} onChange={handleChangeName} />
>        </label>
>       <label>
>          성별 :
>         <select value={gender} onChange={handleChangeGender}>
>                  <option value="남자">남자</option>
>                 <option value="여자">여자</option>
>            </select>
>       </label>
>      <button type="submit">제출</button>
>   </form>
>)
>}
>```
>
>![텍스트](/image/Singup1.png)
>
>![텍스트](/image/Singup2.png)
>
><br>
>
>
>```js
>
>//AttendanceBook.jsx
>const students = [
>    {id: 1,
>        name: "이진아",},
>    {id: 2,
>        name: "리진아",},
>    {id: 3,
>        name: "진진자라",},
>    {id: 4,
>        name: "야옹",},
>];
>function AttendanceBook(props) {
>    return (
>        <ul>
>            {students.map((student) => {
>                return <li key = {student.id}>{student.name}</li>;
>            })}
>        </ul>
>    );
>}
>```
>
>![텍스트](/image/AttendanceBook.png)
>
><br>
>





* * *
>## **🍔 0427(목) 9주차 수업**<br><br>
> **✔︎ 이벤트 처리**
>
>```js
><button onclick="activate()">
>     Activate
></button>
>```
>
>🔽🔽🔽
>
>```js
><button onClick={activate}>
>     Activate
></button>
>```
> **차이점**
> - onclick -> onClick
> - 전달하려는 함수는 문자열에 그대로 전달
>
>✔︎ 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수 "이벤트 핸들러(Event Handler)"
>
><br>
>
>```js
>//Toggle
>import React, { useState } from "react";
>
>class Toggle extends React.Component{
>    constructor(props){
>        super(props);
>        this.state = {isToggleOn: true};
>        this.handleClick = this.handleClick.bind(this);
>    }
>    handleClick(){
>        this.setState(prevState => ({
>            isToggleOn: !prevState.isToggleOn
>        }));
>    }
>    render(){
>        return(
>            <button onClick={this.handleClick}>
>                {this.state.isToggleOn ? '켜짐' : '꺼짐'}
>            </button>
>        );
>    }
>}
> export default Toggle;
>```
> **클래스 컴포넌트는 사용하지 않기에 참고만 하자**
>
>![텍스트](/image/Toggle.png)
>![텍스트](/image/Toggle2.png)
>
><br>
>
>```js
>function Toggle(props){
>    const [isToggleOn, setIsToggleOn] = useState(true);
>    //방법1 함수 안에 함수로 정의
>    function handleClick(){
>        setIsToggleOn((isToggleOn) => !isToggleOn);
>    }
>    //방법2 arrow function을 사용하여 정의
>    const handleClick = () => {
>        setIsToggleOn((isToggleOn) => !isToggleOn);
>    }
>    return(
>        <button onClick={handleClick}>
>            {isToggleOn ? '켜짐' : '꺼짐'}
>        </button>
>    );
>}
>export default Toggle;
>```
> **✔︎ 보통은 화살표 함수를 많이 사용함.**
>
><br>
>
>- 함수를 정의할 때는 파라미터(Parameter)혹은 매개변수
>- 함수를 사용할 땐 아귀먼트 (Argument)혹은 인수라고 부름 < 이벤트 핸들러에 매개변수를 전달해야 하는 경우가 많음.
>
>```js
>//클래스형
><button onClick={(event) => this.deleteItem(id, event)}> 삭제하기</button>
><button onClick={this.deleteItem.bind(this, id)}> 삭제하기 </button>
>```
>
>```js
>//MyButton
>function MyButton(props){
>    const handleDelete = (id, event) => {
>        console.log(id, event.target);
>    }
>    return(
>        <button onClick={(event) => this.deleteItem(1, event)}> 삭제하기</button>
>    )
>}
>export default MyButton;
>```
>
>```js
>//ConfirmButton
>function ConfirmButton(props){
>    const[isConfirmed, setIsConfirmed] = useState(false);
>    const handleConfirm = () => {
>        setIsConfirmed((prevIsConfiremd) => !prevIsConfiremd);
>    };
>    return(
>        <button onClick={handleConfirm} disabled={isConfirmed}>
>        {isConfirmed ? '확인 됨' : '확인하기'}
>    </button>
>    )
>}
>```
>
>![텍스트](/image/ConfirmButton.png)
>![텍스트](/image/ConfirmButton2.png)
><br> <br>
>
>**✔︎ 조건부 렌더링**
>- props로 전달받은 isLoggedln 이 true이면 UseGreeting, false면 GuestGreeting
>
>```js
>function Greeting(props){
>  const isLoggedln = props.isLoggedln;
>  is(isLoggedln){
>    return <UseGreeting />;
>  }
>  return < GuestGreeting />;
>}
>```
>
> **✔︎ 렌더링 해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수**
>
>```js
>  let button;
>  if(isLoggedln){
>    button = <LoginButton onClick={handleLogoutClick} />;
>  }else {
>    bitton = <LoginButton onClick={handleLoginClick} />;
>  }
>  return (
>    <div>
>      <Greeting isLoggedln={isLoggedln} />
>      {button}
>    </div>
>  )
>```
>
> **인라인 조건**
>
>✔︎ 인라인 if
>- if문을 사용하지 않고 동일한 효과를 내기 위해 && 논리 연산자를 사용
>- &&는 and연산자로 모든 조건이 참일 때, 참
>```js
>  {unreadMessages.length > 0 && 
>    <h2>
>      현재 {unreadMessages.length}개의 읽지 않은 메세지가 있습니다.
>    </h2>
>  }
>```
>
>✔︎ 인라인 else if
> - 삼항 연산자 사용 > 조건문 ? 참일경우 : 거짓일경우
>
>```js
>function UserState(props){
>  return(
>    <div>
>      이 사용자는 현재 <b>{props.isLoggedIn ? '로그인' : '로그인 하지 않은'}</b> 상태입니다. 
>    </div>
>   )}
>```
>
>**✔︎ 컴포넌트 렌더링 막기**
>
>```js
>  function WarningBanner(props){
>    if (!props.warning){
>      return null;
>    }
>    return(
>      <div>경고!</div>
>    )
>  }
>```
>
>
>```js
>//LoginControl
>function LoginControl(props) {
>  const [isLoggedln, setIsLoggedln] = useState(false);
>  const handleClickLogin = () => {
>    setIsLoggedln(true);
>  };
>  const handleClickLogout = () => {
>    setIsLoggedln(false);
>  };
>  return (
>    <>
>      {isLoggedln && <span style={styles.greeting}>환영합니다!</span>}
>      <button onClick={isLoggedln ? handleClickLogout : handleClickLogin}>
>        {isLoggedln ? '로그아웃' : '로그인'}
>      </button>
>    </>
>  );
>}
>``` 
>
>![텍스트](/image/Loggined1.png)
>![텍스트](/image/Loggined2.png)
>
><br>

* * * 
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

