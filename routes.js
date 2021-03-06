// :의 의미는 유동적인 값으로 express에서 바뀔 수 있는 값으로 인식 됨.

// 전역(Global) 라우트 변수
const Main = "/";
const Join = "/join";
const Login = "/login";
const Logout = "/logout";
const Search = "/search";

// 유저(Users) 라우트 변수
const Users = "/users";
const User_Detail = "/:id/";
const Edit_Profile = "/edit-profile";
const Change_Password = "/change-password";
const Me = "/me";

// 동영상(Videos) 라우트 변수
const Videos = "/videos";
const Upload = "/upload";
const Video_Detail = "/:id";
const Edit_Video = "/:id/edit";
const Delete_Video = "/:id/delete";

// 깃허브 소셜 로그인
const Github = "/auth/github";
const Github_Callback = "/auth/github/callback";

// 페이스북 소셜 로그인
const Facebook = "/auth/facebook";
const Facebook_Callback = "/auth/facebook/callback";

// 오브젝트(object) 생성
const routes = {
  main: Main,
  join: Join,
  login: Login,
  logout: Logout,
  search: Search,

  users: Users,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return User_Detail;
    }
  },
  editProfile: Edit_Profile,
  changePassword: Change_Password,

  videos: Videos,
  upload: Upload,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return Video_Detail;
    }
  },
  editVideo: (id) => {
    if (id) {
      return `/videos/${id}/edit`;
    } else {
      return Edit_Video;
    }
  },

  deleteVideo: (id) => {
    if (id) {
      return `/videos/${id}/delete`;
    } else {
      return Delete_Video;
    }
  },
  me: Me,
  gitHub: Github,
  githubCallback: Github_Callback,
  facebook: Facebook,
  facebookCallback: Facebook_Callback
};

export default routes;