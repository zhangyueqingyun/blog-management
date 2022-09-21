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

export default function Title ({title, description, type, id}) {
    const {enter, leave, isOver} = useMouse();
    return (<TitleContext.Provider value={{title, description, id}}>
        <div onMouseEnter={enter} onMouseLeave={leave}><Space interval={10}>
            <span className="category-tree-title">{title}</span>
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
                </>}
            </span>
        </Space></div>
    </TitleContext.Provider>)
}