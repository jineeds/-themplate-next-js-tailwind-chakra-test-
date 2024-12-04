import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Container } from '@chakra-ui/react';

const TogetherSwiper = () => {
    return (
        <Container>
            <div className="bg-black text-white py-10">
                {/* 제목 섹션 */}
                <div className="text-left mb-6">
                    <h1 className="text-xl font-semibold mb-2">Cheers Together</h1>
                    <h2 className="text-3xl font-extrabold">
                        레시피를 나누고,
                        <br />
                        경험을 공유하세요!
                    </h2>
                    <p className="text-lg font-normal pt-2">모두의 술 이야기, 여기서 시작됩니다.</p>
                </div>
                <>
                    <Swiper
                        slidesPerView={3.3}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                        speed={1500} // 전환 속도, 1000ms = 1초
                    >
                        <div>
                            <SwiperSlide>
                                <Image
                                    className="rounded-2xl  aspect-[1/1] object-cover"
                                    src="/images/pattern/main/cheers_card1.jpg"
                                    alt="Strawberry blast"
                                    height={1200}
                                    width={1200}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-2xl aspect-[1/1] object-cover"
                                    src="/images/pattern/main/cheers_card2.jpg"
                                    alt="Strawberry blast"
                                    height={1200}
                                    width={1200}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-2xl aspect-[1/1] object-cover"
                                    src="/images/pattern/main/cheers_card3.jpg"
                                    alt="Strawberry blast"
                                    height={1200}
                                    width={1200}
                                    objectFit="cover" // 이미지가 영역에 맞게 자르기
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-2xl aspect-[1/1] object-cover"
                                    src="/images/pattern/main/cheers_card4.jpg"
                                    alt="Strawberry blast"
                                    height={1200}
                                    width={1200}
                                    objectFit="cover" // 이미지가 영역에 맞게 자르기
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image
                                    className="rounded-2xl aspect-[1/1] object-cover"
                                    src="/images/pattern/main/cheers_card5.jpg"
                                    alt="Strawberry blast"
                                    height={1200}
                                    width={1200}
                                    objectFit="cover" // 이미지가 영역에 맞게 자르기
                                />
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    {/* 하단 슬라이드 */}
                    <div className="pt-5">
                        <Swiper
                            slidesPerView={2.8}
                            spaceBetween={10}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                                reverseDirection: true, // 반대방향 자동 재생 설정
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                            speed={1500} // 전환 속도, 1000ms = 1초
                        >
                            <div>
                                <SwiperSlide>
                                    <Image
                                        className="rounded-2xl aspect-[1/1] object-cover"
                                        src="/images/pattern/main/cheers_card6.jpg"
                                        alt="Strawberry blast"
                                        height={1200}
                                        width={1200}
                                        objectFit="cover" // 이미지가 영역에 맞게 자르기
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="rounded-2xl aspect-[1/1] object-cover"
                                        src="/images/pattern/main/cheers_card7.jpg"
                                        alt="Strawberry blast"
                                        height={1200}
                                        width={1200}
                                        objectFit="cover" // 이미지가 영역에 맞게 자르기
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="rounded-2xl aspect-[1/1] object-cover"
                                        src="/images/pattern/main/cheers_card8.jpg"
                                        alt="Strawberry blast"
                                        height={1200}
                                        width={1200}
                                        objectFit="cover" // 이미지가 영역에 맞게 자르기
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="rounded-2xl aspect-[1/1] object-cover"
                                        src="/images/pattern/main/cheers_card9.jpg"
                                        alt="Strawberry blast"
                                        height={1200}
                                        width={1200}
                                        objectFit="cover" // 이미지가 영역에 맞게 자르기
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="rounded-2xl aspect-[1/1] object-cover"
                                        src="/images/pattern/main/cheers_card10.jpg"
                                        alt="Strawberry blast"
                                        height={1200}
                                        width={1200}
                                        objectFit="cover" // 이미지가 영역에 맞게 자르기
                                    />
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </>
            </div>
        </Container>
    );
};

export default TogetherSwiper;
