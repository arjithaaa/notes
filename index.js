function highlightOption(option){
  for(var i = 0; i < 3; i++){
    document.getElementsByClassName('option')[i].style.backgroundColor = "#fff"
  }
  option.style.backgroundColor = "#feefc3";
}
