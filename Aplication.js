var variavel



function teste(){
    variavel = prompt();
    localStorage.setItem("name", variavel);
}

function pegar(){
    let name = localStorage.getItem("name");
    alert(name);
}

document.querySelector(".main-content__content__foto-roll__roll").addEventListener('wheel', function(event) {
    if (event.deltaY !== 0) {
      event.preventDefault();
      this.scrollLeft += event.deltaY;
    }
  });