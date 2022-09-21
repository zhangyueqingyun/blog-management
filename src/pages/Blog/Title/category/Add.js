import { ModalForm, Field, Toast } from '@zhangyueqingyun_/react-components';
import { PlusCircleOutlined } from '@ant-design/icons'

import { useContext } from 'react';
import { TitleContext } from '../context';
import { addCategory } from '../../../../services/blog';

const { Text } = Field;

export default function Add() {
    const {id: parentId} = useContext(TitleContext);

    async function onOk(values) {
        await addCategory({...values, parentId});
        Toast.success('新建成功');
        return true;
    }

    return <ModalForm
        trigger={<PlusCircleOutlined />}
        title="新建分类"
        onOk={onOk}
    
    >
        <Text name="name" label="标题" />
    </ModalForm>
}