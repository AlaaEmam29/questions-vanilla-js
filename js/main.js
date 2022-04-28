"use strict";

const btns = document.querySelectorAll(".question-btn");
btns.forEach((btn,index)=>{
btn.addEventListener("click",function(e){
  const  question = document.querySelectorAll(".question-text"),
  item = e.target.parentElement.className,
  plusIcon = document.querySelectorAll(".plus-icon"),
  minusIcon = document.querySelectorAll(".minus-icon");
    question[index].classList.toggle("show-question");
if(item=="plus-icon")
{
    plusIcon[index].style.display="none";
    minusIcon[index].style.display="block";

}
else
{
    plusIcon[index].style.display="block";
    minusIcon[index].style.display="none";

}

})
})