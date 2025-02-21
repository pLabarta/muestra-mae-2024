import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import ArtPiece from './components/ArtPiece'
import About from './components/About'
import ExpositionText from './components/ExpositionText'

function App() {
  const [artworks, setArtworks] = useState([])

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const loadArtworks = async () => {
      const galleryImages = Array.from({ length: 30 }, (_, i) => `gallery${i + 1}.jpg`);
      
      try {
        const validGalleryImages1 = await Promise.all(
          galleryImages.map(async (filename) => {
            try {
              const response = await fetch(`/artworks/piece1/${filename}`);
              return response.ok ? filename : null;
            } catch {
              return null;
            }
          })
        );

        const validGalleryImages2 = await Promise.all(
          galleryImages.map(async (filename) => {
            try {
              const response = await fetch(`/artworks/piece2/${filename}`);
              return response.ok ? filename : null;
            } catch {
              return null;
            }
          })
        );

        const validGalleryImages3 = await Promise.all(
          galleryImages.map(async (filename) => {
            try {
              const response = await fetch(`/artworks/piece3/${filename}`);
              return response.ok ? filename : null;
            } catch {
              return null;
            }
          })
        );

        const validGalleryImages4 = await Promise.all(
          galleryImages.map(async (filename) => {
            try {
              const response = await fetch(`/artworks/piece4/${filename}`);
              return response.ok ? filename : null;
            } catch {
              return null;
            }
          })
        );

        const validGalleryImages5 = await Promise.all(
          galleryImages.map(async (filename) => {
            try {
              const response = await fetch(`/artworks/piece5/${filename}`);
              return response.ok ? filename : null;
            } catch {
              return null;
            }
          })
        );

        const validGalleryImages6 = await Promise.all(
          galleryImages.map(async (filename) => {
            try {
              const response = await fetch(`/artworks/piece6/${filename}`);
              return response.ok ? filename : null;
            } catch {
              return null;
            }
          })
        );

        const artworksArray = [
          {
            id: 'piece1',
            title: 'La casa que habita en mi',
            authors: ['Ariel Aguirre', 'Milagros Carcacha'],
            country: 'ARG',
            type: 'Instalación reactiva',
            description: '"La Casa que Habita en Mí" es una instalación que explora la memoria y que busca recrear una historia posible de la familia que construyó y se asentó en esa casa. Esta obra da voz a los fantasmas que dejaron su huella en las paredes, invitando al espectador a revivir sus historias y emociones.',
            coverImage: 'cover.jpg',
            gallery: validGalleryImages1.filter(Boolean)
          },
          {
            id: 'piece2',
            title: 'No todo lo que brilla es oro',
            authors: ['Pablo Arancibia', 'Dani Vera'],
            country: 'CHI',
            type: 'Bioinstalación interactiva',
            description: 'En medio de la transformación urbana del barrio San Cristóbal, las fachadas y sus texturas antropizadas aparecen como espacios donde conviven lo visible y lo invisible. En esta bioinstalación, se propone un diálogo entre las dinámicas barriales y los ecosistemas microbianos, estableciendo una analogía entre comunidades humanas y biológicas para reflexionar sobre la cohabitación con la otredad.',
            coverImage: 'cover.jpg',
            gallery: validGalleryImages2.filter(Boolean)
          },
          {
            id: 'piece3',
            title: 'Script fusión',
            authors: ['Sofía Ferro', 'Iris Saladino', 'Isis Vargas'],
            countries: ['ARG', 'ARG', 'MEX'],
            type: 'Instalación reactiva',
            description: 'Archivo reactivo que explora la diversidad culinaria en el barrio de Balvanera, enfocándose en la apropiación, dispersión y transmisión de ingredientes y saberes tradicionales derivados de los procesos migratorios que han modelado las prácticas gastronómicas del barrio.',
            coverImage: 'cover.jpg',
            gallery: validGalleryImages3.filter(Boolean)
          },
          {
            id: 'piece4',
            title: 'Régimen hidráulico',
            authors: ['Diego González', 'Sebastián Guzmán Becerra'],
            countries: ['MEX', 'COL'],
            collaborators: [{ role: 'Acompañamiento tecnológico', name: 'Santiago Fernández', country: 'ARG' }],
            type: 'Videoinstalación reactiva',
            description: 'Este trabajo indaga en la relación entre la deuda externa y la canalización de los arroyos que nutren el Río de la Plata en CABA, una ciudad de espaldas al mismo. Un bloque de hielo se derrite, dejando caer monedas sobre agua del río. Cada caída activa un video de la costa, invocando un retorno geológico, un saldo de la deuda: los minerales acuñados vuelven al agua como sedimentos.',
            coverImage: 'cover.jpg',
            gallery: validGalleryImages4.filter(Boolean)
          },
          {
            id: 'piece5',
            title: 'Insectarios del desvío',
            authors: ['Lía Acevedo', 'Elías Sarquís', 'Sarah Henry'],
            countries: ['ARG', 'ARG', 'USA'],
            type: 'Instalación interactiva',
            description: 'Las criaturas que residen en Casa Belgrado son testigos que transportan las tracciones de un mundo que se nutre de las fronteras del desvío. No buscan respuestas, sino resonancias. Sus sonidos agitan los ecos del recuerdo y las vibraciones que anuncian promesas, revelan que incluso lo más pequeño puede contener lo inmenso, que lo aparentemente frágil nunca deja de insistir.',
            coverImage: 'cover.jpg',
            gallery: validGalleryImages5.filter(Boolean)
          },
          {
            id: 'piece6',
            title: 'La trampa',
            authors: ['Bruno Bravo', 'Micael Fernández', 'Pablo Labarta'],
            country: 'ARG',
            type: 'Instalación interactiva',
            description: 'Una instalación interactiva que pone en juego las dinámicas de los nuevos campos laborales. Incluso bajo un mismo techo, el esfuerzo y sus resultados parecen estar desconectados. Invitamos a presenciar la creación remota de un mueble que parece nunca terminar. Mientras tanto, en otra parte, alguien se enfrenta a la experiencia de trabajar en algo cuyos resultados no puede ver.\n\n¿Tiene impacto nuestro trabajo? ¿Qué queda luego de horas frente a la pantalla? LaburoYa promete ser la forma más fácil de trabajar. Sin conocimientos previos, sin jefes y con horarios flexibles. Este puede ser el primer paso hacia tu libertad financiera.',
            coverImage: 'cover.jpg',
            gallery: validGalleryImages6.filter(Boolean)
          }
        ];

        setArtworks(shuffleArray(artworksArray));
      } catch (error) {
        console.error('Error loading gallery images:', error);
      }
    };

    loadArtworks();
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <h1>LA PULSIÓN DE LO ERRÁTICO</h1>
          <nav>
            <Link to="/">Obras</Link>
            <Link to="/about">Info</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <ExpositionText />
              <main>
                {artworks.map(piece => (
                  <ArtPiece key={piece.id} piece={piece} />
                ))}
              </main>
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

        <div className="catalog-section">
          <a href="/catalogo.pdf" download className="download-catalog">
            Descargar Catálogo
          </a>
        </div>

        <footer>
          <div className="footer-logos">
            <a 
              href="https://www.instagram.com/mae_untref/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/mae.png" alt="MAE Logo" className="footer-logo" />
            </a>
            <a 
              href="https://untref.edu.ar/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/untref.png" alt="UNTREF Logo" className="footer-logo" />
            </a>
            <a 
              href="https://casabelgrado.org/en/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src="/belgrado.png" alt="Belgrado Logo" className="footer-logo" />
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
