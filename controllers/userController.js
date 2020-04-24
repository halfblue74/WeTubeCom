/*
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");

export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password");
*/

//render 함수의 첫번째 인자는 템플릿, 두 번째 인자는 템플릿에 추가할 정보 객체
export const join = (req, res) => res.render("join", {pageTitle: "Join"});
export const login = (req, res) => res.render("login", {pageTitle: "Login"});
export const logout = (req, res) => res.render("logout", {pageTile: "Logout"});

export const users = (req, res) => res.render("users", {pageTitle: "Users"});
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "User Detail"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "Change Password"});