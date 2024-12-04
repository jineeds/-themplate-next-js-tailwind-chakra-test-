/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        //   // 우리기준 테일윈드 브레이크 포인트임
        screens: {
            sm: '640px',
        },
        container: {
            mawWidth: {
                DEFAULT: '1340px',
            },
            px: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '4rem',
                lg: '6rem',
                xl: '8rem',
            },
        },
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
        },
    },
    // 이미지를 1:1 비율로 핏하게 만드는거 테일윈드 클래스네임 설정
    plugins: [],
};
