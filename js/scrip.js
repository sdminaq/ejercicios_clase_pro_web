function plantilla(estudiante){
    return `<div class="principal">
    <div class="informa">
     <div class="izquierda">
        <p class="nombre">${estudiante.nombre}</p>
        <div class="cont-link">
            
            <span class="enlace"><a href="${estudiante.github}">GitHub</a></span>
            <span class="enlace"><a href="${estudiante.neocites}">Neocities</a></span>
            <span class="enlace"><a href="${estudiante.email}">Email</a></span>
            <span class="enlace"><a href="${estudiante.telefono}">Whatsapp</a></span>
            
        </div>
      </div>   
        <div class="img"><img src="${estudiante.imagen}" ></div>
    </div>
    <div class="actividades">
        
        <div>
            <span>Actividades</span>
            <span>% ui/ux</span>
            <span>% dev</span>
        </div>
        
            <div>
                <span>${estudiante.actividades[0].actividad}</span>
                <span>${estudiante.actividades[0].estadouiux}</span>
                <span>${estudiante.actividades[0].estadotecnico}</span>
            </div>
            <div>
                <span>${estudiante.actividades[1].actividad}</span>
                <span>${estudiante.actividades[1].estadouiux}</span>
                <span>${estudiante.actividades[1].estadotecnico}</span>
            </div>
            <div>
                <span>${estudiante.actividades[2].actividad}</span>
                <span>${estudiante.actividades[2].estadouiux}</span>
                <span>${estudiante.actividades[2].estadotecnico}</span>
            </div>
    </div>
    <div class="porcent">
        <div class="valoracion"><span>${estudiante.valoraciones["val-css"]}</span><span>css</span></div>
        <div class="valoracion"><span>${estudiante.valoraciones["val-js"]}</span><span>js</span></div>
        <div class="valoracion"><span>${estudiante.valoraciones["val-html"]}</span><span>html</span></div>
        <div class="valoracion"><span>${estudiante.valoraciones["val-ui"]}</span><span>ui</span></div>
        <div class="valoracion"><span>${estudiante.valoraciones["val-ux"]}</span><span>ux</span></div>
        <div class="valoracion">${estudiante.calificacion}</div>
    </div>
</div>`
}

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
      const body=document.body;
      body.innerHTML=data.estudiantes.map(plantilla);
  });
