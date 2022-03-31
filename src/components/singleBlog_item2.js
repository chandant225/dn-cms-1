import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './loader';


const SingleBlogitem2 = ({ blog }) => {
    const [imgUrl, setImageUrl] = useState('');
    // const [author, setAuthor] = useState('');
    const [loading, setloading] = useState(true);
    const getImageUrl = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${blog.featured_media}`);
    const getauthor = axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/users/${blog.author}`);
    Promise.all([getImageUrl, getauthor]).then(res => {
        setImageUrl(res[0].data.source_url);
        // setAuthor(res[1].data.name);
        setloading(false);
    })
    return (
        <div style={{ position: "relative" }} className="card shadow">
            <Link to={`/blog/${blog.id}`}>
                {loading ? (
                    < Loader />
                ) : (
                    <div className="left-img-wrapper">
                        <img style={{ width: '100%' }} src={imgUrl} alt={blog.title.rendered} />
                    </div>
                )}
                <div style={{ position: 'absolute', bottom: '0', padding: '0px 0px 20px 10px', color: 'white' }} className="text-wrapper">
                    <p style={{ fontWeight: '500' }}>{blog.date}</p>
                    <p style={{ fontSize: "24px", fontWeight: '500' }}>{blog.acf.title}</p>
                    <Link className="btn btn-danger">view more</Link>
                </div>
            </Link>
        </div>
    )
}

export default SingleBlogitem2
