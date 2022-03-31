import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './loader';

const BlogPageItem = ({ blog }) => {
    const [imgUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setloading] = useState(true);
    const getImageUrl = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${blog.featured_media}`);
    const getauthor = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/users/${blog.author}`);
    Promise.all([getImageUrl, getauthor]).then(res => {

        setImageUrl(res[0].data.source_url);
        setAuthor(res[1].data.name);
        setloading(false)
    })
    return (
        <div style={{ paddingTop: "15px" }} className="col-sm-12 col-md-6 col-lg-3">
            <div className="card" style={{ backgroundColor: "#607d8b", color: "#f5f5f5", height: "360px" }}>
                {loading ? (
                    <div style={{ paddingTop: "38px" }} className="loader-wrapper">
                        <Loader />
                    </div>

                ) : (
                    <div style={{ height: "150px", overflow: "hidden" }} className="img-wrapper">
                        <img style={{ width: "100%", objectFit: "cover" }} src={imgUrl} alt={blog.title.rendered} />
                    </div>
                )}

                <div style={{ position: "relative" }} className="card-body">
                    <p style={{ paddingTop: "5px", fontWeight: "600" }}>posted By : {author}</p>
                    <p style={{ position: "absolute", top: "-13px", left: "20%", padding: "5px", backgroundColor: "#ff9800", color: "white", fontSize: "14px", fontWeight: "600", borderRadius: "12px" }}>{blog.date}</p>
                    <h5 className="card-title">{blog.acf.title}</h5>
                    {/* <p className="card-text">{blog.acf.excerpt}</p> */}
                </div>
                <Link to={`/blog/${blog.id}`} className="btn btn-danger">view post</Link>
            </div>
        </div>
    );
}

export default BlogPageItem;