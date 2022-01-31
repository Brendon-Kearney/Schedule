const divRest=document.querySelector("#divRest")
const btnRest=document.querySelector("#btnRest")
const h2Name = document.querySelector("#h2Name")
const h2Address = document.querySelector("#h2Address")
const h2Borough = document.querySelector("#h2Borough")
const h2ZipCode = document.querySelector("#h2ZipCode")
const tClasses = document.querySelector("#tClasses")

btnRest.onclick = ()=>{
    console.log(pageSize)
    fetch("restaurant?pageSize=" + pageSize + "&pageNumber=" + pageNumber)
    .then(divRest.innerHTML="")
    .then(response => response.json())
    .then(data => render(data))
    .catch(error=>alert(error))

}

function render(data)
{
    data.forEach(data =>{
        const tClasses = document.createElement("table") // open closed tag
        let h2Name = document.createElement("h2")
        let h2Address = document.createElement("h2")
        let h2Borough = document.createElement("h2")
        let h2ZipCode = document.createElement("h2")

        h2Name.innerText = data.name;
        h2Address.innerText = data.address.building + " " + data.address.street + ","; // inside the open/close tag
        h2Borough.innerText = data.borough + ",";
        h2ZipCode.innerText = data.address.zipcode + " ";

        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")

        td.innerText = "Date"
        td2.innerText = "Score"
        td3.innerText = "Grade"

        tr.appendChild(td) // add javascript to html
        tr.appendChild(td2)
        tr.appendChild(td3)

        tClasses.appendChild(tr)

        data.grades.forEach(grades =>{
        
            let gtr = document.createElement("tr")
            let gtd = document.createElement("td")
            let gtd2 = document.createElement("td")
            let gtd3 = document.createElement("td")

            gtd.innerText = grades.date
            gtd2.innerText = grades.score
            gtd3.innerText = grades.grade

            gtr.appendChild(gtd)
            gtr.appendChild(gtd2)
            gtr.appendChild(gtd3)

            tClasses.appendChild(gtr)
            
        })

        divRest.appendChild(h2Name)
        divRest.appendChild(h2Address)
        divRest.appendChild(h2Borough)
        divRest.appendChild(h2ZipCode)
        divRest.appendChild(tClasses)
        document.body.appendChild(divRest)

    })
}