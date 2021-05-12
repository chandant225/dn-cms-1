import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../redux/blog/blogActions';
import MultipleBlog from './multipleBlog_item';
import BlogItem from './singleBlog_item';

const FeaturesBlogs = ({ BlogData, fetchBlogs }) => {

    useEffect(() => {
        fetchBlogs()
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
        <div>
            <div style={{ backgroundColor: "#fbd1d1" }} className="features-blogs-wrapper">
                <div className="container">
                    <center>
                        <p style={{ fontSize: "3rem" }}>Features-Blogs</p>
                    </center>
                    {BlogData.Blogs.length === 0 ? (
                        <center>
                            <h2>Don't have any post yet</h2>
                        </center>
                    ) : (
                        <div className="row">

                            <div className="col-sm-12 col-md-6 col-lg-6">

                                <div className="card shadow" style={{
                                    width: '30rem', height: '39rem',
                                    marginTop: '90px', backgroundColor: "#607d8b", color: "#f5f5f5"
                                }}>
                                    {firstone && firstone.map((blog) => (
                                        < BlogItem blog={blog} firstone={firstone} />
                                    ))}

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6">
                                <div className="row">
                                    {fourBlog && fourBlog.map(blog => (
                                        < MultipleBlog blog={blog} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FeaturesBlogs);



