import React from 'react';
import { Card, Form, Button, Field} from '@zhangyueqingyun_/react-components';
import {login} from '../../services/login';
import { SESSION_STORAGE } from '../../utils/storage';
import './index.css';

function Actions({getValues}) {
    async function onClick() {
        const user = getValues();
        const {access_token} = await login(user);
        console.log('access_tion', access_token)
        sessionStorage[SESSION_STORAGE.ACCESS_TOKEN] = access_token;
        // message.success('登陆成功');
        // window.location = '/blog';
        return
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