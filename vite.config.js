import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server : {
    proxy : {
      '/api' : {
        target : 'http://localhost:3000'  // It means if the url path starts with /api then always sent request to the localhost:3000. same we also want images which's url start with /image. It means we don't need to type http://localhost:3000 everytime.
      },
      '/images' : {
        target : 'http://localhost:3000'  // after that also do a small change in index.html by adding base tag just below the meta tag. all the image url starts with / so by adding <base href="/" /> tag. it will add a / in starting of the URL.
      }
    }
  }
})
