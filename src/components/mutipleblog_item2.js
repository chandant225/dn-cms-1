import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './loader';

const MultipleBlogItem2 = ({ blog }) => {
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
        <div className="col-12">
            {loading ? (
                <div style={{ paddingTop: "10px" }} className="loader-wrapper">
                    < Loader />
                </div>
            ) : (
                <Link style={{ textDecoration: 'none' }} to={`/blog/${blog.id}`}>
                    <div className="row">
                        <div className="col-4">
                            <div className="right-img-wrapper">
                                <img style={{ width: '100%' }} src={imgUrl} alt={blog.title.rendered} />
                            </div>
                        </div>
                        <div className="col-8">
                            <div style={{ position: "relative" }} className="text-wrapper">
                                <p className="date">{blog.date}</p>
                                <p className="header">{blog.acf.title}</p>
                                <Link style={{ position: "absolute", right: "45px", bottom: '-40px' }} className="btn btn-danger">view more</Link>
                                {/* <p className="excerpt">{blog.acf.excerpt}</p> */}
                            </div>
                        </div>
                    </div >
                </Link>
            )}
        </div>
    );
}

export default MultipleBlogItem2;
