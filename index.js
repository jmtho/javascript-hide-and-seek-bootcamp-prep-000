function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list li')
  for(var i=0; i<rankedLists.length; i++){
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n;
  }
}

//function deepestChild(){
  //return document.querySelectorAll("#grand-node div div div div")[0]
//}

function deepestChild(){
    var lst = document.getElementById("grand-node").querySelectorAll("div")
    for(var i = 0; i<lst.length; i++){
        var current = lst[i].querySelectorAll("div")
        if(current.length === 1){
            return current[0]
        }
    }
}
