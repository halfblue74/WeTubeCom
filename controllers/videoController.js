import { videos } from "../db";
import routes from "../routes"; //default export 시 import 문법

//render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체(다수의 데이터 추가 가능)
//export const main = (req, res) => res.render("main", {pageTitle: "Main"});  
export const main = (req, res) => {
  res.render("main", {pageTitle: "Main", videos});
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
  const {
    body: {file, title, description}
  } = req;

  //To Do: 비디오 업로드 및 저장 처리
  res.redirect(routes.videoDetail(8520111));
}

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});