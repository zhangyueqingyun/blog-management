// const LoginPage = import('../pages/Login');
// const BasicLayout = import('../layout/BasicLayout');
import LoginPage from '../pages/Login';
import BlogPage from '../pages/Blog';
import ProfilePage from '../pages/Profile'
import BasicLayout from '../layout/BasicLayout';

const routerConfig =  [
    {
        path: '/login',
        element:  <LoginPage />
    },
    {
        path: '/',
        element: <BasicLayout />,
        children: [
            {path: 'blog', element: <BlogPage />},
            {path: 'profile', element: <ProfilePage />}
        ]
    }
];

export default routerConfig;