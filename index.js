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

//using query selector all returns a node list: need to use querySelector here to return just the element. That's why the error message!
function deepestChild(){
  return document.querySelector("#grand-node div div div div")
}
