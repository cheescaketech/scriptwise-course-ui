import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Course from './components/Course'
import { ErrorPage, NoPageFound } from './components/ErrorBoundary'

const router = createBrowserRouter([
  {
    path: '/:courseSlug/*',
    element: <Course />,
    errorElement: <ErrorPage />
  }, {
    path: '*',
    element: <NoPageFound />,
    errorElement: <ErrorPage />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
