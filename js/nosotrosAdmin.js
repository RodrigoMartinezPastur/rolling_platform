class profesor {
  constructor(id, mentor, resumen, imagen) {
    this.id = id;
    this.mentor = mentor;
    this.resumen = resumen;
    this.imagen = imagen;
  }
}

let card = document.getElementById("card");

let mentores = JSON.parse(localStorage.getItem("mentor")) || [];

function crearTarjeta(e) {
  e.preventDefault();

  let id = new Date().getTime();
  let prfre = document.getElementById("profesor").value;
  let miniResumen = document.getElementById("resumen").value;
  let img = document.getElementById("imagen").value;

  mentores.push(new profesor(id, prfre, miniResumen, img));
  localStorage.setItem("mentor", JSON.stringify(mentores));
  document.getElementById("formulario").reset();
  document.getElementById("profesor").focus();
  cargarCarta();
}

function cargarCarta() {
  card.innerHTML = "";

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
}

document.getElementById("formulario").addEventListener("submit", crearTarjeta);

cargarCarta();