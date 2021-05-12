import React from 'react';
import Counter from '../components/counter';
import Features from '../components/features';
import Featureblogs from '../components/feature_blogs';
import FeaturesBlogs2 from '../components/features_blog2';
import NoticeModal from '../components/noticemodal';
import Tabslider from '../components/tabSlider';
import Testimonials from '../components/testimonials';
import Wave from '../components/wave';
import Welcome from '../components/welcome';

const Homepage = () => {

    return (
        <div className="homepage-wrapper">
            <Tabslider />
            <Wave />
            <Welcome />
            <Features />
            <Counter />
            <NoticeModal />
            <Featureblogs />
            <FeaturesBlogs2 />
            <Testimonials />

        </div>
    );
}
export default Homepage;
