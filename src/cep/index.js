const cs = new CSInterface()
export default {
  getFontList () {
    return new Promise((resolve, reject) => {
      cs.evalScript('getFontsJson()', result => {
        try {
          console.log(result)
          const o = JSON.parse(result)
          return resolve(o)
        } catch (e) {
          return reject(e)
        }
      })
    })
  },
  getDocumentInfoJson_byActive () {
    return new Promise((resolve, reject) => {
      cs.evalScript('getDocumentInfoJson_byActive()', (result) => {
        try {
          const o = JSON.parse(result)
          return resolve(o)
        } catch (e) {
          return reject(e)
        }
      })
    })
  },
  resizeCanvas_byActive (width, height) {
    debugger
    cs.evalScript(`resizeCanvas_byActive(${width}, ${height})`)
  }
}
