import { Image } from '@chakra-ui/next-js';
import { TriangleAlert } from 'lucide-react';
import React from 'react';

const Word = () => {
    return (
        <div className="text-center flex flex-col items-center justify-center">
            <TriangleAlert color="white " />
            <strong className="text-white font-normal text-sm pt-3">
                행복한 시간에는 과음 대신 적당한 음주로 기분을 더하시고, <br />
                과도한 음주는 피해주세요.
            </strong>

            <Image
                className="mt-5 aspect-video, object-cover"
                src="/images/pattern/main/christmas_event.jpg"
                alt=""
                width={1300}
                height={200}
            />
        </div>
    );
};

export default Word;
