// import AddBlog from './blog/Add';
// import EditBlog from './blog/Edit';
// import DeleteBlog from './blog/Delete';

// import AddCategory from './category/Add';
// import EditCategory from './category/Edit';
// import DeleteCategory from './category/Delete';

import './index.css';
export default function Title ({title, description, type}) {
    return (<div 
        className="tree-title"
    >
        {title}
        {/* { type === 'category' && <>
            <AddCategory />
            <EditCategory  title={title} />
            <DeleteCategory  title={title} />
        </> }

        { type === 'blog' && <>
            <AddBlog />
            <EditBlog title={title} description={description} />
            <DeleteBlog  title={title} />
        </> } */}
    </div>)
}