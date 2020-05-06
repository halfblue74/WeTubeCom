import routes from "../routes"; //default export 시 import 문법
import Video from "../models/Video";

//render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체(다수의 데이터 추가 가능)
//export const main = (req, res) => res.render("main", {pageTitle: "Main"});  
/*
export const main = (req, res) => {
  res.render("main", {pageTitle: "Main", videos});
}
*/

export const main = async(req, res) => {  //async,await는 비동기 처리 패턴 문법
  try {
    const videos = await Video.find({});  //await는 async안에서만 사용 가능(성공, 실패 여부와 상관없이 해당 과정이 끝날 때 까지 기다림)
    res.render("main", {pageTitle: "Main", videos});
  } catch (error) {
    console.log(error);
    res.render("main", {pageTitle: "Main", videos: [] });
  }
}


//export const search = (req, res) => res.render("search", {pageTitle: "Search"});
export const search = (req, res) => {
  
  const {
    query: {term: searchingBy}
  } = req;
  res.render("search", {pageTitle: "Search", searchingBy, videos}); //ES6 문법
  //res.render("search", {pageTitle: "Search", searchingBy:searchingBy}); //기존 문법
}

export const getUpload = (req, res) => {
  res.render("upload", {pageTitle: "Upload"});
}

export const postUpload = (req, res) => {
  //const {
  //  body: {file, title, description}
  //} = req;

  const { body  } = req;
  console.log(body);

  //To Do: 비디오 업로드 및 저장 처리
  res.render("upload", {pageTitle: "Upload"});
  //res.redirect(routes.videoDetail(8520111));
}


/*
export const postUpload = async (req, res) => {
  const {
    body: {title, description},
    file: {path}
  } = req;

  const newVideo = await Video.create({
    fileUrl:  path,
    title,
    description
  });

  res.redirect(routes.videoDetail(newVideo.id));
}
*/

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});