import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import Header from '../layout/header/Header';

export default function ListSwiper() {
    // 이미지 데이터 배열 (id 포함)
    // 뒤에 배열 이름을 data붙여주면 나중에 데이터 파일에 따로 불러오기가 편하므로 그렇게 할것
    const slidesData = [
        {
            src: '/images/pattern/main/pick_card1.jpg',
            title: 'Sweet Delight',
            subtitle: 'A fruity cocktail for a relaxing evening',
            button: 'Deataile',
        },
        {
            src: '/images/pattern/main/pick_card2.jpg',
            title: 'Bitter Bliss',
            subtitle: 'A strong and bold whiskey mix',
            button: 'Deataile',
        },
        {
            src: '/images/pattern/main/pick_card3.jpg',
            title: 'Zesty Sparkle',
            subtitle: 'A citrus twist for a refreshing sip',
            button: 'Deataile',
        },
        {
            src: '/images/pattern/main/pick_card4.jpg',
            title: 'Velvet Touch',
            subtitle: 'Smooth and creamy cocktail experience',
            button: 'Deataile',
        },
        {
            src: '/images/pattern/main/pick_card5.jpg',
            title: 'Classic Charm',
            subtitle: 'Timeless and elegant drink',
            button: 'Deataile',
        },
    ];

    return (
        <div className="">
            <Container>
                <div className="text-center pt-10">
                    <strong className="text-white text-4xl">Drink Pick</strong>
                    <p className="text-gray-100 text-lg pb-10">
                        오늘은 어떤 술이 어울릴까요? <br />
                        Drink Pick으로 바로 확인!
                    </p>
                </div>
                <Swiper
                    // 슬라이드 보이는 사진수 설정
                    slidesPerView={1.2}
                    spaceBetween={20}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        // md
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 40,
                        },
                        // lg
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        // xl
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                >
                    {slidesData.map((slide, index) => (
                        <SwiperSlide key={slide.src}>
                            <Image
                                src={slide.src}
                                alt=""
                                width={1300}
                                height={450}
                                className="aspect-[1/1.5] rounded-xl object-cover"
                                // object-cover 가 이미지 크기에 알아서 맞춰주게하는것! 비율지정하고 설정하ㅣㄱ
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white rounded-xl">
                                <h2 className="text-xl font-bold mt-2">{slide.title}</h2>
                                <p className="text-sm text-gray-500">{slide.subtitle}</p>
                            </div>
                            <button className="absolute inset-0 flex flex-col items-center justify-center">
                                {slide.button}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    );
}
