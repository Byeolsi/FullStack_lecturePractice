import "./App.css";
// import MainPageComponent from "./main/index.js";
// index.js 생략 가능. main 폴더 하나만 작성해도 자동으로 index.js를 찾음.
import MainPageComponent from "./main";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";

function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route path={"/*"} element={<MainPageComponent />} />
          <Route path={"/products/:id"} element={<ProductPage />} />
          <Route path={"/upload/*"} element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
