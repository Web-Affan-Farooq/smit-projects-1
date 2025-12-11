let data = null
let lanthanide = null
let actinide = null

function createblock(element) {
    const td = document.createElement("td")
     
    // _______ Create child nodes ...
    const symbol = document.createElement("div")
    const atmNum = document.createElement("div")
    const name= document.createElement("div")
    const details = document.createElement("div")

    // _______ Attach classes ...
    symbol.style = "font-weight:bold;"
    atmNum.style = "font-size:11px;"
    name.style = "font-size:10px;"

    details.classList.add("details")

    const elData = [`Name :${element.name}`, `Atomic Number ${element.atomicNumber}`, `Atomic Mass : ${element.atomicMass}`]

    elData.forEach((e) => {
        const d = document.createElement("div")
        d.textContent = e
        details.appendChild(d)
    })

    symbol.innerText = element.symbol
    name.innerText = element.name
    atmNum.innerText = element.atomicMass
    
    td.appendChild(symbol)
    td.appendChild(atmNum)
    td.appendChild(name)
    td.appendChild(details)
    return td
}

async function main() {
    try {
        const response = {
            main:await fetch("./main.json").then((data) => {
                return data.json()
            }),
            lanthanide:await fetch("./lanthanide.json").then((data) => {
                return data.json()
            }),
            actinide:await fetch("./actinide.json").then((data) => {
                return data.json()
            })
        }

        data = response.main;
        lanthanide = response.lanthanide
        actinide = response.actinide
    } catch (err) {
        console.error("Failed to fetch data:", err)
    }
    
    const table = document.querySelector(".main")

    const lanthanide_row = document.querySelector(".lanthanide-row")
    const actinide_row = document.querySelector(".actinide-row")

    lanthanide.forEach((l) => {
        if(l === null) {
            const td = document.createElement("td")
            td.colSpan = 2
            td.style = "border:none"
            lanthanide_row.appendChild(td)
        }
        else {
            const td = createblock(l)
        lanthanide_row.appendChild(td)
        }
    })

    actinide.forEach((l) => {
        if(l === null) {
            const td = document.createElement("td")
            td.colSpan = 2
            td.style = "border:none"
            actinide_row.appendChild(td)
        }
        else {
            const td = createblock(l)
        actinide_row.appendChild(td)
        }
    })


data.forEach((tr) => {    
    const row = document.createElement("tr")

    tr.elements.forEach((el) => {
        if(el === null) {
            const block = document.createElement("td")
            block.style = "border:none;"
            row.appendChild(block)
        }
        else {
            const block = createblock(el)
        row.appendChild(block)
        // console.log(block)
        }
    })
    table.appendChild(row)
})
}

main()