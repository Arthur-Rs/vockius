function createHTMLElement(element) {
  const newElement = document.createElement(element.tag || "h1");

  if (element.class) {
    newElement.classList.add(element.class);
  }

  const attributes = Object.entries(element)

  attributes.forEach(attr => {
    if(/children|class|tag/.test(attr[0])){
      return
    }

    newElement.setAttribute(attr[0],attr[1]) 
  })


  return newElement;
}

function createElements(elementAppend, children) {
  children.forEach((element) => {
    if (typeof element === "string") {
      elementAppend.innerHTML += element;
      return;
    }

    const newElement = createHTMLElement(element);

    if (element.children) {
      if (Array.isArray(element.children)) {
        createElements(newElement, element.children);
      } else if (typeof element.children === "string") {
        newElement.innerHTML += element.children;
      } else {
        newElement = createHTMLElement(element.children);
      }
    }

    elementAppend.append(newElement);
  });
}
