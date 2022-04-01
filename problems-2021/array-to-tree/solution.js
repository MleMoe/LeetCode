// 例如将 input 转成output的形式
let input = [
  {
    id: 1, val: '学校', parentId: null
  }, {
    id: 2, val: '班级1', parentId: 1
  }, {
    id: 3, val: '班级2', parentId: 1
  }, {
    id: 4, val: '学生1', parentId: 2
  }, {
    id: 5, val: '学生2', parentId: 3
  }, {
    id: 6, val: '学生3', parentId: 3
  },
]

let output = {
  id: 1,
  val: '学校',
  children: [{
    id: 2,
    val: '班级1',
    children: [
      {
        id: 4,
        val: '学生1',
        children: []
      },
      {
        id: 5,
        val: '学生2',
        children: []
      }
    ]
  }, {
    id: 3,
    val: '班级2',
    children: [{
      id: 6,
      val: '学生3',
      children: []
    }]
  }]
}

let getChilds = (nodeArr, id)=>{
  let childs = []
  for (let n of nodeArr){
    if (n.parentId === id){
      let node = {
        id: n.id,
        val: n.val,
        children: getChilds(nodeArr, n.id)
      }
      childs.push(node)
    }
  }
  return childs
  
}

function arrayToTree(nodeArr) {
  let root = nodeArr.shift()
  return {
    id: root.id,
    val: root.val,
    children: getChilds(nodeArr, root.id)
  }
}

let s = arrayToTree(input)
console.log(JSON.stringify(s, null, 2))