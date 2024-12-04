import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';

import Hero from './hero';
import Bento from './bento';

import Hero2 from './hero2';
import Social from './social';
import TogetherSwiper from './togetherSwiper';
import ListSwiper from '@/components/list/ListSwiper';
import Word from './word';
import Event from './event';

const Home = () => {
    return (
        <>
            <Hero2 />
            {/* 섹션끼리 떨어뜨리는 거 여기서 작업 */}
            <div className="flex flex-col gap-6 bg-black">
                {/* 선생님이랑한거 소셜이랑 리스트 */}
                <ListSwiper />
                <TogetherSwiper />
                <Word />
                <Event />
                <Hero />
                <Social />

                <Bento />
                <IntroSwiper />
                <News mockNews={mockNews} title="뉴스" />
            </div>
        </>
    );
};

export default Home;
