import { Modal, Toast } from '@zhangyueqingyun_/react-components';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteCategory } from '../../../../services/blog';

import { useContext } from 'react';
import { TitleContext } from '../context';
import { TreeContext } from '../../context';

export default function Delete() {
    const {data: {id, name, parentId}} = useContext(TitleContext);
    const {refetch} = useContext(TreeContext);
    
    async function onOk(values) {
        await deleteCategory(id);
        Toast.success('删除成功');
        refetch({key: parentId});
        return true;
    }

    return <Modal
        trigger={<DeleteOutlined />}
        title="删除分类"
        onOk={onOk}
    >  
        确定要删除分类“{name}”吗？
    </Modal>
}