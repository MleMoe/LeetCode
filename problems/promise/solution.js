class Promise{
  constructor(executor){
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined

    let resolve = (value)=>{
      if (this.status === 'pending'){
        this.status = 'fulfilled'
        this.value = value
      }
    }

    let reject = (reason)=>{
      if (this.status === 'pending'){
        this.status = 'rejected'
        this.reason = reason
      }
    }
    try {
      executor(resolve, reject)
    }
    catch (err){
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    setTimeout(()=>{
      if (this.status === 'fulfilled'){
        onFulfilled(this.value)
      }
      else if(this.status === 'rejected'){
        onRejected(this.reason)
      }
    }, 0)
  }
}
/**
 * 实现Promise.all
 * @param promises 
 * @returns 
 */
Promise.all = (promises)=>{
  if (!Array.isArray(promises)){
    return Promise.reject(new TypeError('args must be an array'))
  }
  let len = promises.length
  let results = new Array(len)
  let num = 0
  return new Promise((resolve, reject)=>{
    for (let i=0; i<len; i++){
      Promise.resolve(promises[i]).then(res=>{
        results[i] = res
        num+=1
        if (num===len){
          return resolve(results)
        }
      }, 
      reason=>{
        return reject(reason)
      }
      )
    }
  })
}