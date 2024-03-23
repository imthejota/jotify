import {createRoot} from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './router'

const query = new QueryClient()
const rootElement = document.getElementById('root')
const root = createRoot(rootElement) 

root.render(<QueryClientProvider client={query}>
    <RouterProvider router={router} />
  </QueryClientProvider>) // lo que se muestra dentro del element


