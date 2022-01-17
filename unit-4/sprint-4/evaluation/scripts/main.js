async function apiCall(url) {

   try{
       let res =await fetch(url)

       let data =await res.json()

       return data
   }
   catch(err){
     console.log(error)
   }
    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(({title,description,image })=>{
          let div =document.createElement("div")
          
          let div2 =document.createElement("div")
          div2.onclick

          let titleof = document.createElement("h2")
          titleof.textContent =title
          
          let desc = document.createElement("p")
          desc.textContent =description

          let imag = document.createElement("img")
          imag.src =image
           div2.append(desc,imag)
           div2.style.display ="flex"
          div.append(titleof,div2)
          main.append(div)
    })

}

export { apiCall, appendArticles }