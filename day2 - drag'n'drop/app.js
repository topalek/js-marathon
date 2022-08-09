const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll(".placeholder");

items.forEach(item=>{
  item.draggable = true;
  item.addEventListener('dragstart',dragstart)
  item.addEventListener('dragend',dragend)
})
placeholders.forEach((placeholder) => {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dargdrop);
});

function dragstart(e) {
  e.target.classList.add('selected')
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}
function dragend(e) {
    e.target.className = 'item';
}
function dragover(e) {
   e.preventDefault()
}
function dragenter(e) {
   e.target.classList.add("over");
}
function dragleave(e) {
  e.target.classList.remove("over");
}
function dargdrop(e) {
  const el = document.querySelector(".item.selected")
  e.target.append(el);
  e.target.classList.remove('over');
  el.className = 'item';
}