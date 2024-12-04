import React from 'react';
import { Avatar, Button, Card, Container } from '@chakra-ui/react';
import { Gift } from 'lucide-react';

const Event = () => {
    return (
        <Container>
            <div className="text-left">
                <p className="text-white text-lg font-normal">나만의 특별한 레시피를 더 풍성하게</p>
                <div className="flex flex-row">
                    <strong className="text-pink-500 text-3xl">SPECIAL EVENT </strong>
                    <div>
                        <Gift size={40} strokeWidth={2} className="ml-4 text-pink-500 " />
                    </div>
                </div>
                {/* <p className="text-white text-3xl font-bold">나만의 소주, 선물은 덤!</p> */}
            </div>
        </Container>
    );
};

export default Event;
