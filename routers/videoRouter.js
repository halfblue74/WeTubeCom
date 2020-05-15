import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "../controllers/videoController";

import {
  uploadVideo,
  onlyPrivate
} from "../middlewares";

const videoRouter = express.Router();

//업로드
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//영상 세부 정보
videoRouter.get(routes.videoDetail(), videoDetail);

//영상 세부 정보 수정
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//영상 삭제
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

//export는 해당 변수만 export 한다는 의미
//export default는 파일로 export 한다는 의미

export default videoRouter;