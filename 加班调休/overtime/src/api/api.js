import ajax from './request'

export const getData = (data) => {
  return ajax({
    url:'/api/list',
    method:'post',
    data
  })
}