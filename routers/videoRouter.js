import express from "express";
import routes from "../routes";
import { 
  getUpload,
  postUpload,
  videoDetail, 
  editVideo, 
  deleteVideo 
} from "../controllers/videoController";

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router(); 

videoRouter.get(routes.upload, getUpload);
//videoRouter.post(routes.upload, postUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

//export는 해당 변수만 export 한다는 의미
//export default는 파일로 export 한다는 의미

export default videoRouter;