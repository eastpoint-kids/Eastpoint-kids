
document.querySelectorAll(".reveal-btn").forEach(button=>{
  button.addEventListener("click",()=>{
    const target=document.getElementById(button.dataset.target);
    target.classList.toggle("open");
    button.textContent=target.classList.contains("open")?"Hide family questions":"Show family questions";
  });
});
