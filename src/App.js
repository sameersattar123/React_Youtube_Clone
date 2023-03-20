import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import VideosDetails from "./Components/VideosDetails";
import ChannelDetails from "./Components/ChannelDetails";
import SearchFeed from "./Components/SearchFeed";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideosDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
