import React from 'react';

function RimuoviTagHTML({ testoHTML }) {
  // Creare un oggetto DOMParser
  const parser = new DOMParser();
  
  // Parsare il testo HTML in un documento DOM
  const documento = parser.parseFromString(testoHTML, 'text/html');
  
  // Ottenere il testo senza i tag HTML
  const testoSenzaTag = documento.body.textContent || "";
  
  return (
    <div>
      <p> <b>Descrizione:</b>{" "+testoSenzaTag}</p>
    </div>
  );
}

export default RimuoviTagHTML;