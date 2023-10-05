export function Category() {
  return (
    <div className="category-container">
      <img className="category-pictures" src="public/img/deals.png" /> 
      {/* The right Pic must always insert here */}
      <p className="category-text">Aktionen</p> {/* The correct text must always be inserted here */}
    </div> 
  )
}


// Die jeweiligen inhalte und der img inhalt müssen variable sein. Aber von der Struktur her dürfte es passen
export function SlideshowElement() {
  return (
    <div className="slideshow-listelement-container">
      <a className="slideshow-listelement">
        <h3 className="headline">1 kaufen, 1 gratis bei O'Tacos</h3>
        <p className="under-headline">Französische Tacos</p>
        <button className="slideshow-button">Bestelle jetzt &#8594;</button>
        <img />
      </a>
    </div>
  )
}

