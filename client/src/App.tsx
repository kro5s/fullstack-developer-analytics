import {Navigate, Route, Routes} from "react-router-dom";
import RootRoute from "./routes/RootRoute.tsx";
import Layout from "./components/Layout/Layout.tsx";
import CommonRoute from "./routes/CommonRoute.tsx";
import RelevanceRoute from "./routes/RelevanceRoute.tsx";
import GeographyRoute from "./routes/GeographyRoute.tsx";
import SkillsRoute from "./routes/SkillsRoute.tsx";
import LatestRoute from "./routes/LatestRoute.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<RootRoute />} />
        <Route path="/common" element={<CommonRoute />} />
        <Route path="/relevance" element={<RelevanceRoute />} />
        <Route path="/geography" element={<GeographyRoute />} />
        <Route path="/skills" element={<SkillsRoute />} />
        <Route path="/latest" element={<LatestRoute />} />
      </Route>
      <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  );
}

export default App
