export default function About() {
  return (
    <div className="about-page">
      <section className="exponen">
        <h2>EXPONEN</h2>
        <p>
          Ariel Aguirre, Bruno Bravo, Dani Vera, Diego González,
          Elías Sarquís, Iris Saladino, Isis Vargas, Lía Acevedo,
          Micael Fernández, Milagros Carcacha, Pablo Arancibia,
          Pablo Labarta, Sarah Henry, Sebastián Guzmán y Sofía
          Ferro.
        </p>
      </section>

      <section className="realizacion">
        <h2>Realización de muestra a cargo de estudiantes MAE</h2>
        <p>[cohorte 2024]</p>
        
        <div className="credits-group">
          <p><span>[producción]</span> Iris Saladino, Dani Vera, Pablo Arancibia, Diego González</p>
          <p><span>[diseño gráfico]</span> Milagros Carcacha, Ariel Aguirre, Pablo Labarta, Sarah Henry</p>
          <p><span>[texto curatorial]</span> Sebastián Guzmán, Lía Acevedo, Sofía Ferro, Elías Sarquís</p>
          <p><span>[montaje]</span> Micael Fernández, Isis Vargas, Bruno Bravo</p>
          <p><span>[diseño catálogo]</span> Dani Vera</p>
          <p><span>[desarrollo web]</span> Pablo Labarta</p>
          <p><span>[fotografía]</span> Mariana Lombard</p>
        </div>
      </section>

      <section className="acompanamiento">
        <h2>ACOMPAÑAMIENTO DE PROCESOS</h2>
        <div className="credits-group">
          <p><span>[investigación artística]</span> Francisco Paredes y Augusto Zanela</p>
          <p><span>[desarrollo de muestra y producción general]</span> Paula Guersenzvaig</p>
          <p><span>[producción tecnológica]</span> Nicolás Restbergs y Santiago Fernández García</p>
          <p><span>[difusión]</span> Mariana Lombard</p>
        </div>
      </section>

      <section className="organizacion">
        <p>
          Organizado por la Maestría en Tecnología y Estética
          de las Artes Electrónicas de la UNTREF (Universidad
          Nacional de Tres de Febrero) y Casa Belgrado.
        </p>
        <p>Buenos Aires, Argentina</p>
        <p>Noviembre 2024</p>
      </section>
    </div>
  );
} 