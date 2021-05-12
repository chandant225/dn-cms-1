import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchNotices } from '../redux/notice/noticeActions';
import NoticeSidebarItem from './noticesidebar_item';



const NoticesideBar = ({ noticeData, fetchNotices, notice_id }) => {
    useEffect(() => {
        fetchNotices()
    }, [fetchNotices]);


    var allNotices = noticeData.Notices;
    var fetchedNotice = allNotices.slice(0, 4);

    // for (let i = 0; i < 2; i++) {
    //     fetchedNotice.push(allNotices[i])
    // }
    // if (noticeData.Notices.length > 0 && notice_id) {
    //     var newSidebar = fetchedNotice.filter((notice) => {
    //         return notice.id !== notice_id
    //     })
    // }

    return (
        <div className="card shadow">
            {fetchedNotice && fetchedNotice.map(notice => (
                < NoticeSidebarItem notice={notice} />
            ))}
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
export default connect(mapStateToProps, mapDispatchToProps)(NoticesideBar);