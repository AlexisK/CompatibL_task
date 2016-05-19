
function cr(tag, cls, parent) {
    parent = parent || document;
    var newNode = parent.createElement(tag);
    
    if ( cls ) { newNode.className = cls; }
    
    return newNode;
}
