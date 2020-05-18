import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy()); // Strategy: 로그인 방식(페이북, 구글 소셜 로그인 등)

passport.use(
  new GithubStrategy({
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy({
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback
  )
);

// serializeUser: 쿠키에 전해주는 정보
// 어떤 field가 쿠키에 포함될 것 인지 알려주는 역활
// serializeUser()은 user.id만 담김
passport.serializeUser(User.serializeUser());
// deserializeUser: 쿠키에 담김 정보를 어떻게 사용자로 전환하는 지를 의미
passport.deserializeUser(User.deserializeUser());