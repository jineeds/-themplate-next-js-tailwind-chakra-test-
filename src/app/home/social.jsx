import {
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Container,
    Heading,
    HStack,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const cardData = [
    {
        id: 1,
        title: 'Caramel Latte Bliss',
        description: 'Enjoy the rich and smooth taste of caramel latte, a perfect blend of espresso and caramel syrup.',
        badges: ['Sweet', 'Caffeine'],
        image: 'https://images.unsplash.com/photo-1542736667-069246bdbc94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        buttonText: 'Order Caramel',
    },
    {
        id: 2,
        title: 'Matcha Green Tea',
        description: 'A refreshing matcha latte made with finely ground green tea leaves and steamed milk.',
        badges: ['Cool', 'Healthy'],
        image: 'https://images.unsplash.com/photo-1606851096748-6ec205f8c609?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        buttonText: 'Get Matcha',
    },
    {
        id: 3,
        title: 'Espresso Shot',
        description: 'Bold and strong, this single shot of espresso is perfect for an instant energy boost.',
        badges: ['Hot', 'Strong'],
        image: 'https://images.unsplash.com/photo-1524690972826-032d6b0c23f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        buttonText: 'Buy Espresso',
    },
    {
        id: 4,
        title: 'Iced Mocha Delight',
        description: 'A chilled mocha drink with a blend of espresso, chocolate, and cold milk for a sweet escape.',
        badges: ['Cold', 'Chocolate'],
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b58c70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
        buttonText: 'Order Mocha',
    },
];

const cardData2 = [
    {
        id: 1,
        title: 'Iced milk latte',
        description: 'A chilled mocha drink with a blend of espresso, chocolate, and cold milk for a sweet escape.',
        badges: ['Cold', 'Chocolate'],
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        buttonText: 'Order Mocha',
    },
    {
        id: 2,
        title: 'Iced milk latte',
        description: 'A chilled mocha drink with a blend of espresso, chocolate, and cold milk for a sweet escape.',
        badges: ['Cold', 'Chocolate'],
        image: 'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
        buttonText: 'Order Mocha',
    },
];

const Social = () => {
    return (
        <Container>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} className="gap-4">
                {/* 맵 함수 */}
                {cardData.map((card) => (
                    <Card key={card.id} maxW="xl" bgColor="gray.100">
                        <CardBody className="flex flex-col">
                            <Image
                                objectFit="cover"
                                width={1200}
                                height={1200}
                                src={card.imageUrl}
                                alt={card.title}
                                className="aspect-video object-cover"
                            />
                            <Box>
                                <Heading size="md" className="line-clamp-1 mb-2">
                                    {card.title}
                                </Heading>
                                <Text className="line-clamp-1">{card.description}</Text>
                                <HStack>
                                    {/* 여러개에서 하나씩 들어와의미 아래 조건 외우면 됨 */}
                                    {card.badges.map((badge, index) => (
                                        <Badge key={index} className="bg-pink-200 rounded mt-4">
                                            {badge}
                                        </Badge>
                                    ))}

                                    {/* <Badge>Hot</Badge>
                                    <Badge>Caffeine</Badge> */}
                                </HStack>
                            </Box>
                        </CardBody>
                        <CardFooter>
                            <Button>{card.buttonText}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, xl: 2 }} className="gap-4 mt-4">
                {cardData2.map((card2) => (
                    <Card key={card2.id} bgColor="red.100">
                        <CardBody className="flex flex-col md:flex-row gap-4">
                            <Image
                                className="w-1/3"
                                objectFit="cover"
                                width={1200}
                                height={1200}
                                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Caffe Latte"
                            />
                            <Box>
                                <Heading size="md" mb="2">
                                    {card2.title}
                                </Heading>
                                <Text>{card2.description}</Text>
                                {/* 여러개에서 하나씩 들어와의미 아래 조건 외우면 됨 */}
                                {/* {card.badges.map((badge, index) => (
                                        <Badge key={index} className="bg-pink-200 rounded mt-4">
                                            {badge}
                                        </Badge>
                                    ))} */}
                                <HStack mt="4">
                                    {card2.badges.map((badge, index) => {
                                        <Badge key={index} className="bg-red-200 rounded mt-4">
                                            {badge}
                                        </Badge>;
                                    })}
                                    {/* <Badge>Hot</Badge>
                                    <Badge>Caffeine</Badge> */}
                                </HStack>
                            </Box>
                        </CardBody>
                        <CardFooter>
                            <Button>{card2.buttonText}</Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
};
export default Social;
