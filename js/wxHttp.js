export function getHttp(url,json) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: json,
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res){
                resolve(res);
            },
            fill(e){
                reject(e);
            }
        })
    })
}
export function  getLogin(){  //获取openId
  return new Promise((resolve,reject)=>{
    wx.login({
      success(res){
        if(res.code){
          resolve(res);
        }
      },
      fail(){
        reject();
      }
    })
  })
}

