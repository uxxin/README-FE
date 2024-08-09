import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Main/Home';
import CreateNoticeRoom from './pages/Main/CreateNoticeRoom';
import MemberList from './pages/MemberList/MemberList';
import MyPage from './pages/MyPage/MyPage';
import DefaultProfileEdit from './pages/MyPage/DefaultProfileEdit';
import Main from './pages/Notice/Main';
import Details from './pages/Notice/Details';
import Results from './pages/Notice/Check/Results';
import NoticeRoomProfileEdit from './pages/MyPage/NoticeRoomProfileEdit';
import NoticeCheckRequests from './pages/Main/NoticeCheckRequests';
import Penalty from './pages/Main/Penalty';
import Search from './pages/Notice/Search';
import RoomEdit from './pages/Notice/RoomEdit';
import Invite from './pages/MemberList/Invite';
import Profile from './pages/MemberList/Profile';
import Confirmation from './pages/Notice/Confirmation';
import CheckListPage from './pages/MemberList/CheckListPage';
import CreateNoticeRoomSuccess from './pages/Main/CreateNoticeRoomSuccess.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/Store.jsx';
import Solve from './pages/Notice/Check/Solve.jsx';
import RoomMissionRequests from './pages/Main/RoomMissionRequests.jsx';
import NoticeRoomPenaltys from './pages/Main/NoticeRoomPenaltys.jsx';
import Write from './pages/Notice/Write/Write.jsx';
import NoticeListPage from './pages/MemberList/NoticeListPage.jsx';
import AcceptancePage from './pages/MemberList/AcceptancePage.jsx';


function App() {
  return (
    //<div className="App">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            {/* Auth - 로그인&회원가입 */}
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Home - 메인 */}
            <Route path="/home" element={<Home />} />
            <Route path="/create-notice-room" element={<CreateNoticeRoom />} />
            <Route
              path="/create-notice-room/success"
              element={<CreateNoticeRoomSuccess />}
            />
            <Route path="/notice-check-req" element={<NoticeCheckRequests />} />
            <Route
              path="/notice-check-req/:roomId"
              element={<RoomMissionRequests />}
            />
            <Route path="/penalty" element={<Penalty />} />
            <Route path="/penalty/:roomId" element={<NoticeRoomPenaltys />} />

            {/* MemberList - 멤버 목록 */}
            <Route path="/member" element={<MemberList />} />
            <Route path="/member/invite" element={<Invite />} />
            <Route path="/member/profile/:nickname" element={<Profile />} />
            <Route path="/member/checklist" element={<CheckListPage />} />
            <Route path="/member/acceptance" element={<AcceptancePage />} />
            <Route path="/member/noticelist" element={<NoticeListPage />} />

            

            {/* MyPage - 마이페이지 */}
            <Route path="/my-page" element={<MyPage />} />
            <Route
              path="/my-page/default-edit"
              element={<DefaultProfileEdit />}
            />
            <Route
              path="/my-page/notice-edit"
              element={<NoticeRoomProfileEdit />}
            />

            {/* Notice - 공지 */}
            <Route path="/notice" element={<Main />} />
            <Route path="/notice/search" element={<Search />} />
            <Route path="/notice/details" element={<Details />} />
            <Route path="/notice/confirm" element={<Confirmation />} />
            <Route path="/notice/solve" element={<Solve />} />
            <Route path="/notice/solve/result" element={<Results />} />
            <Route path="/notice/write" element={<Write />} />
            <Route path="/notice/edit" element={<RoomEdit />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
    //</div>
  );
}

export default App;
