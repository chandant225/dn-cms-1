import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';
import './features_blogs2.scss';
import MultipleBlogItem2 from './mutipleblog_item2';
import SingleBlogitem2 from './singleBlog_item2';

const FeaturesBlogs2 = ({ BlogData, fetchBlogs }) => {

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs])
    const firstone = BlogData.Blogs.slice(0, 1);
    var allBlogs = BlogData.Blogs;
    var fetchedBlog = [];
    for (let i = 0; i < 5; i++) {
        fetchedBlog.push(allBlogs[i])
    }
    if (fetchedBlog) {
        var fourBlog = fetchedBlog.slice(1);
    }
    return (
        <div className="feature-blogs-wrapper">
            <div className="container">
                {BlogData.Blogs.length === 0 ? (<h3>Don't have any post yet</h3>): (
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <center>
                                <p style={{fontSize:"3rem"}}>Latest News</p>
                            </center>
                            {firstone && firstone.map((blog) => (
                                <SingleBlogitem2 blog={blog} firstone={firstone} />
                            ))}
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div style={{paddingTop:"3rem"}} className="row">
                                {fourBlog && fourBlog.map(blog => (
                                    <MultipleBlogItem2 blog={blog} />
                                 ))}   
                               </div>
                        </div>
                    </div>
                )}
               
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        BlogData: state.blogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBlogs: () => dispatch(fetchBlogs())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeaturesBlogs2);



