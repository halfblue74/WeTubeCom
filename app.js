//node.js 설치 시 node.js에 포함되어 npm(node packaged manager)도 자동 설치
//npm 이란? node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램
//npm 실행 시에는 필히 package.json과 같은 경로에서 실행 해야 함. 만약 다른 경로에서 실행 시 package.json을 해당 경로에 재 생성 됨.
//npm 통해 다운로드 또는 설치(express 프레임워크 등) 한 것들은 node_modules에서 확인 가능

//package.json 파일만 있으면 타 개발자와 협업 시 node_modules를 압축해 전해 주거나 따로 설치 할 필요 없음.
//index.js와 package.json만 있으면 터미널(콘솔)을 이용해 npm install을 입력하면 package.json 내의 depenency를 참조해 해당 버전의 express를 자동 설치

//package.json > dependency 항목: 프로젝트 실행 시 필요한 모듈, 패키지, 코어 내역
//package.json > devDependencies 항목: 프로젝트 실행과 무관한 설치 모듈, 패키지, 코어 내역

//github를 설정 하면 기본적으로 node_modules 내의 모든 모듈이 github로 관리 될 대상으로 잡혀 node_module을 ignore(무시 또는 비활성화 정도의 의미인 듯) 해야함
//ignore 하는 이유는 node_modules내의 모듈들이 각각 모두 처리 될려고 하므로 너무 무거워짐(웹서버 퍼포먼스 관점 인 듯)
//또한 내가 만든 코드만 업로드(github) 할 수 있어 관리가 용이함(.gitlgnore 생성 후 node_modules 입력 후 저장하면 node_modules를 배재함)

//https://github.com/github/gitignore/blob/master/Node.gitignore

//위 URL 내의 내용을 복사 한 후 .gitlgnore에 붙여넣기(node.js관련 gitlgnore 표준 설정)
//그리고 package-lock.json을 gitlgnore에 추가(package에 대한 보안과 관련 되어 있으므로 필히 추가 할 것)

//github 이용법은 2.3 강의 참조

//터미널 명령어(Express 서버 시작): npm start (package.json 내의 scripts > start 항목에서 제어)
//터미널 명령어(Express 서버 종료): Ctrl + C

//Babel(http://babeljs.io)이란? 최신의 자바스크립트 코드를 무난한 예전의 코드로 변환
//터미널 명령어(Babel 설치): npm install @babel/node > npm install @babel/preset-env > .babelrc에 생성 후 설정 추가 > npm install @babel/core

//const : ES6(ECMAScript: ECMA 국제 기구 표준 스크립트) 기능

//nodemon 이란? node.js에 기반한 웹 애플리케이션을 개발 할 때, 파일에 변경사항이 발생 했을 때 자동으로 애플리케이션이 재 실행 되도록 도와주는 패키지
//nodemon 설 치 코드를 수정하고 저장 할 때 변경 된 코드로 애플리케이션이 자동으로 실행 됨.
//터미널 명령어(nodemon 설치): npm install nodemon -D

//middleware 란? 페이지 호출 시 완료 하기 전까지 실행 할 수 있게 만든 함수
//사용예시: 유저 로그인 체크, 파일 업로드, 접속 로그 작성 등

//morgan(middleware) 이란? http request에 대해서 log를 남겨주는 일종의 logger
//터미널 명령어(morgan 설치): npm install morgan

//helmet(middleware) 이란? http 헤더 설정을 바꿔주는 보안 모듈
//터미널 명령어(helmet 설치): npm install helmet

//body-parser(middleware) 이란? Post Request Data의 body로 부터 파라미터 추출(json, urlencoded, text 등)
//터미널 명령어(body-parser 설치): npm install body-parser

//cookie-parser(middleware) 이란? request 객체에 cookies 속성이 부여 되며 요청된 쿠키를 편리하게 추출(ex. cookie에 유저 정보를 저장해 session에 이용)
//터미널 명령어(cookie-parser 설치): npm install cookie-parser

//Pug 란? Node Express Template Engine으로 쉽게 설명하자면 View Engine다.
//터미널 명령어(Pug 설치): npm install pug

//const express = require('express'); //node_modules 내의 express 폴더 호출(require 또는 import)
import express from "express"; //express.js 프레임워크 호출
import morgan from "morgan"; //morgan 호출
import helmet from "helmet"; //helmet 호출
import cookieParser from "cookie-parser"; //cookie-parser 호출
import bodyParser from "body-parser"; //body-parser 호출
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import {
  localsMiddleware
} from "./middlewares";
import routes from "./routes"; //설치 된 모듈과는 다르게 export 된 것이므로 호출 형식이 다름.
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import "./passport";

const app = express(); //const로 선언한 변수 app에 express를 실행 후 담음.

const CokieStore = MongoStore(session);

/*
const handleListening = () => console.log('Listening on: http://localhost:{port}');

//express의 모든 connection을 다루는 모든 것에는 response,request,next를 가짐
//아래 handleMain, hadleProfile 함수와 같이 마지막에 실행 되는 함수에서는 next를 제외
const handleMain = (req, res) => res.send("Hello!! From Wetube.Com!!!");

const handleProfile = (req, res) => res.send("You are on my Profile");
*/

/*
const betweenMain = (req, res, next) => { //미들웨어 함수
  console.log("Between"); //터미널 콘솔에 표기 됨으로 실행 확인(페이지에서 확인 시에는 res.send를 이용하면 될 듯)
  next(); //다음 middleware를 호출
}
*/

/*
const handleEndConn = (req, res, next) => {
  res.send("not happening");
}
*/

// 실행 순위에 유의 할 것. 미들웨어의 경우 위치에 따른 실행이므로 영향을 받는 함수와 그렇지 못하는 함수 발생
// 예를 들어 app.get("/", handleMain) 아래 위치 시킨다면 handleMain 함수 실행 시 middleware는 실행 되지 않음

// app.use(betweenMain); //middleware 전역 실행

// morgan tiny 옵션: 페이지 접속 시 콘솔 log 표기(ex. GET /profile 304 - - 3.030 ms)
// morgan combined 옵션: 페이지 접속 시 콘솔 log 표기(ex. "GET /profile HTTP/1.1" 304 - "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36)
// morgan common 옵션: 페이지 접속 시 콘솔 log 표기(ex. GET /profile HTTP/1.1)
// morgan dev 옵션: 페이지 접속 시 콘솔 log 표기(ex. GET /profile 304 3.490 ms - -)

app.use(helmet()); //helmet(middleware) 전역 실행
app.set("view engine", "pug"); //view engine 설정값을 pug로 변경
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json()); //body-parser 옵션: urlencoded(Html), json 등
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); //post 전송 관련
app.use(morgan("dev")); //morgan(middleware) 전역 실행
// secret: 무작위 문자열로서 쿠키에 들어 있는 session ID를 암호화
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CokieStore({
      mongooseConnection: mongoose.connection
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

/*
app.get("/", handleMain); //웹브라우저에서 / 호출 시 handleMain 함수 실행
//app.get("/", betweenMain, handleMain); //middleware 지역 실행
//app.get("/", handleEndConn, handleMain); //handleEndConn 함수로 연결 끓기 실행

app.get("/profile", handleProfile); //웹브라우저에서 /profile 호출 시 handleProfile 함수 실행
*/

app.use(routes.main, globalRouter); //app.use는 /user로 접속 시 router 전체를 사용 하겠다는 의미(기본적으로 index로 호출)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; //파일 호출(import) 시 app object 제공

// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function (req, res) {
//  res.send('hello world');
//});