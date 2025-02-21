import { useState } from 'react';
import './ArtPiece.css';

export default function ArtPiece({ piece }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const imagePath = `/artworks/${piece.id}/${piece.coverImage}`;
  console.log('Trying to load image from:', imagePath);

  const formatAuthors = (authors) => {
    if (!authors) return '';
    if (authors.length === 1) return authors[0];
    
    // Check if last author starts with 'I'
    const lastAuthor = authors[authors.length - 1];
    const conjunction = lastAuthor.startsWith('I') ? 'e' : 'y';
    
    if (authors.length === 2) {
      return `${authors[0]} ${conjunction} ${authors[1]}`;
    }
    
    return authors.slice(0, -1).join(', ') + ` ${conjunction} ${lastAuthor}`;
  };

  return (
    <article className="art-piece">
      <div className="art-piece-header">
        <h2>{piece.title}</h2>
        <div className="authors">
          {piece.authors.map((author, index) => (
            <span key={index}>
              <span className="author">
                {author}
                {piece.countries ? 
                  <span className="country">({piece.countries[index]})</span> :
                  piece.country && <span className="country">({piece.country})</span>
                }
              </span>
              {index < piece.authors.length - 2 && ", "}
              {index === piece.authors.length - 2 && 
                (piece.authors[piece.authors.length - 1].startsWith('I') ? " e " : " y ")}
            </span>
          ))}
        </div>
        {piece.collaborators && (
          <div className="collaborators">
            {piece.collaborators.map((collab, index) => (
              <span key={index}>
                {collab.role}: {collab.name} ({collab.country})
              </span>
            ))}
          </div>
        )}
        <div className="piece-type">{piece.type}</div>
      </div>
      
      <img 
        src={imagePath}
        alt={piece.title}
        className="cover-image"
        onClick={() => setIsGalleryOpen(true)}
        onError={(e) => console.error('Error loading image:', e)}
      />
      
      <p className="description">{piece.description}</p>
      
      {isGalleryOpen && (
        <div className="gallery-overlay" onClick={() => setIsGalleryOpen(false)}>
          <div className="gallery-content">
            {piece.gallery.map((image, index) => (
              <img 
                key={index}
                src={`/artworks/${piece.id}/${image}`}
                alt=""
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
} 