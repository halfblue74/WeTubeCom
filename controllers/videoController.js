import routes from "../routes"; // default export 시 import 문법
import Video from "../models/Video";

// render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체(다수의 데이터 추가 가능)
// export const main = (req, res) => res.render("main", {pageTitle: "Main"});
/*
export const main = (req, res) => {
  res.render("main", {pageTitle: "Main", videos});
}
*/

export const main = async (req, res) => {
  // async,await는 비동기 처리 패턴 문법
  try {
    // await는 async안에서만 사용 가능(성공, 실패 여부와 상관없이 해당 과정이 끝날 때 까지 기다림)
    // const videos = await Video.find({});
    const videos = await Video.find({}).sort({ _id: -1 }); // 최신 업로드 영상 내림차순 처리(-1은 올림차순을 내림 차순으로 변경)
    res.render("main", { pageTitle: "Main", videos });
  } catch (error) {
    // console.log(error);
    res.render("main", { pageTitle: "Main", videos: [] });
  }
};

// 검색 처리
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;

  let videos = []; // 배열선언

  try {
    // 입력값과 완벽히 일치하는 값만 검색
    // videos = await Video.find({ title: searchingBy });

    // 입력값을 포함 하는 모든 값을 검색 mongoose에 regex를 이용-정규표현식(regular expression) 사용
    // options: i는 입력값을 대소문자를 구분하지 않음
    videos = await Video.find({
      title: { $regex: searchingBy, $options: "i" },
    });
  } catch (error) {
    console.log(error);
  }

  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

/*
export const postUpload = (req, res) => {
  // const {
  //   body: {file, title, description}
  // } = req;

  const { body, file  } = req;
  console.log(body, file);

  // To Do: 비디오 업로드 및 저장 처리
  res.render("upload", {pageTitle: "Upload"});
  // res.redirect(routes.videoDetail(8520111));
};
*/

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  // console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

// export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    // console.log(video);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    // console.log(error);
    res.redirect(routes.main);
  }
};

// 기존 영상 정보 호출(제목 등)
export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.main);
  }
};

// 기존 영상 정보 수정(영상 파일 정보를 제외한 정보만)
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    // console.log(title, description);
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    // console.log(error);
    res.redirect(routes.main);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    // URL로 부터 ID 받아오기
    params: { id },
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id });
  } catch (error) {
    // console.log(error);
  }
  res.redirect(routes.main);
};
