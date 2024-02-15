function getTarget(e) {                          // Declare function
    if (!e) {                                      // If there is no event object
      e = window.event;                            // Use old IE event object
    }
    return e.target || e.srcElement;               // Get the target of event
  }

elList = document.querySelector('#shoppingList');
elList.addEventListener('click', e => {
    let target = getTarget(e);
    let elParent = e.parentNode;
    let elGrandparent = e.parentNode.parentNode;

    elGrandparent.removeChild(elParent);

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}, false);