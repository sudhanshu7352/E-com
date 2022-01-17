function storeSearchterm(term) {
   localStorage.setItem("news",JSON.stringify(term))
   
}

export default storeSearchterm