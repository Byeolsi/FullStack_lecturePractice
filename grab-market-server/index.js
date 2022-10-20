var http = require("http"); // 내장 모듈 (http)
var hostname = "127.0.0.1"; // 내부 아이피 (내 컴퓨터 주소)
var port = 8080;

const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;

  // 경로가 '/products'인 경우,
  if (path === "/products") {
    // 요청 방식이 'GET'인 경우,
    if (method === "GET") {
      // 응답 Header에 status code를 200, json 형태로 반환.
      res.writeHead(200, { "Content-Type": "applicaton/json" }); // status code, json 형태의 응답
      const products = JSON.stringify([
        {
          name: "농구공",
          price: 5000,
        },
      ]);
      // products를 응답으로 반환.
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다!");
    }
  } else {
    res.end("Good Bye");
  }
});

// 요청을 기다리고 있음을 의미.
server.listen(port, hostname);

console.log("grab market server on!");
