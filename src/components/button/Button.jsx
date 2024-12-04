import classNames from 'classnames';
import { Type } from 'lucide-react';
import React from 'react';
import { Value } from 'sass';
import { FcGoogle } from 'react-icons/fc';

// 버튼스타일 변수이름을 새로 설정함 - 밑에있는조건을 값을 설정해서 변수 이름만 넣으면 적용이 됨
// 1. '공통 클래스 설정' {조건문 적용 }
const buttonStyle = classNames('flex  justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold ', {
    // 'w-full bg-indigo-600 text-white': type === 'solid',
    // 'w-full bg-gray-600 text-white': type === 'secondary',
    // 'w-full bg-red-600 text-white': type === 'danger',
});

const Button = ({ children, type, className }) => {
    // type별로 다른 스ㅏ일을 적용할 수 있도록 조건부 렌더링
    return (
        <button className={buttonStyle}>
            <FcGoogle size={25} />
            {children}
        </button>
    );
};

export default Button;
