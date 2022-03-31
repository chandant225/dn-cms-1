import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const NoticeItem = ({ notice, length, index }) => {
    // const [imgUrl, setimgUrl] = useState('');

    // axios.get(`http://localhost/reactWordpress/wp-json/wp/v2/media/${notice.featured_media}`)
    //     .then(res => {
    //         setimgUrl(res.data.source_url)
    //     }).catch(err => {
    //         console.log(err)
    //     })


    return (

        <tr>
            <th>{index + 1}</th>
            <td>{notice.title.rendered}</td>
            <td>{notice.date}</td>
            <td>{notice.acf.posted_by}</td>
            <td><Link to={`/notice/${notice.id}`} className="btn btn-danger">view notice</Link></td>
        </tr>
        // <div className="col-sm-12 col-md-6 col-lg-3">
        //     <div className="card">
        //         <img style={{ width: "100%", objectFit: "cover" }} src={imgUrl} className="card-img-top" alt={notice.title.rendered} />
        //         <div className="card-body">
        //             <h5 className="card-title">{notice.title.rendered}</h5>
        //             <p>posted on: {notice.date}</p>
        //             <p>posted by: {notice.acf.posted_by}</p>

        //             <Link to={`/notice/${notice.id}`} className="btn btn-primary">View notice</Link>
        //         </div>
        //     </div>
        // </div>
    );
}

export default NoticeItem;
