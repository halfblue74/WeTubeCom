import routes from "../routes";  //default export 시 import 문법


//render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체
//export const login = (req, res) => res.render("join", {pageTitle: "Join"});
export const getJoin = (req, res) => {
  res.render("join", {pageTitle: "Join"});
}  

export const postJoin = (req, res) => {

  //console.log(req.body);

  const {
    body: { name, email, password, password2}
  } = req;

  if (password !== password2) {
    res.status(400);  //200: 정상, 204: 내용없음, 403: 접속금지, 400: 잘못된 요청 -- 참조URL: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
    res.render("join", { pageTitle: "Join" });    
  } else {
    //To Do: Register User(사용자 등록)
    //To Do: Log in User(사용자 로그인)
    res.redirect(routes.main);
  }
}

//export const login = (req, res) => res.render("login", {pageTitle: "Login"});
export const getLogin = (req, res) => {
  res.render("login", {pageTitle: "Login"});
}

export const postLogin = (req, res) => {
  res.redirect(routes.main);
}

//export const logout = (req, res) => res.render("logout", {pageTile: "Logout"});
export const logout = (req, res) => {
  //To Do: 로그 아웃 처리
  res.redirect(routes.main);
}

export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});