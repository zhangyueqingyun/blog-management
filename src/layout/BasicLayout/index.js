import { Layout, Space } from '@zhangyueqingyun_/react-components';
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
        title={<Space interval={12}>
            <img 
                src="https://zblog-images.oss-cn-hangzhou.aliyuncs.com/avatar.jpeg" 
                alt="logo" 
                width={25}
                height={25}
            /> 博客管理系统</Space>}
        menuConfig={menuConfig} 
        defaultActiveKey={menuConfig.defaultActiveKey}
    >
        <Outlet />
    </Layout.BasicLayout>
    );
}
