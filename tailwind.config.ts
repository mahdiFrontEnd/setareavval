/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            backdropBlur: {
                xs: '3px', // custom small blur
            },
            boxShadow: {
                'light': '0 1px 8px #0000001F',
            },
            fontWeight: {
                extraBlack: '900',
                black: '800',
                bold: '700',
                regular: '400',
                light: '300'

            },
            fontSize: {
                'xs': ['0.75rem', {lineHeight: '1rem'}],     // 12px
                'sm': ['0.875rem', {lineHeight: '1.25rem'}],  // 14px
                'base': ['1rem', {lineHeight: '1.5rem'}],     // 16px
                'lg': ['1.125rem', {lineHeight: '1.75rem'}],  // 18px
                'xl': ['1.25rem', {lineHeight: '1.75rem'}],   // 20px
                '2xl': ['1.5rem', {lineHeight: '2rem'}],      // 24px
                '3xl': ['1.875rem', {lineHeight: '2.25rem'}], // 30px
                '4xl': ['2.25rem', {lineHeight: '2.5rem'}],   // 36px
                '5xl': ['3rem', {lineHeight: '1'}],           // 48px
                '6xl': ['3.75rem', {lineHeight: '1'}],        // 60px
                'custom-title': ['2rem', {lineHeight: '2.5rem', letterSpacing: '-0.02em'}],
            },
            colors: {
                textColor: 'var(--text-color)',
                borderColor: 'var(--border-color)',
                primaryColor: 'var(--primary-color)',
                errorColor: 'var(--error-color)',
                successColor: 'var(--success-color)',
                secondaryColor: 'var(--secondary-color)',
                mainBg: 'var(--main-bg)',
                contentBg: 'var(--content-bg)',
                errorBg: 'var(--error-bg)',
                successBg: 'var(--success-bg)',
                gray: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#D6D6D6",
                    400: "#909090",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827",
                    950: "#030712",
                }
            },
        },
    }
    ,
    plugins: [],
}
;
