import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Homepage from './pages/homepage';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import BlogsPage from './pages/blogsPage';
import BlogDetails from './pages/detailsBlogPage';
import EventsPage from './pages/eventsPage';
import NoticesPage from './pages/noticesPage';
import GalleryPage from './pages/galleryPage';
import AlbumPage from './pages/albumPage';
import NoticeDetailPage from './pages/detailsnoticePage';
import AboutusPage from './pages/aboutusPage';
import FacilitiesPage from './pages/facilitiesPage';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/blogs">
          <BlogsPage />
        </Route>
        <Route exact path="/blog/:id">
          <BlogDetails />
        </Route>
        <Route path="/events">
          < EventsPage />
        </Route>
        <Route path="/aboutus">
          <AboutusPage />
        </Route>
        <Route path="/notices">
          < NoticesPage />
        </Route>
        <Route path="/notice/:id">
          < NoticeDetailPage />
        </Route>
        <Route path="/gallery">
          <GalleryPage />
        </Route>
        <Route path="/facilities">
          < FacilitiesPage />
        </Route>
        <Route path="/album">
          <AlbumPage />
        </Route>
        <Footer />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
