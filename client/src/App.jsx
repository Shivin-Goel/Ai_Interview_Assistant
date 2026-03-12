import React, { useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import InterviewPage from "./pages/InterviewPage";
import InterviewHistory from "./pages/InterviewHistory";
import InterviewReport from "./pages/InterviewReport";

export const ServerUrl = "http://localhost:3000";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true });
        dispatch(setUserData(result.data));
      } catch (error) {
        console.error("Failed to get current user:", error);
        dispatch(setUserData(null));
      }
    }
    getUser();
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage />} />
      <Route path='/history' element={<InterviewHistory />} />
      <Route path='/report/:id' element={<InterviewReport />} />

    </Routes>
  );
};

export default App;