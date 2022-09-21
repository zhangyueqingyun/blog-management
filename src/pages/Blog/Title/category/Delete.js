import { Modal, Toast } from '@zhangyueqingyun_/react-components';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteCategory } from '../../../../services/blog';

import { useContext } from 'react';
import { TitleContext } from '../context';

export default function Delete() {
    const {id, title} = useContext(TitleContext);

    async function onOk(values) {
        await deleteCategory(id);
        Toast.success('删除成功');
        return true;
    }

    return <Modal
        trigger={<DeleteOutlined />}
        title="删除分类"
        onOk={onOk}
    
    >  
        确定要删除分类“{title}”吗？
    </Modal>
}