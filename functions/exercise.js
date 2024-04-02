function makeSpaceLine(numSpaces, numChars) {
    let spaceLine = ''
    for (let i = 0; i < numSpaces; i++) {
      spaceLine += '#'
    }
    return spaceLine
  }
  
  function makeIsocelesTriangle(height) {
    let triangle = ''
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i + 1, 2*i +  1) + "\n")
    }
    return triangle.slice(0,-1)
  }

  

  console.log(makeIsocelesTriangle(5))

