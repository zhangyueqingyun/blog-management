// const LoginPage = import('../pages/Login');
// const BasicLayout = import('../layout/BasicLayout');
import LoginPage from '../pages/Login';
import BlogPage from '../pages/Blog'
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
            {path: 'blog', element: <BlogPage />}
        ]
    }
];

export default routerConfig;