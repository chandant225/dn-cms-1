import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogSideBarItem = ({ blog }) => {
    const [imgUrl, setImgUrl] = useState('');

    axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${blog.featured_media}`)
        .then((res) => {
            setImgUrl(res.data.source_url)
        })
        .catch((err) => {
            console.log(err)
        })

    return (
        <Link style={{ textDecoration: "none" }} to={`/blog/${blog.id}`}>
            <div style={{ padding: "5px 0px 5px 0px", overflow: "hidden", height: "5rem" }} className="row">

                <div className="col-4">
                    <div className="img-wrapper">
                        <img style={{ width: "100%", objectFit: "cover" }} src={imgUrl} alt={blog.title.rendered} />
                    </div>
                </div>
                <div className="col-8">
                    {blog && <p>{blog.acf.title}</p>}
                </div>

            </div>
            <hr></hr>

        </Link>

    );
}

export default BlogSideBarItem;