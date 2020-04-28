import express from "express";
import routes from "../routes";
import { main, search } from "../controllers/videoController";
//import { join, login, logout } from "../controllers/userController";
import { getJoin, postJoin, getLogin, postLogin, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.main, main);
globalRouter.get(routes.search, search);

//globalRouter.get(routes.join, join);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

//globalRouter.get(routes.login, login);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

export default globalRouter;