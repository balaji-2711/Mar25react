import BucketMove from "./Projects/Project1";
import Home from "./Home";
import ExpandComponent from "./Projects/Project2";
import InfiniteScroll from "./Projects/Project3";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const data = [
    {
      name: "Applications",
      children: [
        {
          name: "adam",
          children: [
            { name: "Desktop", children: [] },
            { name: "Documents", children: [] },
            { name: "Downloads", children: [] },
            { name: "Music", children: [] },
            { name: "Pictures", children: [] },
          ],
        },
        {
          name: "Guest",
          children: [
            { name: "Guest 01", children: [] },
            { name: "Guest 02", children: [] },
            { name: "Guest 03", children: [] },
            { name: "Guest 04", children: [] },
          ],
        },
        {
          name: "Shared",
          children: [
            { name: "Shared 01", children: [] },
            { name: "Shared 01", children: [] },
            { name: "Shared 01", children: [] },
            { name: "Shared 01", children: [] },
          ],
        },
        {
          name: "Thing1",
          children: [
            { name: "Subchild 1.2.1", children: [] },
            { name: "Subchild 1.2.2", children: [] },
          ],
        },
        {
          name: "Thing2",
          children: [
            { name: "Subchild 1.2.1", children: [] },
            { name: "Subchild 1.2.2", children: [] },
          ],
        },
      ],
    },
    {
      name: "Users",
      children: [
        {
          name: "Child 2.1",
          children: [
            { name: "Subchild 2.1.1", children: [] },
            { name: "Subchild 2.1.2", children: [] },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/bucket" element={<BucketMove />} />
          <Route
            path="/hierarchicalList"
            element={<ExpandComponent items={data} />}
          />
          <Route path="/infiniteScroll" element={<InfiniteScroll />} />

          <Route path="/Home" element={<Home />} />

          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
