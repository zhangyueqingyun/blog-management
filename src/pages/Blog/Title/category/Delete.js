import { Modal } from '@zhangyueqingyun_/react-components';

export default function Delete() {
    function onOk(values) {
        console.log('values', values);
    }

    return <Modal
        trigger={<div className="op-icon">删除文件夹</div>}
        title="删除文件夹"
        onOk={onOk}
    
    >  
        确定要删除文件夹吗？
    </Modal>
}