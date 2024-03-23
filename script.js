const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Button = document.getElementById("button");

Button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Assuming the SPAN is inside an LI
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
