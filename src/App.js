import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
<<<<<<< HEAD
import { EditProfile } from "./containers/EditProfile";
=======
import Home from "./containers/Home";
import { Like } from "./containers/Like";
>>>>>>> cc545ccab4e20b024a8075060baae2be19ed3185
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
<<<<<<< HEAD
        <Route path="/search" element={<Search /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
=======
        <Route path="/user" element={<Home />} />
        <Route path="/user/search" element={<Search /> } />
        <Route path="/user/likes" element={<Like />} /> 
        <Route path="/user/profile" element={<Profile />} />
>>>>>>> cc545ccab4e20b024a8075060baae2be19ed3185
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