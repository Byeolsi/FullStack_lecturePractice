const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

// json 형식을 사용하겠음을 의미.
app.use(express.json());
// cors를 통해 모든 브라우저가 내 서버에 요청할 수 있게 됨.
app.use(cors());

// '/products'라는 경로에 'GET'으로 요청이 온 경우 콜백 함수가 실행됨.
app.get("/products", (req, res) => {
  res.send("업로드된 상품들입니다.");
});
// '/products'라는 경로에 'POST'로 요청이 온 경우 콜백 함수가 실행됨.
app.post("/products", (req, res) => {
  res.send("상품이 등록되었습니다.");
});

// 요청 대기 상태
app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
});
