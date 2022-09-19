import { Layout } from '@zhangyueqingyun_/react-components';
import { Outlet, useLocation } from 'react-router-dom';
import menuConfig from '../../config/menu';
import './index.css';

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
    ><div className="basic-layout-content">
        <Outlet />
    </div></Layout.BasicLayout>
    );
}
