/*
export const main = (req, res) => res.send("main");
export const search = (req, res) => res.send("search");

export const videos = (req, res) => res.send("videos");
export const upload = (req, res) => res.send("upload");
export const videoDetail = (req, res) => res.send("videoDetail");
export const editVideo = (req, res) => res.send("editVideo");
export const deleteVideo = (req, res) => res.send("deleteVideo");
*/

//render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체(다수의 데이터 추가 가능)
export const main = (req, res) => res.render("main", {pageTitle: "Main", potato: 1245});  
//export const search = (req, res) => res.render("search", {pageTitle: "Search"});

export const search = (req, res) => {
  /*
  console.log(req.query.term);
  res.render("search", {pageTitle: "Search"});
  */

  const {
    query: {term: searchingBy}
  } = req;
  res.render("search", {pageTitle: "Search", searchingBy}); //ES6 문법
  //res.render("search", {pageTitle: "Search", searchingBy:searchingBy}); //기존 문법
}

export const videos = (req, res) => res.render("videos", {pageTitle: "Videos"});
export const upload = (req, res) => res.render("upload", {pageTitle: "Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});