import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'

import router from './routes/router'
import { DataProvider } from './context/DataContext'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>

  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  </DataProvider>
)
