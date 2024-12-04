export const Container = {
    baseStyle: {
        maxW: '1340px',
        mx: 'auto',
        px: { base: '5', md: '6', lg: '8' },
    },
    sizes: {
        sm: {
            maxW: '640px',
        },
        md: {
            maxW: '768px',
        },
        lg: {
            maxW: '1024px',
        },
        xl: {
            maxW: '1340px',
        },
        '2xl': {
            maxW: '1400px',
        },
        full: {
            maxW: 'none',
        },
    },
    variants: {
        primary: {
            bg: 'white',
            shadow: 'md',
            rounded: 'lg',
        },
        secondary: {
            bg: 'gray.50',
            rounded: 'md',
        },
        responsive: {
            px: { base: '4', md: '8', lg: '12' },
            py: { base: '4', md: '6', lg: '8' },
        },
    },
    // 디퐅트 값을 뭐를 쓸까를 지정하는 것임
    // 화면 너비 기본값 변경하고 싶으며 ㄴ위에서 수치보고 밑에서 변경할것
    defaultProps: {
        size: 'xl',
    },
};
