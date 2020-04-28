function numberToWords(number) {
    // Your code here
    const dict = [
      [0, ''],
      [1, 'satu'],
      [2, 'dua'],
      [3, 'tiga'],
      [4, 'empat'],
      [5, 'lima'],
      [6, 'enam'],
      [7, 'tujuh'],
      [8, 'delapan'],
      [9, 'sembilan'],
      [10, 'sepuluh'],
      [11, 'sebelas'],
      [12, 'dua belas'],
      [13, 'tiga belas'],
      [14, 'empat belas'],
      [15, 'lima belas'],
      [16, 'enam belas'],
      [17, 'tujuh belas'],
      [18, 'delapan belas'],
      [19, 'sembilan belas'],
      [100, 'seratus'],
      [1000, 'seribu']
    ]

    if (number == '') return '\n'

    let counter = 0
    let strNum = ''
    let arrNumGet = String(number).split('').reverse()

    let arrNum = []
    arrNumGet.forEach(el => {
        if(counter == 3) {
            arrNum.push(strNum.split('').reverse().join(''))
            counter = 0
            strNum = ''
            
        }
        counter++
        strNum += el
        
    })
    // console.log(arrNum[arrNum.length-1] + arrNum[arrNum.length-2])
    arrNum.push(String(number).split(arrNum[arrNum.length-1] + arrNum[arrNum.length-2])[0])

    // return arrNum
    let text = ''
    let arrText = []
    for (let i = 0; i < arrNum.length; i++) {
        counter = arrNum[i].length
        for (let x = 0; x < arrNum[i].length; x++) {
            if(arrNum[i][x] == 0) {
                text += ''
                counter--
                continue
            }

            for (let j = 0; j < dict.length; j++) {
            
                if (x == 1 && arrNum[i][x] == 1) {
                    if((arrNum[i][x] + arrNum[i][x+1]) == (dict[j][0])){
                        text += dict[j][1] + ' '
                        x++
                        counter--
                        break
                    }
                } else if (x == 0 && arrNum[i][x] == 1) {
                    if((arrNum[i][x] + arrNum[i][x+1]) == (dict[j][0])){
                        text += 'seratus '
                        counter--
                        break
                    }
                } else if(arrNum[i][x] == dict[j][0]) {

                    if (counter == 3) text += dict[j][1] + ' Ratus '
                    else if (counter == 2) text += dict[j][1] + ' Puluh '
                    else text += dict[j][1] + ' '
                    counter--
                    break
                }
                


            }
            
        }
        arrText.unshift([text])
        text = ''
        
    }

    // return arrText

    let result = ''

    if(arrText.length == 5) {
        result += arrText[0] + 'Triliyun '
        arrText.shift()
    }

    if (arrText.length == 4) {
        if (arrText[0] == '') null
        else result += arrText[0] + 'Miliyar '
        arrText.shift()
    }
    
    if (arrText.length == 3) {
        if (arrText[0] == '') null
        else result += arrText[0] + 'Juta '
        arrText.shift()
    }

    if (arrText.length == 2) {
        if (arrText[0] == '') null
        else result += arrText[0] + 'Ribu '
        arrText.shift()
    }
    result += arrText[0] + '\n'

    return result
  
  }
  
  
  
  
  // Driver code
  console.log(numberToWords(705));
  console.log(numberToWords(10000011));
  console.log(numberToWords(20118450));
  console.log(numberToWords(22453321811));