var nodeDetail = document.querySelectorAll(".detail");
nodeDetail.forEach((singleNode) => {
  var oldText = singleNode.innerText;
  var newP = document.createElement("p");
  newP.innerText = oldText;

  singleNode.appendChild(newP);
  singleNode.removeChild(singleNode.childNodes[0]);
});
