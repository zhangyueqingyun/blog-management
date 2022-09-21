import { Modal, Toast } from '@zhangyueqingyun_/react-components';
import { DeleteFilled } from '@ant-design/icons';
import { deleteBlog } from '../../../../services/blog'

import { useContext } from 'react';
import { TitleContext } from '../context';

export default function Delete() {
    const {id, title} = useContext(TitleContext);

    async function onOk(values) {
        await deleteBlog(id);
        Toast.success('删除成功');
        return true;
    }

    return <Modal
        trigger={<DeleteFilled />}
        title="删除博客"
        onOk={onOk}
    >  
        确定要删除博客“{title}”吗？
    </Modal>
}