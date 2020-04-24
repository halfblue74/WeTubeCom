import routes from "./routes";

export const localsMiddleware = (req, res, next) => {

  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  next(); //app.js에서 해당 미들웨어가 커넥션과 라우트들 즉 다른 미들웨어 사이에 있을 땐 next() 삽입
};