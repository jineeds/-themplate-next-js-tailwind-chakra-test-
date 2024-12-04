import React from 'react';
import { Avatar, Button, Card, Container, Image } from '@chakra-ui/react';
import { Gift } from 'lucide-react';

const Event = () => {
    return (
        <Container>
            <div className="text-left">
                <p className="text-white text-lg font-normal">연말 파티 준비하시나요??</p>
                <div className="flex flex-row">
                    <strong className="text-pink-500 text-3xl">SPECIAL EVENT </strong>
                    <div>
                        <Gift size={40} strokeWidth={2} className="ml-4 text-pink-500 " />
                    </div>
                </div>
                {/* <p className="text-white text-3xl font-bold">나만의 소주, 선물은 덤!</p> */}
            </div>
            <div className="mt-5 text-left p-6 max-w-lg mx-auto bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white ">
                        나만의 소주로, <br />
                        선물은 덤으로!
                    </h1>
                    <Image
                        src="/images/pattern/main/event_gift.png"
                        alt=""
                        width={100}
                        height={100}
                        className="object-center object-fill"
                    />
                </div>
                <p className="mt-8 text-pretty text-lg font-medium text-slate-50 sm:text-xl/8">
                    우리나라를 대표하는 소주로 선보이는 나만의 레시피를 보여주세요!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="#"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        참여하기
                    </a>
                    <a
                        href="#"
                        className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                    >
                        자세히보기 <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </Container>
    );
};

export default Event;
