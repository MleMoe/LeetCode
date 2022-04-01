class Observer{
  constructor(){
    this.events = new Map()
  }
  on(eventName, callback){
    if (this.events.has(eventName)){
      this.events.get(eventName).push(callback)
    }
    else {
      this.events.set(eventName, [callback])
    }
  }
  emit(eventName, ...args){
    if (this.events.has(eventName)){
      this.events.get(eventName).forEach(fn => {
        fn.call(null, ...args)
      })
    }
  }
  off(eventName){
    if (this.events.has(eventName)){
      this.events.delete(eventName)
    }
  }
}