

let api = "https://sufyan615.github.io/RONDOM-IMAGE-API/index.json"

async function getApi(url){

    let response = await fetch (url)

    let data =await response .json()

    console.log(data)


    let img = ""

     data.forEach(element => {

        img += `
            <div class="card">
            <img src=${element.image_url} alt="">
            <p class="card-id">ID:${element.image_id}</p>
            <h3 class="card-title">${element.image_category} </h3>
            <p class="card-text"> ${element.image_description}</p>
               <a href="${element.image_url}">  <button class="buy-btn">Download</button>    </a>
          </div>
`

 

document.getElementById("alldata").innerHTML =img


    });


    
}
getApi(api)
