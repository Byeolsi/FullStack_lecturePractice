// useState를 사용하기 위해 import.
import React from "react";

function TimerComponent() {
  // time의 기본 시작값은 0.
  const [time, setTime] = React.useState(0);

  // 이 함수가 실행될 때마다 이 로그가 발생.
  console.log("컴포넌트 업데이트");

  // time의 값이 1이 증가한 값으로 바뀜.
  function updateTime() {
    setTime(time + 1);
  }

  // 처음에 한 번만 실행됨.
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updateTime}>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
