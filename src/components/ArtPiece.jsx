import { useState } from 'react';
import './ArtPiece.css';

export default function ArtPiece({ piece }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  
  const imagePath = `/artworks/${piece.id}/${piece.coverImage}`;
  console.log('Trying to load image from:', imagePath);

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
              {index === piece.authors.length - 2 && " y "}
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