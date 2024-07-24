import Home from './pages/Home'
import './App.css';
import {Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import VerifyEmail from './pages/VerifyEmail';
import MyProfile from './components/core/Dashboard/MyProfile';
import About from './pages/About'
import LoadingBar from "react-top-loading-bar";
import { setProgress } from "./slices/loadingBarSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Error from "./pages/Error"
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from './pages/Dashboard';
import Settings from './components/core/Dashboard/Settings';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
import Cart from './components/core/Dashboard/Cart/index';
import { ACCOUNT_TYPE } from "./utils/constants";
import AddCourse from "./components/core/Dashboard/AddCourse/index";
import MyCourses from ".//components/core/Dashboard/MyCourses/MyCourses"
import EditCourse from "./components/core/Dashboard/EditCourse.jsx/EditCourse";
import InstructorDashboard from './components/core/Dashboard/InstructorDashboard/InstructorDashboard';
import Catalog from './pages/Catalog';
import Footer from './components/common/Footer';
import { RiWifiOffLine } from "react-icons/ri";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./pages/ContactUs";
import CourseDetails from "./pages/CourseDetails";
import SearchCourse from "./pages/SearchCourse";
import AdminPannel from "./components/core/Dashboard/AdminPannel";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import PurchaseHistory from "./components/core/Dashboard/PurchaseHistory";
import UpdatePassword from './pages/UpdatePassword';

function App() {
  const user = useSelector((state) => state.profile.user);
  const progress = useSelector((state) => state.loadingBar);
  const dispatch = useDispatch();
  return (
      <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <LoadingBar
          color="#FFD60A"
          height={1.4}
          progress={progress}
          onLoaderFinished={() => dispatch(setProgress(0))}
        />
        <Navbar setProgress={setProgress}></Navbar>
        {!navigator.onLine && (
          <div className="bg-red-500 flex text-white text-center p-2 bg-richblack-300 justify-center gap-2 items-center">
            <RiWifiOffLine size={22} />
            Please check your internet connection.
            <button
              className="ml-2 bg-richblack-500 rounded-md p-1 px-2 text-white"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        )}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/catalog/:catalog" element={<Catalog/>} />
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/verify-email' element={<VerifyEmail/>}/>
          <Route path='/my-profile' element={<MyProfile/>}/>
          <Route path='/about' element={<About/>}/>
          <Route
          path="update-password/:id"
          element={
              <UpdatePassword/>
          }
        />  


          <Route path="/contact" element={<ContactUs />} />

          <Route path="/courses/:courseId" element={<CourseDetails />} />

          <Route path="/search/:searchQuery" element={<SearchCourse />} />
          
          
          <Route 
            element={
              <PrivateRoute>
                <Dashboard/>
              </PrivateRoute>
            }
          >
              <Route path="dashboard/my-profile" element={<MyProfile />} />
              <Route path="dashboard/settings" element={<Settings/>} />
              

              {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                <>
                  <Route path="dashboard/cart" element={<Cart />} />
                  <Route path="dashboard/enrolled-courses" element={<EnrolledCourses/>} />
                  <Route path="dashboard/purchase-history" element={<PurchaseHistory />}
              />
                </>
              )}

              {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                <>
                  <Route path="dashboard/add-course" element={<AddCourse />} />
                  <Route path="dashboard/my-courses" element={<MyCourses />} />
                  <Route
                    path="dashboard/edit-course/:courseId"
                    element={<EditCourse />}
                  />
                  <Route
                    path="dashboard/instructor"
                    element={<InstructorDashboard />}
                  />
                </>
          )}

          {user?.accountType === ACCOUNT_TYPE.ADMIN && (
            <>
              <Route path="dashboard/admin-panel" element={<AdminPannel />} />
            </>
          )}
          </Route>

          <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses/view-course/:courseId/section/:sectionId/sub-section/:subsectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>    

      <Route path="*" element={<Home/>} />
    
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
