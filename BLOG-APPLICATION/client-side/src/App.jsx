import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Blogs from './pages/Blogs';
import Header from './components/Header';
import Foooter from './components/footer';
import PrivateRoute from './components/privateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';


export default function App() {
  return ( 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path= "/" element={<Home/>} />
      <Route path= "/about" element={<About/>} />
      <Route path= "/signin" element={<SignIn/>} />
      <Route path= "/signup" element={<SignUp/>} />
      <Route element={<PrivateRoute />} >
      <Route path= "/dashboard" element={<Dashboard/>} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute />} >
      <Route path= "/createpost" element={<CreatePost/>} />
      <Route path='/updatepost/:postId' element={<UpdatePost />} />
      </Route>
      <Route path= '/blogs' element={<Blogs/>} />
      <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
    <Foooter />
      </BrowserRouter>
  );
}