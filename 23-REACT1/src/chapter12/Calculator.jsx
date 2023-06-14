import React, { useState } from "react";
// import TemperatureInput from "./TemperatureInput";

const scaleNames = { //단위의 이름을 저장하는 객체
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) { //온도 입력 필드를 나타내는 함수 컴포넌트, props는 매개변수
    const handleChange = (event) => { 
        props.onTemperatureChange(event.target.value); //이것을 호출하며
        //부모 컴포넌트로부터 전달받은 onTemperatureChange 함수에 입력된 값을 전달
    };

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위: {scaleNames[props.scale]} ): 
                {/* {scaleNames[props.scale]} 단위 이름을 동적으로 표시 */}
            </legend>

            <input value={props.temperature} onChange={handleChange} />
            {/* 입력필드 */}
{/* 입력 필드의 값이 props.temperature과 동기화되도록 설정됩니다. onChange={handleChange}은 입력 값이 변경될 때마다 handleChange 함수가 호출 */}
        </fieldset>
    );
}

function BoilingVerdict(props) {
    //props.celsius 값을 기준으로 물이 끓는지 판단하여 알맞은 텍스트를 반환
    if (props.celsius >= 100) {
        return <p>물이 끓습니다.</p>;
    }
    return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) { //화씨를 섭씨로 변환하는 함수
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) { //섭씨를 화씨로 변환하는 함수
    return (celsius * 9) / 5 + 32; 
}

function tryConvert(temperature, convert) {
    //온도 변환을 시도하는 함수입니다. 입력된 온도(temperature)를 숫자로 파싱하고, 변환 함수(convert)에 적용하여 결과를 반환
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return ""; //유효하지 않을 땐 빈 문자열
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator(props) {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");
    //scale이라는 상태 변수와 setScale이라는 상태 변경 함수를 생성합니다. useState("c")는 scale의 초기값을 "c"

    const handleCelsiusChange = (temperature) => {//섭씨 입력 필드의 변경 이벤트를 처리하는 함수
        setTemperature(temperature);
        setScale("c");
        //temperature 상태를 설정하고, setScale("c")를 호출하여 scale 상태를 "c"로 설정
    };

    const handleFahrenheitChange = (temperature) => { //화씨 입력 필드의 변경 이벤트를 처리하는 함수
        setTemperature(temperature);
        setScale("f");
        //setScale("f")를 호출하여 scale 상태를 "f"로 설정
    };

    //scale 상태에 따라 tryConvert 함수를 호출하여 올바른 변환 함수를 적용하고, 변환된 온도 값을 celsius와 fahrenheit 변수에 저장
    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            {/* 입력 필드에 대한 초기값과 변경 이벤트 처리 함수를 전달 */}
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />

            {/* parseFloat(celsius)를 사용하여 celsius 값을 숫자로 변환하여 전달 */}
        </div>
    );
}

export default Calculator;