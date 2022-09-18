import {Menu} from '@zhangyueqingyun_/react-components';
import './BasicLayout.css';

export default function BasicLayout({menuConfig, defaultActiveKey, children}) {
    return (
    <div class="page-container">
        <Menu  
            name="global" 
            defaultActiveKey={defaultActiveKey}
            config={menuConfig}
        /> 
        <div class="content">{children}</div>
    </div>
    )
}