const app = document.querySelector('#app')

const components = {
  main: main({
    children:[
      div({
        children:[
          strong({
            children:['Bem-vindo ao Vokus']
          }),
          p({
            children:['Vokus é um simples e rápido framework para criação de desenvolvimento de site utilizando Javascript']
          })
        ]
      })
    ]
  }),
  header: header({
    children:[
      h1({
        children: ['Vokus']
      })
    ]
  }),
  input: div({
    styles:{
      display: 'flex',
      flexDirection: 'column'
    },
    children:[
      label({
        children: ['E-mail:']
      }),
      input({
        type:'email'
      })
    ]
  })
}

registerElement(app, [
  {
    tag:'main',
    styles:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
    children:[
      components.header,
      components.main,
      components.input
    ]
  }
])

