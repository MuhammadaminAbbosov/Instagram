import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AllPosts } from "./containers/AllPosts";

import { EditProfile } from "./containers/EditProfile";

import Home from "./containers/Home";
import { Like } from "./containers/Like";

import Login from "./containers/Login";
import LoginPage from "./containers/LoginPage";
import Profile from "./containers/Profile";
import Search from "./containers/Search";

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/search" element={<Search /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/user" element={<Home />} />
        <Route path="/user/search" element={<Search /> } />
        <Route path="/user/likes" element={<Like />} /> 
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/all-posts" element={<AllPosts />} />

      </Routes>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;
  height: 812px;
  overflow-y: hidden;
  background-color: white;
`