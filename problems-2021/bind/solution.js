Function.prototype.myBind = function(_this, ...args){
  return (...rest)=>{
    this.apply(_this, args.concat(rest))
  }
}
function realfn(x, y){
  console.log(this)
  console.log(x, y)
}
realfn.myBind({hello: 1}, 2)(3)