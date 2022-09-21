import { Space } from '@zhangyueqingyun_/react-components';

import AddBlog from './blog/Add';
import EditBlog from './blog/Edit';
import DeleteBlog from './blog/Delete';

import AddCategory from './category/Add';
import EditCategory from './category/Edit';
import DeleteCategory from './category/Delete';

import { useMouse } from './hooks';

import { TitleContext } from './context';

import './index.css';

export default function Title ({data, refetch}) {
    const {enter, leave, isOver} = useMouse();
    const {title, name, type} = data;
    return (<TitleContext.Provider value={{data, refetch}}>
        <div onMouseEnter={enter} onMouseLeave={leave}><Space interval={10}>
            <span className="category-tree-title">{title || name}</span>
            <span className="category-tree-actions">
                {isOver && <>
                    {type === 'category' && <Space interval={5}>
                        <AddCategory />
                        <EditCategory />
                        <DeleteCategory />
                        <AddBlog />
                    </Space>}
                    {type === 'blog' && <Space interval={5}>
                        <EditBlog />
                        <DeleteBlog />
                    </Space>}
                    {type === 'all' && <Space interval={5}>
                        <AddCategory />
                    </Space>}
                </>}
            </span>
        </Space></div>
    </TitleContext.Provider>)
}