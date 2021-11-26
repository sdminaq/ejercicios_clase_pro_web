const main = document.querySelector(".banner");
const menuItems = Array.from(main.querySelector(".btns").children);

fetch("info.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fillInfo(data, 0);
    menuItems.map(function (item, index) {
      item.index = index;
      item.addEventListener('click', function(e){

        fillInfo(data, e.currentTarget.index);
      })
    })
  })
  .catch(function (err) {
    console.log(err);
  });

function fillInfo(data, index) {
  menuItems.map(function (item, i) {
    item.classList.replace(
      "bt--active",
      "bt"
    );
    if(i == index){
      item.classList.replace(
        "bt",
        "bt--active"
      );
    }
  })
  
  main.querySelector("p").textContent = data[index].texto;
  main.querySelector("img").src = data[index].imagen;
  
}