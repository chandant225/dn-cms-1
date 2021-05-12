import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogsideBar from '../components/blogSidebar';
import Loader from '../components/loader';

const BlogDetails = () => {
    const [Blog, setBlog] = useState('');
    const [imgUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const { id } = useParams();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/posts/${id}`)
            .then(res => {
                setBlog(res.data)
            })
            .catch(err => console.log(err))
    }, [id])
    if (Blog) {
        const getImageUrl = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${Blog.featured_media}`);
        const getauthor = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/users/${Blog.author}`);
        Promise.all([getImageUrl, getauthor]).then(res => {
            setImageUrl(res[0].data.source_url);
            setAuthor(res[1].data.name);
            setloading(false)
        })
    }

    return (
        <div className="BlogDetails-wrapper">
            <section style={{ height: "70px", background: "#d0404ef5" }} className="navbar-plate">

            </section>
            <div style={{ paddingTop: "30px" }} className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        {loading ? (
                            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                                <Loader />
                            </div>
                        ) : (
                            <div className="img-wrapper">
                                {Blog && <img className="shadow" style={{ width: '100%', borderRadius: "12px" }} src={imgUrl} alt={Blog.title.rendered} />}
                            </div>
                        )}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div style={{ paddingTop: "70px" }} className="panel">
                            {Blog && <p style={{ fontSize: "24px" }}>{Blog.acf.title}</p>}
                            {Blog && <p style={{ textDecoration: "underline", fontWeight: "600" }}>posted By : {author}</p>}
                            {Blog && <p style={{ textDecoration: "underline", fontWeight: "600" }}>posted On : {Blog.date}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div style={{ padding: "24px" }} className="text-wrapper">
                            {Blog && <div dangerouslySetInnerHTML={{ __html: Blog.content.rendered }}></div>}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <h3 className="bg-danger" style={{ padding: "10px", color: "white", borderRadius: "10px" }}>you might also like</h3>
                        {Blog && <BlogsideBar blog_id={Blog.id} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
