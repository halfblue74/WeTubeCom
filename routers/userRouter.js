import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import {
  onlyPrivate
} from "../middlewares";

const userRouter = express.Router();

//routing 이란? 어플리케이션 서버에서 경로를 제어하는 것을 목적. 목적지 까지 갈 수 있는 여러 경로 중 한 가지 경로를 설정해 주는 과정

//userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;

//MVC 패턴이란? M(Module: 데이터), V(View: 템플릿), C(Controller: 함수)