const express = require("express")
const app = new express()
 
const renderMenu = (currentPage) => {
  const selectedStyle = "color: pink;"
 
  return `
    <ul>
      <li><a href="/" style="${currentPage === "home" ? selectedStyle : ""}">Home</a></li>
      <li><a href="/dizionario" style="${currentPage === "dizionario" ? selectedStyle : "green"}">Dizionario</a></li>
      <li><a href="/aforismi" style="${currentPage === "aforismi" ? selectedStyle : "green"}">Aforismi</a></li>
    </ul>
  `
}
 
const renderHtml = (currentPage, body) => {
  return ` 
  <!DOCTYPE html>
  <html>
    <head>
      <title>La mia pagina web</title>
    </head>
    <body>
      ${renderMenu(currentPage)}
      ${body}
    </body>
  </html>
`
}
 
app.get("/", (req, res) => {
  res.send(renderHtml("home", "<h1>Ti trovi nella pagina home</h1>"))
})
 
const dizionario = [
  { 
    lemma: "zelante",
    sinonimo: "assiduo , coscienzioso ,scrupoloso",
    contrario: "negligente , noncurante"
  },
  { 
    lemma: "olistico",
    sinonimo: "globale, interdisciplinare",
    contrario: "individualistico"
  },
  { 
    lemma: "divelto",
    sinonimo: "strappato, estirpato",
    contrario: "conficcato, radicato"
  }
]
 


const aforismi = [
  { 
    autore: "Nikola Tesla",
    frase: "La scienza non è nient'altro che una perversione se non ha come suo fine ultimo il miglioramento delle condizioni dell'umanità",
  },
  { 
    autore: "Louis Pasteur",
    frase: "La scienza non ha patria.",
  },
  { 
    autore: "Margherita Hack",
    frase: "La scienza è umiliata dalla politica, che a sua volta è succube del Vaticano.",
  }
]



app.get("/dizionario", (req, res) => {
  res.send(renderHtml("dizionario", `
  <h1>Questo è un mini dizionario</h1>
  <ul>
    ${dizionario.map((e => {
      return `
      <li>
        <div>
          <h3>${e.lemma}</h3>
          <p>${e.sinonimo}</p>
          <p>${e.contrario}</p>
        </div>
      </li>
      `
    })).join(" ")}
  </ul>
  `))
})







app.get("/aforismi", (req, res) => {
  res.send(renderHtml("aforismi", `
  <h1>Qui puoi trovare degli aforismi</h1>
  <ul>
    ${aforismi.map((e => {
      return `
      <li>
        <div>
          <h3>${e.autore}</h3>
          <p>${e.frase}</p>
        </div>
      </li>
      `
    })).join(" ")}
  </ul>
  `))
})
 
 
app.listen(3000, () => console.log("server listening on port 3000"))