import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {

  res.locals.siteName = "WeTubeCom";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next(); //app.js에서 해당 미들웨어가 커넥션과 라우트들 즉 다른 미들웨어 사이에 있을 땐 next() 삽입
};

export const uploadVideo = multerVideo.single("videoFile"); //single은 하나의 파일만 업로드 가능