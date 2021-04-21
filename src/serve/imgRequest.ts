import request from '../tool/serve'

export function getImg(url: string) {
   return request({
       url
   })
}