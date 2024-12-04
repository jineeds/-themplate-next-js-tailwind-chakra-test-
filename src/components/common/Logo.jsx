import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';
// size 입력을 따로 하지 않아도 밑에처럼 =10하면 기본값이 10이 되는 것임
const Logo = ({ size = 10 }) => {
    return (
        <Image
            alt="Your Company"
            src="/images/pattern/common/logo.svg"
            // 헤더페이지에 있는 로고 사이즈를 여기서 받으면 됨
            className={classNames('mx-auto w-auto', `h-${size}`)}
            width={40}
            height={40}
        />
    );
};

export default Logo;
