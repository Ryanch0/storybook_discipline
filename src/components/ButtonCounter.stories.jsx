//ButtonCounter를 위한 스토리파일
import ButtonCounter from "./ButtonCounter";

export default {
    title: 'Counter/ButtonCounter', //작명 스타일 //스토리북 웹에서 디렉토리구조로 생성
    component: ButtonCounter, // title, component 필수 요소
    tags:['autodocs'], // 스토리의 Docs생성
    argTypes: { // 컴포넌트의 props를 더 자세히 정의하고 제어 (Default 요소로 공통작용)
        backgroundColor: {control:'color'} // 컨트롤타입 지정
    }
}


// 버튼 size large일 경우의 스토리 (여기서 선언한 순서대로 스토리북에 등록됨)
export const Large = {
    args: { // 컴포넌트에 전달한 props객체를 받고 값을 커스텀 지정해서 스토리로 만듬
        size: 'large', // size변화에 따른 스타일링은 dynamic className으로 값을 넘김
        label: 'Click me'
    }
}

export const Small = {
    args: {
        size: 'small',
        label: 'Click me'
    }
}