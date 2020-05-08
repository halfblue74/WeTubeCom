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

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router(); 

//업로드
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//영상 세부 정보
videoRouter.get(routes.videoDetail(), videoDetail);

//영상 세부 정보 수정
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//영상 삭제
videoRouter.get(routes.deleteVideo(), deleteVideo);

//export는 해당 변수만 export 한다는 의미
//export default는 파일로 export 한다는 의미

export default videoRouter;