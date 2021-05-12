import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import BlogPageItem from '../components/BlogsPage_items';
import Loader from '../components/loader';
import Pagination from '../components/pagination';
import { fetchBlogs } from '../redux/blog/blogActions';


const BlogsPage = ({ BlogData, fetchBlogs }) => {
    const [currentPage, setcurrentPage] = useState(1);
    const [loading, setloading] = useState(true);
    const [postsPerPage] = useState(5);
    useEffect(() => {
        fetchBlogs()
    }, [fetchBlogs]);
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 4000)
    }, []);
    const allBlogs = BlogData.Blogs;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPagePosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);
    console.log(BlogData)
    const paginate = (pageNumber) => setcurrentPage(pageNumber);
    return (
        <div className="blogsPage-wrapper">
            <section style={{ height: "70px", background: "#d0404ef5" }} className="navbar-plate">

            </section>
            <center style={{ backgroundImage: 'url("background/pencils.jpg")', height: '130px', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: '-30rem' }} >
                <p style={{ fontSize: "3rem" }}>
                    Blogs
                    </p>
            </center>
            <div className="container">
                {loading ? (
                    <div style={{ paddingTop: "40px" }}>
                        <Loader />
                    </div>

                ) : (
                    <div className="row">
                        {!BlogData.loading && currentPagePosts.map(blog => (
                            <BlogPageItem blog={blog} />
                        ))}
                    </div>
                )}
            </div>
            <div className="container">
                < Pagination paginate={paginate} postPerPage={postsPerPage} totalPosts={BlogData.Blogs.length} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogsPage)