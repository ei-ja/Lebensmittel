function add(){
    let Name = document.getElementById('name').value
    let Menge = document.getElementById('menge').value
    if (localStorage.getItem(Name) == null){
        localStorage.setItem(Name, Menge)
    }else{
        let IntMenge1 = parseInt(Menge)
        let IntMenge2 = parseInt(localStorage.getItem(Name))
        let IntMenge = IntMenge1 + IntMenge2
        let StringMenge = String(IntMenge)
        localStorage.setItem(Name, StringMenge)
    }
    alert("Saved!")
}

function remove(){
    let Name = document.getElementById('name').value
    let Menge = document.getElementById('menge').value
    if (localStorage.getItem(Name) == null){
        alert("Noch nichts von diesem Lebensmittel vorhanden!")
    }else{
        let IntMenge1 = parseInt(localStorage.getItem(Name))
        let IntMenge2 = parseInt(Menge)
        let IntMenge = IntMenge1 - IntMenge2
        let StringMenge = String(IntMenge)
        if (IntMenge < 0){
            alert("Es ist zu wenig vom Lebensmittel da, um alles abzuziehen!")
        }else{
            localStorage.setItem(Name, StringMenge)
        }
        
    }
    alert("Saved!")
}

function spend(){
    i = 1
    for (let element in localStorage){
        if (i > localStorage.length){
            break
        }
        document.getElementById('spender').innerHTML = document.getElementById('spender').innerHTML + element + ": " + localStorage.getItem(element) + "<br>"
        i++
    }
}