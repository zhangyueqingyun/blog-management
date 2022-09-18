import { Layout } from '@zhangyueqingyun_/react-components';
import { Outlet } from 'react-router-dom';
import menuConfig from '../../config/menu';

export default function BasicLayout() {
    return (
    <Layout.BasicLayout 
        menuConfig={menuConfig} 
        defaultActiveKey={menuConfig.defaultActiveKey}
    >
        <Outlet />
    </Layout.BasicLayout>
    );
}
