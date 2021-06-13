import wepy from 'wepy'
export default function fetch(option) {
  const BASEURL = 'http://127.0.0.1:8888/api/public/v1'
  return wepy.request({
    url: BASEURL + option.url,
    data: option.data || {},
    method: option.method || 'GET',
    header: option.header || {}
  })
}
