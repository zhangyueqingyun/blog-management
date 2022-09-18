import React from 'react';
import { Card, Form, Button, Field} from '@zhangyueqingyun_/react-components';
import './index.css';

function Actions({getValues}) {
    function onClick() {
        console.log('getValues', getValues())
    }
    return <div className="actions">
        <Button onClick={onClick} type="primary">
            登录
        </Button>
    </div>
}

const {Text, Password} = Field;

export default function LoginPage () {
    return <div className="container"><div>
        <Card title="博客管理系统 - 登录"> 
            <Form actions={<Actions />}>
                <Text name="username" placeholder="用户名"/><br />
                <Password name="password" placeholder="密码"/><br />
            </Form>
        </Card></div>
    </div>
}