import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home"
import Apps from "../Pages/Apps"
import Installation from "../Pages/Installation"
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AppDetailsPage from "../Pages/AppDetails";
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
        index: true, /* path: '/' or index:true diye default page set kora jai */
        element: <Home />,
        loader: ()=> fetch('./Apps.json')
        },
        {
        path: '/apps',
        element: <Apps />,
    },{
      path: '/apps/:appId',
      element: <AppDetailsPage/>
    },
        {
        path: '/installation',
        element: <Installation />,
    },
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])

export default router