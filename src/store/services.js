import axios from "axios"
const jSONPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const tstdanielopenapiAPI = axios.create({
  baseURL: "https://tst-daniel-openapi--12356-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function jsonplaceholder_post_posts_read(action) {
  return jSONPlaceholder.post(`/posts`, { data: action.data })
}
function jsonplaceholder_delete_posts_read(action) {
  return jSONPlaceholder.delete(`/posts`)
}
function api_v1_customtext_list(action) {
  return tstdanielopenapiAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return tstdanielopenapiAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return tstdanielopenapiAPI.put(`/api/v1/customtext/${action.id}/`, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return tstdanielopenapiAPI.patch(`/api/v1/customtext/${action.id}/`, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return tstdanielopenapiAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return tstdanielopenapiAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return tstdanielopenapiAPI.put(`/api/v1/homepage/${action.id}/`, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return tstdanielopenapiAPI.patch(`/api/v1/homepage/${action.id}/`, {
    data: action.data
  })
}
function api_v1_login_create(action) {
  return tstdanielopenapiAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(action) {
  return tstdanielopenapiAPI.post(`/api/v1/signup/`, { data: action.data })
}
function rest_auth_login_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/login/`, { data: action.data })
}
function rest_auth_logout_list(action) {
  return tstdanielopenapiAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/password/change/`, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/password/reset/`, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/password/reset/confirm/`, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/registration/`, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return tstdanielopenapiAPI.post(`/rest-auth/registration/verify-email/`, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return tstdanielopenapiAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return tstdanielopenapiAPI.put(`/rest-auth/user/`, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return tstdanielopenapiAPI.patch(`/rest-auth/user/`, { data: action.data })
}
export const apiService = {
  jsonplaceholder_post_posts_read,
  jsonplaceholder_delete_posts_read,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
