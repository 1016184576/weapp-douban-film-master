let ajax = 1;

let $http = function(flag){
  return new Promise((resolve,reject)=>{
    if(flag){
      resolve('请求成功');
    }else{
      resolve('请求失败');
    }
  })
}