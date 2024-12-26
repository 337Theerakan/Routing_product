import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                pink: {
                    300: '#fbb6ce',
                },
                purple: {
                    300: '#d8b4fe',
                },
                yellow: {
                    300: '#fde68a',
                },
                indigo: {
                    500: '#6366f1',
                    600: '#4f46e5',
                    700: '#4338ca',
                },
                gray: {
                    700: '#4a4a4a',
                },
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
