import './ExpositionText.css'

export default function ExpositionText() {
  return (
    <div className="exposition-container">
      <div className="exposition-text">
        <div className="text-content">
          <p>
            Los muros susurran secretos entre el polvo y la
            memoria. En sus rincones convergen la nostalgia
            y la promesa, la presencia y la pulsión por indagar
            en lo que siempre está en movimiento.
          </p>
          <p>
            La pulsión es fulgor, es como un magma en
            donde todo pierde su forma para regenerarse. Es
            el calor en donde todo es potencia.
          </p>
          <p>
            Errar es un verbo polisémico.<br />
            Equivocarse, deambular, vagar, divagar.
          </p>
          <p className="conjugation">
            Yo erro,<br />
            tú erras,<br />
            él erra,<br />
            ella erra,<br />
            elle erra,<br />
            nosotrxs erramos,<br />
            ustedes erran,<br />
            ellxs erran.
          </p>
          <p>
            Errar es incurrir en el error.<br />
            ¿Errar no es incurrir en el error?<br />
            Errar es abrirse a las afectaciones.<br />
            Errar es abrirse a las afectaciones de entregarse a
            un destino incierto.
          </p>
          <p>
            Errar es elegir el rito de hacer de la vereda,
            camino.
          </p>
          <p>
            Es curioso que la misma palabra se use para
            referirse al deambular sin rumbo y al fallar en
            algo. Como si todo movimiento debiera tener un
            fin, cuando lo esencial es moverse.
          </p>
          <p>
            Casa Belgrado no es solo un escenario, es un ser
            vivo, un testigo de los movimientos. El espacio es
            una convergencia de tiempos afectivos en donde
            distintas maneras, menos lineales y menos
            determinadas se encuentran.
          </p>
          <p>
            Esta muestra agrupa trabajos que reflexionan
            en torno al espacio desde las posibilidades de
            lo errático, a través de movimientos entre la
            tecnología y la investigación situada.
          </p>
          <p>
            Invitamos a experimentar una ficción desde
            estas posibilidades.
          </p>
          <p>
            Es el desvío, el error, el lugar donde lo distinto
            fricciona pero no se lima sino que brilla y genera
            chispas, un destello de ilusión en la trama de lo
            incierto. En esta pérdida de formas, las fugas y
            las confusiones trazan mapas nuevos, entonces
            errar es el impulso vital que nos relaciona.
          </p>
          <p>
            Errar como una estética, como una metodología,
            como una política y como una ética.
          </p>
          <p>
            Bienvenida la pulsión.
          </p>
          
          <div className="signature">
            <p>
              Sebastián Guzmán, Lía Acevedo, Sofía Ferro y
              Elías Sarquís<br />
              Buenos Aires<br />
              2024
            </p>
          </div>

          <div className="exposition-logos">
            <a 
              href="https://www.instagram.com/mae_untref/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/mae-modified.png" alt="MAE Logo" className="exposition-logo" />
            </a>
            <a 
              href="https://untref.edu.ar/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/untref-modified.png" alt="UNTREF Logo" className="exposition-logo" />
            </a>
            <a 
              href="https://casabelgrado.org/en/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/belgrado-modified.png" alt="Belgrado Logo" className="exposition-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 