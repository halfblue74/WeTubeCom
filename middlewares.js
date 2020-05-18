import multer from "multer";
import routes from "./routes";

const multerVideo = multer({
  dest: "uploads/videos/",
});

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTubeCom";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  // console.log(req.user);
  next(); // app.js에서 해당 미들웨어가 커넥션과 라우트들 즉 다른 미들웨어 사이에 있을 땐 next() 삽입
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.main);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.main);
  }
}

export const uploadVideo = multerVideo.single("videoFile"); //single은 하나의 파일만 업로드 가능