import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Main/Home';
import CreateNoticeRoom from './pages/Main/CreateNoticeRoom';
import NoticeRoomCreated from './pages/Main/NoticeRoomCreated';
import MemberList from './pages/MemberList/MemberList';
import Main from './pages/Notice/Main';
import Details from './pages/Notice/Details';
import Join from './pages/Notice/Check/Join';
import Quiz from './pages/Notice/Check/Quiz';
import Results from './pages/Notice/Check/Results';
import JoinType from './pages/Notice/Write/JoinType';
import QuizType from './pages/Notice/Write/QuizType';

function App() {
  return (
    // <div className="App">
    <Router>
      <Routes>
        {/* Auth - 로그인&회원가입 */}
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Main - 메인 */}
        <Route path="/home" element={<Home />} />
        <Route path="/create-notice-room" element={<CreateNoticeRoom />} />
        <Route path="/notice-room-created" element={<NoticeRoomCreated />} />

        {/* MemberList - 멤버 목록 */}
        <Route path="/member-list" element={<MemberList />} />

        {/* Notice - 공지 */}
        <Route path="/notice" element={<Main />} />
        <Route path="/notice/details" element={<Details />} />
        <Route path="/notice/check-join" element={<Join />} />
        <Route path="/notice/check-quiz" element={<Quiz />} />
        <Route path="/notice/check-result" element={<Results />} />
        <Route path="/notice/write-join" element={<JoinType />} />
        <Route path="/notice/write-quiz" element={<QuizType />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
