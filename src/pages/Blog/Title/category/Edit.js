import { ModalForm, Field, Toast } from '@zhangyueqingyun_/react-components';
import { EditOutlined } from '@ant-design/icons';

import { editCategory } from '../../../../services/blog';

import { useContext } from 'react';
import { TitleContext } from '../context';

const { Text } = Field;

export default function Edit() {
    const {id, title} = useContext(TitleContext);

    async function onOk(values) {
        await editCategory({...values, id});
        Toast.success('编辑成功');
        return true;
    }

    return <ModalForm
        trigger={<EditOutlined />}
        title="编辑分类"
        onOk={onOk}
    
    >  
        <Text name="name" defaultValue={title} label="标题" />
    </ModalForm>
}