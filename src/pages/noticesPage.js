import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import NoticeItem from '../components/noticeItem';

import { fetchNotices } from '../redux/notice/noticeActions';

const NoticePage = ({ noticeData, fetchNotices }) => {
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetchNotices()
    }, [fetchNotices]);
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 2000)
    }, [])
    return (
        <div className="noticesPage-wrapper">
            <section style={{ height: "70px", background: "#d0404ef5" }} className="navbar-plate">

            </section>
            <center style={{ backgroundImage: 'url("background/pencils.jpg")', height: '130px', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: '-30rem' }} >
                <p style={{ fontSize: "3rem" }}>
                    Notices
                    </p>
            </center>
            <div className="container">

                {loading ? (
                    <div style={{ paddingTop: "50px" }}>
                        <Loader />
                    </div>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle">
                            <thead>
                                <tr>
                                    <th scope="col">sl.no</th>
                                    <th scope="col">notice title</th>
                                    <th scope="col">posted On:</th>
                                    <th scope="col">posted By: </th>
                                    <th>view details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noticeData && noticeData.Notices.map((notice, index) => (
                                    < NoticeItem notice={notice} index={index} length={noticeData.Notices.length} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        noticeData: state.notices
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchNotices: () => dispatch(fetchNotices())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoticePage);
