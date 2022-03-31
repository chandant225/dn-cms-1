import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const NoticeSidebarItem = ({ notice }) => {
    const [imgUrl, setImgUrl] = useState('');

    axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${notice.featured_media}`)
        .then((res) => {
            setImgUrl(res.data.source_url)
        })
        .catch((err) => {
            console.log(err)
        })

    return (
        <Link style={{ textDecoration: "none" }} to={`/notice/${notice.id}`}>
            <div style={{ padding: "5px 0px 5px 0px", overflow: "hidden", height: "5rem" }} className="row">

                <div className="col-4">
                    <div className="img-wrapper">
                        <img style={{ width: "100%", objectFit: "cover" }} src={imgUrl} alt={notice.title.rendered} />
                    </div>
                </div>
                <div className="col-8">
                    {notice && <p>{notice.acf.title}</p>}
                </div>

            </div>
            <hr></hr>

        </Link>

    );
}

export default NoticeSidebarItem
