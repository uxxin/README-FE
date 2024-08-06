import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/Store';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Main/Home';
import CreateNoticeRoom from './pages/Main/CreateNoticeRoom';
import MemberList from './pages/MemberList/MemberList';
import MyPage from './pages/MyPage/MyPage';
import DefaultProfileEdit from './pages/MyPage/DefaultProfileEdit';
import Main from './pages/Notice/Main';
import Details from './pages/Notice/Details';
import Mission from './pages/Notice/Check/Mission';
import Quiz from './pages/Notice/Check/Quiz';
import Results from './pages/Notice/Check/Results';
import MissionType from './pages/Notice/Write/MissionType';
import QuizType from './pages/Notice/Write/QuizType';
import NoticeRoomProfileEdit from './pages/MyPage/NoticeRoomProfileEdit';
import NoticeCheckRequests from './pages/Main/NoticeCheckRequests';
import Penalty from './pages/Main/Penalty';
import Search from './pages/Notice/Search';
import RoomEdit from './pages/Notice/RoomEdit';
import Invite from './pages/MemberList/Invite';
import Profile from './pages/MemberList/Profile';
import CheckRequests from './pages/Notice/CheckRequests';
import CheckListPage from './pages/MemberList/CheckListPage';
import Post from './pages/Notice/Write/Post';
import { RestApi } from './api/RestApi.js';
import CreateNoticeRoomSuccess from './pages/Main/CreateNoticeRoomSuccess.jsx';
import RoomMissionRequests from './pages/Main/RoomMissionRequests.jsx';

function App() {
  useEffect(() => {
    RestApi.instance.autoLogin().then(console.log);
  }, []);

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
              path="/notice-check-req/default"
              element={<RoomMissionRequests />}
            />
            {/* 여기 라우팅 주소 default에서 각 roomid로 수정해야함!!! */}
            <Route path="/penalty" element={<Penalty />} />

            {/* MemberList - 멤버 목록 */}
            <Route path="/member" element={<MemberList />} />
            <Route path="/member/invite" element={<Invite />} />
            <Route path="/member/profile/:nickname" element={<Profile />} />
            <Route path="/member/checklist" element={<CheckListPage />} />

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
            <Route path="/notice/check-req" element={<CheckRequests />} />
            <Route path="/notice/check-mission" element={<Mission />} />
            <Route path="/notice/check-quiz" element={<Quiz />} />
            <Route path="/notice/check-result" element={<Results />} />
            <Route path="/notice/write" element={<Post />} />
            <Route path="/notice/write/mission" element={<MissionType />} />
            <Route path="/notice/write/quiz" element={<QuizType />} />
            <Route path="/notice/edit" element={<RoomEdit />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
    //</div>
  );
}

export default App;
