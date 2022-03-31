import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../redux/event/eventActions';
import { connect } from 'react-redux';
import Loader from '../components/loader';
const EventPage = ({ eventData, fetchEvents }) => {
    const [loading, setloading] = useState(true);
    const [visibleNumber, setVisibleNumber] = useState(2);
    const [moreLoading, setmoreLoading] = useState(false);

    const LoadMore = () => {
        setmoreLoading(true)
        setVisibleNumber((prevValue) => prevValue + 2);
        setmoreLoading(false);

    }

    useEffect(() => {
        fetchEvents();

    }, [fetchEvents]);
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3000)
    }, []);
    const allEvents = eventData.Events.slice(0, visibleNumber);
    var oddRight = [];
    var evenLeft = [];
    for (let i = 0; i < allEvents.length; i++) {
        var index = allEvents.indexOf(allEvents[i]);
        if (index % 2 === 0) {

            evenLeft.push(allEvents[i])
        } else {
            oddRight.push(allEvents[i])

        }
    }
    return (
        <div className="eventsPage-wrapper" style={{ backgroundColor: "pink", position: "relative" }}>
            <section style={{ height: "70px", background: "#d0404ef5" }} className="navbar-plate">

            </section>
            <center style={{ backgroundImage: 'url("background/pencils.jpg")', height: '130px', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: '-30rem' }} >
                <p style={{ fontSize: "3rem" }}>
                    Events
                    </p>
            </center>
            {loading ? (
                <div style={{ paddingTop: "50px" }}>
                    <Loader />
                </div>

            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="timeline left">
                                {evenLeft && evenLeft.map((data) => (
                                    <div className="Container left">
                                        <div className="content">
                                            <h2>Event: {data.title.rendered}</h2>
                                            <p>event Date: {data.acf.date}</p>
                                            <p>event Location: {data.acf.location}</p>
                                            <p>more Info : {data.acf.more_info}</p>
                                            <p> posted On:{data.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="timeline right">
                                {oddRight && oddRight.map((data) => (
                                    <div className="Container right">
                                        <div className="content">
                                            <h2>Event: {data.title.rendered}</h2>
                                            <p>event Date: {data.acf.date}</p>
                                            <p>event Location: {data.acf.location}</p>
                                            <p>more Info : {data.acf.more_info}</p>
                                            <p> posted On:{data.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <center>
                        {moreLoading ? <p>loading</p> : (
                            <button className="btn btn-danger" onClick={LoadMore}>LoadMore</button>
                        )}

                    </center>
                </div>
            )}

            {/* <div className="timeline">
                {evenLeft && evenLeft.map((data) => (
                    <div className="Container left">
                        <div className="content">
                            <h2>{data.title.rendered}</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </div>
                    </div>
                ))}

                {oddRight && oddRight.map((data) => (
                    <div className="Container right">
                        <div className="content">
                            <h2>{data.title.rendered}</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}
const mapStateToProps = state => {
    return {
        eventData: state.events
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(fetchEvents())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventPage);