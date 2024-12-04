import { AspectRatio, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Hero2 = () => {
    return (
        <>
            {/* 메인 인트로 */}
            <div className=" relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 mb-60 text-center">
                    <p className="text-lg font-mediu sm:text-xl">취향을 잇고 술을 즐기다.</p>
                    <h1 className=" text-5xl font-semibold tracking-tight sm:text-7xl">Link酒</h1>
                    <p>링크주</p>
                </div>
                <AspectRatio ratio={9 / 16}>
                    <Image src="/images/pattern/main/main_intro.jpg" alt="intro-main" width={1300} height={1300} />
                </AspectRatio>
            </div>
            {/* 메인 인트로 광고*/}
            <div className="relative  flex flex-col justify-between">
                <div className="flex flex-col content-between absolute inset-0  text-white z-10 text-center">
                    <p className="text-lg font-mediu sm:text-xl">
                        친구들과 공유하고
                        <br />
                        나만의 술 레시피를 발견하세요.
                    </p>

                    <h1 className=" text-5xl font-semibold tracking-tight sm:text-7xl">Wellcome</h1>
                    <a
                        href="#"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                    >
                        login
                    </a>
                </div>

                <AspectRatio ratio={9 / 16}>
                    <Image src="/images/pattern/main/main_intro2.jpg" alt="intro-main2" width={1300} height={1300} />
                </AspectRatio>
                {/* 이미지 어둡게 오버레이 적용 */}
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            </div>
        </>
    );
};

export default Hero2;
