import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';
import BlogSideBarItem from './blogSidebar_item';


const BlogsideBar = ({ blogData, fetchBlogs, blog_id }) => {
    useEffect(() => {
        fetchBlogs()
    }, [fetchBlogs])

    var fetchedBlog = [];
    var allBlogs = blogData.Blogs;
    for (let i = 0; i < 6; i++) {
        fetchedBlog.push(allBlogs[i])
    }
    if (blogData.Blogs.length > 0 && blog_id) {
        var newSidebar = fetchedBlog.filter((blog) => {
            return blog.id !== blog_id
        })
    }

    return (
        <div className="card shadow">
            {newSidebar && newSidebar.map(blog => (
                <BlogSideBarItem blog={blog} />
            ))}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        blogData: state.blogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogsideBar);