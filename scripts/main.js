const paragraph = document.body.querySelector( '[paragraph]' );
paragraph.innerHTML = paragraph.textContent
  .split( ' ' )
  .filter( item => Boolean( item ) )
  .map( item => `<a class='content' tabindex="1">${ item }</a>` )
  .join( ' ' );

const allElements = document.querySelectorAll( '*' );

const a = document.body.querySelectorAll( 'a' );
const fontS = a[ 0 ].style.fontSize;
let a_nodes = a.forEach( ( item ) => (
  item.addEventListener( 'mouseenter', () => {
    item.style.fontSize = '1.5rem';
    item.style.fontStyle = 'italic';
    item.style.fontWeight = '900';

  }, false )
) );

a_nodes = a.forEach( ( item ) => (
  item.addEventListener( 'mouseleave', () => {
    item.style.fontSize = fontS;
    item.style.color = '#' + Math.random().toString( 16 ).slice( -6 );
    item.style.filter = 'brightness(0.75)';
    item.style.fontStyle = 'normal';
  }, false )
) );


function isInViewport ( element ) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth &&
    rect.right > 0
  );
}

function applyFiltersToInvisible () {
  const elements = document.querySelectorAll( '.content' );

  elements.forEach( el => {
    if ( !isInViewport( el ) ) {
      el.classList.add( 'filtered' );
    } else {
      el.classList.remove( 'filtered' );
    }
  } );
}

// Run on load and on scroll
window.addEventListener( 'DOMContentLoaded', applyFiltersToInvisible );
window.addEventListener( 'scroll', applyFiltersToInvisible );
window.addEventListener( 'resize', applyFiltersToInvisible );
