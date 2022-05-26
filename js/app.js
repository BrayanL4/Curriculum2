//SE LLAMO EL JSON "REMUME.JS" DESDE EL REPOSITORIO DE GITHUB
let jsonUrl = 'https://raw.githubusercontent.com/BrayanL4/curriculumJSON/main/resume.json';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
}

//funcion para cargar el json.
function cargarJson (){
    fetch(jsonUrl)
    .then(respuesta =>respuesta.json()) //indicamos el formato en que se desea optener.
    .then(inf => mostrarDato(inf))//mostramos informacion.
    .catch(error => console.log(error)) 
};
cargarJson();

curriculum = `
<div class="container">
<header>
    <h1>Curriculum vitae</h1>
</header>
</div>
<div>
<h2>Datos personales</h2>
<p>
    <br>Nombre: {nombre}
    <br>Fecha de nacimiento: {nacimiento}
    <br>Telefono: {telefono}
</p>
</div>
<div>
<h2>Resumen</h2>
{resumen}
</div>
<div>
<h2>Estudios</h2>
<p>
    <br>Escuela: {escuela}
    <br>Grado de estudio: {grado}
    <br>Fecha de ingreso: {eingreso}
    <br>Fecha de termino: {etermino}
</p>
</div>
<div class="container">
<h2>Conocimientos </h2>

    <h3>Lenguajes</h3>
        <br>{php}
 
    <h3>Bases de datos</h3>
        <br>{bases}
</div>
<div>
<h2>Experiencia laboral</h2>
<p>
    <br>Empresa: {empresa}
    <br>Puesto: {puesto}
    <br>FechaIngreso: {ingreso}
    <br>FechaTermino: {termino}


    <br>Responsabilidades:
    {responsabilidades}
</p>
</div>
`
function mostrarDato (inf){
        let Nombre = inf.nombre;
        let Nacimiento = inf.fechaNacimiento;
        let Telefono = inf.telefono;
        let Resumen = inf.Resumen;
        let Escuela = inf.educacion[0].escuela;
        let Grado = inf.educacion[0].gradoEstudio;
        let Eingreso = inf.educacion[0].fechaIngreso;
        let Etermino = inf.educacion[0].fechaTermino;
        let Php = inf.lenguages;
        let Bases = inf.baseDeDatos;
        let Empre = inf.experienciaLaboral[0].empresa;
        let Puesto = inf.experienciaLaboral[0].Puesto;    
        let Ingreso = inf.experienciaLaboral[0].fechaIngreso;            
        let Termino = inf.experienciaLaboral[0].fechaTermino;          
        let Responsabilidades = inf.experienciaLaboral[0].responsabilidades;          
        let html = curriculum;
        
        


        html=html.replace("{nombre}", Nombre);
        html=html.replace("{nacimiento}", Nacimiento);
        html=html.replace("{telefono}",Telefono);
        html=html.replace("{escuela}",Escuela);
        html=html.replace("{grado}",Grado);
        html=html.replace("{eingreso}",Eingreso);
        html=html.replace("{etermino}",Etermino);
        html=html.replace("{resumen}",Resumen);
        html=html.replace("{php}",Php);
        html=html.replace("{bases}",Bases);
        html=html.replace("{empresa}",Empre);
        html=html.replace("{puesto}",Puesto);
        html=html.replace("{ingreso}",Ingreso);
        html=html.replace("{termino}",Termino);
        html=html.replace("{responsabilidades}",Responsabilidades);

        document.getElementById('content').innerHTML +=html;
    
};

