import { ModalForm, Field, Toast } from '@zhangyueqingyun_/react-components';
import { EditOutlined } from '@ant-design/icons';

import { editCategory } from '../../../../services/blog';

import { useContext } from 'react';
import { TitleContext } from '../context';
import { TreeContext } from '../../context';

const { Text } = Field;

export default function Edit() {
    const {data: {id, name, parentId}} = useContext(TitleContext);
    const {refetch} = useContext(TreeContext);
    
    async function onOk(values) {
        await editCategory({...values, id});
        Toast.success('编辑成功');
        refetch({key: parentId});
        return true;
    }

    return <ModalForm
        trigger={<EditOutlined />}
        title="编辑分类"
        onOk={onOk}
    
    >  
        <Text name="name" defaultValue={name} label="标题" />
    </ModalForm>
}