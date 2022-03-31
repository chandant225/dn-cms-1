import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const MembersItem = ({ member }) => {
    const [loading, setloading] = useState(true);
    const [imgUrl, setImgUrl] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 4000)
    }, [])

    axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${member.featured_media}`)
        .then(res => {
            setImgUrl(res.data.source_url)
        })
        .catch(err => {
            console.log(err)
        })
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div style={{ height: "24rem" }} className="card">
                <div style={{ height: "10rem", overflow: "hidden" }} className="imgimgUrl-wrapper">
                    {loading ? <p>loading</p> : (
                        < img style={{ width: "100%", height: "15rem" }} src={imgUrl} alt={member.title.rendered} />
                    )}
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        {member.acf.name}
                    </h5>
                    <p>{member.acf.faculty}</p>
                    <p className="card-description">
                        {member.acf.extra_info}
                    </p>
                </div>
                <div style={{ margin: "auto" }} className="other-links">
                    <ul className="pagination">
                        <li className="page-item">
                            <Link style={{ fontSize: "26px" }} className="page-link"><i className="fab fa-facebook-square"></i></Link>
                        </li>
                        <li className="page-item">
                            <Link style={{ fontSize: "26px" }} className="page-link"><i className="fab fa-linkedin"></i></Link>
                        </li>
                        <li className="page-item">
                            <Link style={{ fontSize: "26px" }} className="page-link"><i className="fab fa-twitter-square"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MembersItem
