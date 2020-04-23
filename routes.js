// :의 의미는 유동적인 값으로 express에서 바뀔 수 있는 값으로 인식 됨.

//전역(Global) 라우트 변수
const Main = "/";
const Join = "/join";
const Login = "/login";
const Logout = "/logout";
const Search = "/search";

//유저(Users) 라우트 변수
const Users = "/users";
const User_Detail = "/:id/";
const Edit_Profile = "/edit-profile";
const Change_Password = "/change-password";

//동영상(Videos) 라우트 변수
const Videos = "/videos";
const Upload = "/upload";
const Video_Detail = "/:id";
const Edit_Video = "/:id/edit";
const Delete_Video = "/:id/Delete"

//오브젝트(object) 생성
const routes = {
  main: Main,
  join: Join,
  login: Login,
  logout: Logout,
  search: Search,

  users: Users,
  userDetail: User_Detail,
  editProfile: Edit_Profile,
  changePassword: Change_Password,
  
  videos: Videos,
  upload: Upload,
  videoDetail: Video_Detail,
  editVideo: Edit_Video,
  deleteVideo: Delete_Video
};

export default routes;