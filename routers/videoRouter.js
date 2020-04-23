import express from "express";
import routes from "../routes";
import { 
  videos, 
  upload, 
  videoDetail, 
  editVideo, 
  deleteVideo 
} from "../controllers/videoController";

const videoRouter = express.Router(); 

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);


//export는 해당 변수만 export 한다는 의미
//export default는 파일로 export 한다는 의미

export default videoRouter;