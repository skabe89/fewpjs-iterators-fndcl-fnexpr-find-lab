
function superbowlWin(array){
let result
array.find(function(o){
    if(o.result == "W"){
      result = o.year
    }
  })
  return result
}
