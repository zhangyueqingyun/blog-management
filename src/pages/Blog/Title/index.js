import AddBlog from './blog/Add';
import EditBlog from './blog/Edit';
import DeleteBlog from './blog/Delete';

import AddCategory from './category/Add';
import EditCategory from './category/Edit';
import DeleteCategory from './category/Delete';

import {useMouse} from './hooks';

import { Space } from '@zhangyueqingyun_/react-components';

import './index.css';
export default function Title ({title, description, type, open}) {
    const {enter, leave, isOver} = useMouse();
    return (<div onMouseEnter={enter} onMouseLeave={leave}><Space interval={10}>
        <span className="category-tree-title">{title}</span>
        <span className="category-tree-actions">
            {isOver && <>
                {type === 'category' && <Space interval={5}>
                    <AddCategory />
                    <EditCategory title={title} />
                    <DeleteCategory title={title} />
                    <AddBlog />
                </Space>}
                {type === 'blog' && <Space interval={5}>
                    <EditBlog title={title} description={description} />
                    <DeleteBlog title={title} />
                </Space>}
            </>}
        </span>
    </Space></div>)
}