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
import RoomEdit from './pages/Notice/RoomEdit';
import Invite from './pages/MemberList/Invite';
import Profile from './pages/MemberList/Profile';
import Confirm from './pages/Notice/Confirm/Confirm.jsx';
import CreateNoticeRoomSuccess from './pages/Main/CreateNoticeRoomSuccess.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/Store.jsx';
import Solve from './pages/Notice/Check/Solve.jsx';
import RoomMissionRequests from './pages/Main/RoomMissionRequests.jsx';
import NoticeRoomPenaltys from './pages/Main/NoticeRoomPenaltys.jsx';
import EditPassword from './pages/MyPage/EditPassword.jsx';
import Write from './pages/Notice/Write/Write.jsx';
import NoticeRoomEntry from './pages/Auth/NoticeRoomEntry.jsx';
import ConfirmRequestApproval from './pages/Notice/Confirm/ConfirmRequestApproval.jsx';
import Layout from './components/layout/index.jsx';

function App() {
  return (
    //<div className="App">
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Auth - 로그인&회원가입 */}
              <Route path="/" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />

              {/* Home - 메인 */}
              <Route path="/home" element={<Home />} />
              <Route
                path="/create-notice-room"
                element={<CreateNoticeRoom />}
              />
              <Route
                path="/create-notice-room/success"
                element={<CreateNoticeRoomSuccess />}
              />
              <Route
                path="/notice-check-req"
                element={<NoticeCheckRequests />}
              />
              <Route
                path="/notice-check-req/:roomId"
                element={<RoomMissionRequests />}
              />
              <Route path="/penalty" element={<Penalty />} />
              <Route path="/penalty/:roomId" element={<NoticeRoomPenaltys />} />

              {/* MyPage - 마이페이지 */}
              <Route path="/my-page" element={<MyPage />} />
              <Route
                path="/my-page/default-edit"
                element={<DefaultProfileEdit />}
              />
              <Route
                path="/my-page/default-edit/password"
                element={<EditPassword />}
              />
              <Route
                path="/my-page/notice-edit"
                element={<NoticeRoomProfileEdit />}
              />

              {/* Notice - 공지 */}
              <Route path="/notice/:roomId" element={<Main />} />
              <Route path="/notice/:roomId/:postId" element={<Details />} />

              {/* Notice - 공지 - 일반멤버 */}
              <Route path="/notice/:roomId/:postId/solve" element={<Solve />} />
              <Route
                path="/notice/:roomId/solve/result"
                element={<Results />}
              />

              {/* Notice - 공지 - 운영진 */}
              <Route path="/notice/:roomId/write" element={<Write />} />
              <Route
                path="/notice/:roomId/confirm-list"
                element={<Confirm />}
              />
              <Route
                path="/notice/:roomId/confirm-list/approval" //임시 path입니다. api 연결하면서 /notice/:roomId/confirm-list/:postId 같이 변경해야할 것 같습니다.
                element={<ConfirmRequestApproval />}
              />
              <Route path="/notice/:roomId/edit" element={<RoomEdit />} />

              {/* MemberList - 멤버 리스트*/}
              <Route path="/notice/:roomId/member" element={<MemberList />} />
              <Route
                path="/notice/:roomId/member/:nickname"
                element={<Profile />}
              />
              <Route path="/notice/:roomId/invite" element={<Invite />} />

              {/* 공지방 입장 화면 확인용 코드입니다 추후 지우겠습니다. */}
              <Route path="/notice/entry" element={<NoticeRoomEntry />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
    //</div>
  );
}

export default App;
