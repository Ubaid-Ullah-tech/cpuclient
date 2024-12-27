import { defineConfig } from 'vite'; // Ensure this line is present
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://cpuserver-react-dveloper.vercel.app', // Production server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});






// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://cpuserver-react-dveloper.vercel.app', // Production server URL
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });









// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:5000', // Your backend server
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });










// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
