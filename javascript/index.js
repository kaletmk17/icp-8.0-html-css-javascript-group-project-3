
function chekquentity(opration) {
    let result = document.getElementById('result')
    let resresult = document.getElementById('re-result')
    let value = 100
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||100) * (parseInt(count) ||100)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||100) * (parseInt(count)||100)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }
}



function fun2(opration) {
    let result = document.getElementById('card2-quen')
    let resresult = document.getElementById('prise-result2')
    let value = 100
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||100) * (parseInt(count) ||100)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||100) * (parseInt(count)||100)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }
}



function fun3(opration) {
    let result = document.getElementById('card3-quen')
    let resresult = document.getElementById('prise-result3')
    let value = 100
    

    let count = parseInt(result.innerText)
    
    if (opration === "add" && count < 10 ) {
        ++count;
        result.innerText = count
        
       let total = (parseInt(value)||100) * (parseInt(count) ||100)
       resresult.innerText = `RS: ${total}`

   
     

    } else if (opration === "sub" && count >=2) {
        --count;
        result.innerText = count
                       let total = (parseInt(value)||100) * (parseInt(count)||100)
       resresult.innerText = `RS: ${total}`
    }
    else if (count == 1 && opration === "sub"){
        return
    }
}