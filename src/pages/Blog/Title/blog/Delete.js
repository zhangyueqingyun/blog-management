import { Modal } from '@zhangyueqingyun_/react-components';
import { DeleteFilled } from '@ant-design/icons';

export default function Delete({title}) {
    function onOk(values) {
        console.log('values', values);
    }

    return <Modal
        trigger={<DeleteFilled />}
        title="删除博客"
        onOk={onOk}
    
    >  
        确定要删除博客“{title}”吗？
    </Modal>
}