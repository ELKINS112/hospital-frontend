export function saveToken(token) {
  localStorage.setItem("jwt_token", token);
}

export function getToken() {
  return localStorage.getItem("jwt_token");
}

export function saveUserRole(role) {
  localStorage.setItem("user_role", role);
}

export function getUserRole() {
  return localStorage.getItem("user_role");
}

export function logout() {
  localStorage.removeItem("jwt_token");
  localStorage.removeItem("user_role");
}