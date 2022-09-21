import { ModalForm, Field, Toast } from '@zhangyueqingyun_/react-components';
import { EditFilled } from '@ant-design/icons';

import { editBlog } from '../../../../services/blog';

import { useContext } from 'react';
import { TitleContext } from '../context';
import { TreeContext } from '../../context';

const { Text, TextArea } = Field;

export default function Edit() {
    const {data: {id, title, description, categoryId}} = useContext(TitleContext);
    const {refetch} = useContext(TreeContext);
    
    async function onOk(values) {
        await editBlog({...values, id});
        Toast.success('编辑成功');
        refetch({key: categoryId});

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