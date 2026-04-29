
let product_list=""
async function getallproducts(){
    let product_response=await fetch("https://dummyjson.com/products",
        {
            method:"GET"
        }
    )
    let data=await product_response.json()
    for(let prod of data.products){
    product_list=product_list+`<div class="card" style="width: 18rem;">
  <img src="${prod.thumbnail}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${prod.title}</h5>
    <p class="card-text">${prod.des}</p>
    <a href="#" class="btn btn-danger
    ">Go somewhere</a>
  </div>
</div>`

}
document.getElementById("result").innerHTML=product_list
}

getallproducts()

thumbnail
