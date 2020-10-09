//#region Elements
function header({children}){
  return {
    tag: 'header',
    children
  }
}

function main({children}){
  return {
    tag: 'main',
    children
  }
}

function footer({children}){
  return {
    tag: 'footer',
    children
  }
}

function div({children, ...rest}){
  return {
    tag: 'div',
    children,
    ...rest
  }
}

function input({children, ...rest}){
  return {
    tag: 'input',
    children,
    ...rest
  }
}

function h1({ children}){
  return {
    tag: 'h1',
    children
  }
}

function strong({ children}){
  return {
    tag: 'strong',
    children
  }
}

function span({ children}){
  return {
    tag: 'span',
    children
  }
}

function label({ children}){
  return {
    tag: 'label',
    children
  }
}

function p({ children}){
  return {
    tag: 'p',
    children
  }
}
//#endregion

function registerElement(app, children){
  if(children){
    children.forEach((element) => {
      const createdElement = generateElement(element)
  
      app.append(createdElement)
    })
  }
}

function generateElement(element){
  const {tag, children, styles, ...rest} = element
  const newElement = document.createElement(tag)

  const attributes = {
    keys: Object.keys(rest),
    value: Object.values(rest)
  } 

  if(attributes){
    attributes.keys.forEach((key, index)=>{
      newElement.setAttribute(key, attributes.value[index])
    })
  }

  if(styles){
    debugger
    const elementStyles = {
      keys: Object.keys(styles),
      value: Object.values(styles)
    }

    elementStyles.keys.forEach((key, index) => {
      newElement.style[key] = elementStyles.value[index]
    })
    
  }

  if(children){
    children.forEach((child) => {
      if(typeof child === 'string'){
        newElement.innerHTML = child
        return
      }
      const childElement = generateElement(child)

      newElement.append(childElement)
    })
  }

  return newElement
}