import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Dashboard from "./Components/Dashboard";
// import { AppContext } from "./Context/AppContext";
import Navbar from "./Components/Navbar/Navbar";
// import PageViews from './Pages/PageViews';
import AdminProfile from "./Pages/AdminComponents/AdminProfile";
// import PostUpload from './Pages/PostUpload';
// import Footer from './Components/Footer';
import Festival from "./Components/PostUpload/AboutDubai/Sections/Festival";
import AboutDubaiPage from "./Pages/PostUpload/AboutDubaiPage";
import Culture from "./Components/PostUpload/AboutDubai/Sections/Culture";
import Attractions from "./Components/PostUpload/AboutDubai/Sections/Attractions";
import InterestingFacts from "./Components/PostUpload/AboutDubai/Sections/InterestingFacts";
import NewsPage from "./Pages/PostUpload/NewsPage";
import MiddleEastNews from "./Components/PostUpload/News/MiddleEastNews";
import EntertainmentNews from "./Components/PostUpload/News/EntertainmentNews";
import DubaiNews from "./Components/PostUpload/News/DubaiNews";
import WorldNews from "./Components/PostUpload/News/WorldNews";
import BuisnessNews from "./Components/PostUpload/News/BuisnessNews";
import LegalNews from "./Components/PostUpload/News/LegalNews";
import SportsNews from "./Components/PostUpload/News/SportsNews";
import Login from "./Pages/User/Login";
import Register from "./Pages/User/Register";
import RemoveUser from "./Pages/User/RemoveUser";
import FestivalPage from "./Pages/PostUpload/About Dubai/FestivalPage";
import AttractionPage from "./Pages/PostUpload/About Dubai/AttractionPage";
import InterstingFactsPage from "./Pages/PostUpload/About Dubai/InterstingFactsPage";
import CulturePage from "./Pages/PostUpload/About Dubai/CulturePage";
import MiddleEastPage from "./Pages/PostUpload/News/MiddleEastPage";
import EntertainmentPage from "./Pages/PostUpload/News/EntertainmentPage";
import DubaiPage from "./Pages/PostUpload/News/DubaiPage";
import WorldPage from "./Pages/PostUpload/News/WorldPage";
import BuisnessPage from "./Pages/PostUpload/News/BuisnessPage";
import LegalPage from "./Pages/PostUpload/News/LegalPage";
import SportsPage from "./Pages/PostUpload/News/SportsPage";
import ResetPassword from "./Pages/User/ResetPassword";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Settings from "./Pages/AdminComponents/Settings";
// import { ToastContainer } from "react-toastify";
import ResetEmail from "./Pages/AdminComponents/ResetEmail";
import SiteInformation from "./Pages/Settings/SiteInformation";

function App() {
  // const { adminLogin } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="App">
      <div className="content">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/admindashboard" element={<Dashboard />} />
                  <Route path="/adminlogin" element={<Login />} />
                  <Route path="/adminregister" element={<Register />} />
                  <Route path="/adminProfile" element={<AdminProfile />} />
                  <Route path="/removeuser" element={<RemoveUser />} />
                  <Route path="/settings/generalsettings/siteinformation" element={<SiteInformation />} /> 
                  <Route
                    path="/reset-password/:id/:token"
                    element={<ResetPassword />}
                  />
                  <Route
                    path="/reset-email/:token"
                    element={<ResetEmail />}
                  />
                  <Route path="/settings" element={<Settings />} />

                  {/* About Dubai Menu */}
                  <Route path="/aboutdubaipage" element={<AboutDubaiPage />} />
                  <Route path="/festivalpage" element={<FestivalPage />} />
                  <Route path="/attractionpage" element={<AttractionPage />} />
                  <Route
                    path="/interestingfactpage"
                    element={<InterstingFactsPage />}
                  />
                  <Route path="/culturepage" element={<CulturePage />} />

                  <Route path="/festival" element={<Festival />} />
                  <Route
                    path="/interestingfact"
                    element={<InterestingFacts />}
                  />
                  <Route path="/culture" element={<Culture />} />
                  <Route path="/attraction" element={<Attractions />} />

                  {/* News Menu */}
                  <Route path="/newspage" element={<NewsPage />} />
                  <Route
                    path="/middleeastnewspage"
                    element={<MiddleEastPage />}
                  />
                  <Route
                    path="/entertainmentnewspage"
                    element={<EntertainmentPage />}
                  />
                  <Route path="/dubainewspage" element={<DubaiPage />} />
                  <Route path="/worldnewspage" element={<WorldPage />} />
                  <Route path="/buisnessnewspage" element={<BuisnessPage />} />
                  <Route path="/legalnewspage" element={<LegalPage />} />
                  <Route path="/sportsnewspage" element={<SportsPage />} />

                  <Route path="/middleeastnews" element={<MiddleEastNews />} />
                  <Route
                    path="/entertainmentnews"
                    element={<EntertainmentNews />}
                  />
                  <Route path="/dubainews" element={<DubaiNews />} />
                  <Route path="/worldnews" element={<WorldNews />} />
                  <Route path="/buisnessnews" element={<BuisnessNews />} />
                  <Route path="/legalnews" element={<LegalNews />} />
                  <Route path="/sportsnews" element={<SportsNews />} />
                </Routes>
              </div>
          {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
