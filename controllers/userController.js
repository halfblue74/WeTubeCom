import passport from "passport";
import routes from "../routes"; //default export 시 import 문법
import User from "../models/User";

//render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체
//export const login = (req, res) => res.render("join", {pageTitle: "Join"});
export const getJoin = (req, res) => {
  res.render("join", {
    pageTitle: "Join",
  });
};

export const postJoin = async (req, res, next) => {
  //console.log(req.body);
  const {
    body: {
      name,
      email,
      password,
      password2
    },
  } = req;

  if (password !== password2) {
    res.status(400); //200: 정상, 204: 내용없음, 403: 접속금지, 400: 잘못된 요청 -- 참조URL: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
    res.render("join", {
      pageTitle: "Join",
    });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.main);
    }
  }
};

//export const login = (req, res) => res.render("login", {pageTitle: "Login"});
export const getLogin = (req, res) => {
  res.render("login", {
    pageTitle: "Login",
  });
};

export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.main,
});

// 깃허브 소셜 로그인 콜백 처리 함수(Passport Strategy 항목 참조)
export const githubLogin = passport.authenticate("github");

// 사용하지 않는 파라미터의 경우 순서가 당겨지는 걸 방지 하기 위해 _나 __로 처리
export const githubLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: {
      id,
      avatar_url: avatarUrl,
      name,
      email
    },
  } = profile;
  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl,
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res) => {
  res.redirect(routes.main);
};

// 페이스북 소셜 로그인 콜백 처리 함수(Passport Strategy 항목 참조)
export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.main);
};

//export const logout = (req, res) => res.render("logout", {pageTile: "Logout"});
export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.main);
};

export const getMe = (req, res) => {
  res.render("userDetail", {
    pagetTitle: "User Detail",
    user: req.user
  });
};

export const users = (req, res) => {
  res.render("users", {
    pageTitle: "Users",
  });
};

export const userDetail = async (req, res) => {
  const {
    params: {
      id
    }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", {
      pageTitle: "User Detail",
      user
    });
  } catch (error) {
    res.redirect(routes.main);
  }
};

export const editProfile = (req, res) => {
  res.render("editProfile", {
    pageTitle: "Edit Profile",
  });
};

export const changePassword = (req, res) => {
  res.render("changePassword", {
    pageTitle: "Change Password",
  });
};