/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Lexend Zetta"','"Lexend Mega"','"Roboto Mono"', 'ui-monospace']
      },
    },
  },
  plugins: [],
}

