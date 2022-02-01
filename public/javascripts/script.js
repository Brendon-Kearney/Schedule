const divRest=document.querySelector("#divRest")
const btnRest=document.querySelector("#btnRest")
const h2Day = document.querySelector("#h2Day")
const tClasses = document.querySelector("#tClasses")

var day = ""

btnRest.onclick = ()=>{
    console.log(day)
    fetch("class?day=" + day)
    .then(divRest.innerHTML="")
    .then(response => response.json())
    .then(data => render(data))
    .catch(error=>alert(error))

}

function render(data)
{
    data.forEach(data =>{
        const tClasses = document.createElement("table") // open closed tag
        let h2Day = document.createElement("h2")

        h2Day.innerText = data.day;

        let tr = document.createElement("tr")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")

        td2.innerText = "Class"
        td3.innerText = "StartTime"
        td4.innerText = "EndTime"
        td5.innerText = "RoomNumber"
        td6.innerText = "AlternativeDelivery"

        // add javascript to html
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.appendChild(td6)

        tClasses.appendChild(tr)

        data.classes.forEach(classes =>{
        
            let gtr = document.createElement("tr")
            let gtd2 = document.createElement("td")
            let gtd3 = document.createElement("td")
            let gtd4 = document.createElement("td")
            let gtd5 = document.createElement("td")
            let gtd6 = document.createElement("td")

            gtd2.innerText = classes.class
            gtd3.innerText = classes.start_time
            gtd4.innerText = classes.end_time
            gtd5.innerText = classes.room_number
            gtd6.innerText = classes.alternative_delivery

            gtr.appendChild(gtd2)
            gtr.appendChild(gtd3)
            gtr.appendChild(gtd4)
            gtr.appendChild(gtd5)
            gtr.appendChild(gtd6)

            tClasses.appendChild(gtr)
            
        })

        divRest.appendChild(h2Day)
        divRest.appendChild(tClasses)
        document.body.appendChild(divRest)

    })
}