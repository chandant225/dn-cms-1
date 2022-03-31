import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';
import NoticeSidebar from '../components/noticeSidebar';

const NoticeDetailPage = () => {
    const [notice, setNotice] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const { id } = useParams();
    const [loading, setloading] = useState(true);
    useEffect(() => {
        axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/notices/${id}`)
            .then(res => {
                setNotice(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [id])
    if (notice) {
        axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${notice.featured_media}`)
            .then(res => {
                setImgUrl(res.data.source_url)
                setloading(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="BlogDetails-wrapper">
            <div style={{ paddingTop: "30px" }} className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        {loading ? (
                            <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                                <Loader />
                            </div>
                        ) : (
                            <div className="img-wrapper">
                                {notice && <img className="shadow" style={{ width: '100%', borderRadius: "12px" }} src={imgUrl} alt={notice.title.rendered} />}
                            </div>
                        )}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div style={{ paddingTop: "70px" }} className="panel">
                            {notice && <p style={{ fontSize: "24px" }}>{notice.acf.title}</p>}
                            {notice && <p style={{ textDecoration: "underline", fontWeight: "600" }}>posted By : {notice.acf.posted_by}</p>}
                            {notice && <p style={{ textDecoration: "underline", fontWeight: "600" }}>posted On : {notice.date}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-8">
                        <div style={{ padding: "24px" }} className="text-wrapper">
                            {notice && <p>{notice.acf.description}</p>}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <h3 style={{ backgroundColor: "#2196f3", padding: "10px", color: "white", borderRadius: "10px" }}>you might also like</h3>
                        {notice && <NoticeSidebar notice_id={notice.id} />}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NoticeDetailPage;
