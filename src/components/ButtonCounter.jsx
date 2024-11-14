
// 스토리에 필요할 경우의 수? props로 넘겨줌
// 즉 스토리북의 가치는 이러한 props들의 값을 동적으로 변화시키고 테스트하고 시각화 할 수 있음
// dev서버에서 직접 컴포넌트를 등록하지 않고 스토리북서버에서 미리 UI를 테스트 할 수 있음
import './buttonCounter.css'
const ButtonCounter = ({ label, onClick, size, backgroundColor }) => {
  return (
    <div>
      <button onClick={onClick}
        className={`counter-button--${size}`}
        style={{backgroundColor}} // backgroundColor:backgroundColor
      >{label}</button>
    </div>
  );
};

export default ButtonCounter;
