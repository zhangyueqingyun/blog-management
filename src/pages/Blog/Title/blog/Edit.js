import { ModalForm, Field, Toast } from '@zhangyueqingyun_/react-components';
import { EditFilled } from '@ant-design/icons';

import { editBlog } from '../../../../services/blog';

import { useContext } from 'react';
import { TitleContext } from '../context';

const { Text, TextArea } = Field;

export default function Edit() {
    const {id, title, description} = useContext(TitleContext);

    async function onOk(values) {
        await editBlog({...values, id});
        Toast.success('编辑成功');
        return true;
    }

    return <ModalForm
        trigger={<EditFilled />}
        title="编辑博客"
        onOk={onOk}
    >  
        <Text name="title" defaultValue={title} label="博客名称" />
        <TextArea name="description" defaultValue={description} label="博客描述" />
    </ModalForm>
}