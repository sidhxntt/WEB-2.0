import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePageLayout from '@/Layouts/HomePage';
import ErrorPage from '@/Layouts/ErrorPage';
import Home from '@/Components/Home/Home';
import Login from '@Components/Login/Login';
import Blog from '@Components/Blogs/Blog';
import AllBlogs from '@Components/AllBlogs/AllBlogs';
import AllBlogsContent from '@Components/Blogs/AllBlogsContent';
import Signup from '@Components/Signup/Signup';
import AccountPage from '@Layouts/AccountPage';
import Profile from '@Components/Profile/Profile';
import YourBlogs from '@Components/YourBlogs/YourBlogs';
import UploadBlog from '@Components/UploadBlogs/UploadBlog';
import AccountHome from '@Components/AccountHome/AccountHome';
import ProtectedRoute from '../../Auth/ProtectedRoute';
import YourBlogsContent from '@Components/AllBlogs/YourBlogsContent/YourBlogsContent';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'blogs/blog/:id',
        element: <Blog/>
      },
      {
        path: 'blogs/:page',
        element: <AllBlogs/>
      },
      {
        path: 'blogs/:page/:id',
        element: <AllBlogsContent/>
      },
      {
        path: 'account',
        element: <ProtectedRoute/>, 
        children: [
          {
            path: '',
            element: <AccountPage/>,
            children: [
              {
                path: '',
                element: <AccountHome/>
              },
              {
                path: 'profile',
                element: <Profile/>
              },
              {
                path: 'your-blogs',
                element: <YourBlogs/>
              },
              {
                path: 'your-blogs/:id',
                element: <YourBlogsContent/>
              },
              {
                path: 'upload-blog',
                element: <UploadBlog/>
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/sign-up',
    element: <Signup />
  }
]);

export default routes;
