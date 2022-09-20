import { Modal } from '@zhangyueqingyun_/react-components';

export default function Delete() {
    function onOk(values) {
        console.log('values', values);
    }

    return <Modal
        trigger={<div className="op-icon">删除</div>}
        title="删除博客"
        onOk={onOk}
    
    >  
        确定要删除博客吗？
    </Modal>
}