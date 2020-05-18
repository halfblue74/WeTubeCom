import express from "express";
import passport from "passport";
import routes from "../routes";
import {
  main,
  search
} from "../controllers/videoController";
//import { join, login, logout } from "../controllers/userController";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  githubLogin,
  postGithubLogin,
  facebookLogin,
  postFacebookLogin,
  getMe,
  logout
} from "../controllers/userController";
import {
  onlyPublic,
  onlyPrivate
} from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.main, main);
globalRouter.get(routes.search, search);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.get(routes.join, onlyPublic, postLogin);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.get(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", {
    failureRedirect: "/login"
  }),
  postGithubLogin
);

globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", {
    failureRedirect: "/login"
  }),
  postFacebookLogin
);

globalRouter.get(routes.me, getMe);

export default globalRouter;