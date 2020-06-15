// CommomJS의 모듈 운용방식
// const express = require("express");
// const path = require("path");
// const logger = require("morgan");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

// ES6이상의 모듈 운용방식
import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";

require("dotenv").config();

// CommomJS의 모듈 운용방식
// const indexRouter = require("./routes").default;

// ES6이상의 모듈 운용방식
import indexRouter from "./routes/index";

const app = express();

// 세션 설정
const sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: `${process.env.COOKIE_SECRET}`,
  cookie: {
    httpOnly: true,
    secure: false,
  },
});

// 탬플릿과 탬플릿 엔진 설정
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

// express 서버의 포트 지정
app.set("port", process.env.PORT || 3000);

// express의 미들웨어 설정
// request에 대한 로그를 기록하는 미들웨어
app.use(logger("dev"));

// 정적 파일들을 접근할 수 있도록하는 미들웨어
app.use(express.static(path.join(__dirname, "public")));

// request의 본문을 분석해주는 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// request의 쿠키를 해석해주는 미들웨어
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(sessionMiddleware);

// flash 메세지 미들웨어. Session을 이용하기 때문에 항상 session 다음에 등록
app.use(flash());

// index 라우터
app.use("/", indexRouter);

// 404에러를 찾고 error handler로 인계하는 미들웨어
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

// 서버 설정
const server = app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중입니다.");
});

// CommomJS의 모듈 운용방식
// module.exports = app;

// ES6이상의 모듈 운용방식
export default app;
