import { Modal } from '@zhangyueqingyun_/react-components';
import { DeleteOutlined } from '@ant-design/icons';

export default function Delete({title}) {
    function onOk(values) {
        console.log('values', values);
    }

    return <Modal
        trigger={<DeleteOutlined />}
        title="删除分类"
        onOk={onOk}
    
    >  
        确定要删除分类“{title}”吗？
    </Modal>
}