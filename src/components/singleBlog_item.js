import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './loader';

const BlogItem = ({ blog }) => {
    const [imgUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [loading, setloading] = useState(true);
    const getImageUrl = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${blog.featured_media}`);
    const getauthor = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/users/${blog.author}`);
    Promise.all([getImageUrl, getauthor]).then(res => {
        setImageUrl(res[0].data.source_url);
        setAuthor(res[1].data.name);
        setloading(false);
    })

    return (
        <div>
            {loading ? (
                <div style={{ paddingTop: "38px" }}>
                    <Loader />
                </div>
            ) : (
                <div style={{ height: '320px', overflow: "hidden" }} className="img-wrapper">
                    <img style={{ width: '100%', objectFit: "cover" }} src={imgUrl} alt={blog.title.rendered} />
                </div>
            )}
            <div style={{ position: "relative" }} className="card-body">
                <div>
                    <p style={{ paddingTop: "5px", fontWeight: "600" }}>Posted By : {author}</p>
                    <p style={{ position: "absolute", top: "-20px", fontSize: '16px', left: '25%', borderRadius: "12px", backgroundColor: "#ff9800", padding: "6px", color: "white", fontWeight: "600" }}>{blog.date}</p>
                    <h5 className="card-title">{blog.acf.title}</h5>
                    <p className="card-text">{blog.acf.excerpt}</p>
                    <Link style={{ width: "100%" }} to={`/blog/${blog.id}`} className="btn btn-danger">view post</Link>
                </div>

            </div>
        </div>
    );
}

export default BlogItem;
