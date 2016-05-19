
function cr(tag, cls, parent) {
    var newNode = document.createElement(tag);
    
    if ( cls ) { newNode.className = cls; }
    if ( parent ) { parent.appendChild(newNode); }
    
    return newNode;
}
