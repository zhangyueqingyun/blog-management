import { Layout } from '@zhangyueqingyun_/react-components';
import { Outlet, useLocation } from 'react-router-dom';
import menuConfig from '../../config/menu';

export default function BasicLayout() {
    const { pathname } = useLocation();
    const isLogin = pathname !== '/login' && sessionStorage['access_token'];
    if (!isLogin) {
        // message.error('请先登录！');
        window.location.href = '/login';
    }
    return isLogin && (
    <Layout.BasicLayout 
        menuConfig={menuConfig} 
        defaultActiveKey={menuConfig.defaultActiveKey}
    >
        <Outlet />
    </Layout.BasicLayout>
    );
}
