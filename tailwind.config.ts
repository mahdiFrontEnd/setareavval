/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            colors: {
                textColor: 'var(--text-color)',
                borderColor: 'var(--border-color)',
                primaryColor: 'var(--primary-color)',
                errorColor: 'var(--error-color)',
                successColor: 'var(--success-color)',
                mainBg: 'var(--main-bg)',
                errorBg: 'var(--error-bg)',
                successBg: 'var(--success-bg)',

            },
        },

    }
    ,
    plugins: [],
}
;
