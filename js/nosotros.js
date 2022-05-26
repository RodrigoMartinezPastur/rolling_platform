let usuario = JSON.parse(localStorage.getItem("user")) || null;
let contenedorLista = document.getElementById("menu_lista");

let mentores = JSON.parse(localStorage.getItem("mentor")) || [];
let card = document.getElementById("card");

if (usuario) {
  if (usuario.rol === "admin") {
    let li = document.createElement("li");
    li.classList = "nav-item";
    let nosotrosAdmin = `<a class="nav-link" aria-current="page" href="./nosotrosAdmin.html"
        > nosotros Administración</a>`;
    li.innerHTML = nosotrosAdmin;
    contenedorLista.append(li);
  }
}

function cargarCarta() {
  card.innerHTML = "";
  if (mentores.length > 0) {
    mentores.map(function (persona) {
      let div = document.createElement("div");
      div.classList = "card mb-3";
      let tarjeta = ` <div class="row g-0">
            <div class="col-md-4">
              <img src="${persona.imagen}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${persona.mentor}</h5>
                <p class="card-text">${persona.resumen}</p>
             </div>
           </div>
         </div>`;
      div.innerHTML = tarjeta;
      card.appendChild(div);
    });
  } else {
    let div = document.createElement("div");
    div.classList = "card mb-3";
    let alert = `<div class="alert alert-warning" role="alert">
    que buscas flaco 
  </div>`;
    div.innerHTML = alert;
    card.appendChild(div);
  }
}

cargarCarta();