const cardSection = document.querySelector('.cards-section');
const link = document.querySelectorAll('.card-link li');
const product = [
    {img:"/img/redbull.jpg",name:"Red Bull", type:"Drinks",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"3$"},
    {img:"/img/meat.jpg",name:"Mutton", type:"Meats",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"10$"},
    {img:"/img/frut.jpg",name:"Green Grape", type:"Fruts",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"1$"},
    {img:"/img/drink1.jpg",name:"Coca Cola", type:"Drinks",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"2$"},
    {img:"/img/banana.jpg",name:"Banana", type:"Fruts",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"3$"},
    {img:"/img/cocos.jpg",name:"Cocos", type:"Fruts",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"6$"},
    {img:"/img/monster.jpg",name:"Monster", type:"Drinks",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"4$"},
    {img:"/img/frut1.jpg",name:"Cherry", type:"Fruts",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"2$"},
    {img:"/img/frut2.jpg",name:"Pomegranate", type:"Fruts",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"2$"},
    {img:"/img/drink.jpg",name:"Orange juce", type:"Drinks",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"1$"},
    {img:"/img/onion.jpg",name:"Onion", type:"Vegetables",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"3$"},
    {img:"/img/drink2.jpg",name:"Dark Vine", type:"Drinks",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"10$"},
    {img:"/img/chicken.jpg",name:"Chicken", type:"Meats",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"5$"},
    {img:"/img/tomato.jpg",name:"Tomato", type:"Vegetables",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"0.4$"},
    {img:"/img/meat2.jpg",name:"Beef", type:"Meats",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"12$"},
    {img:"/img/fanta.jpg",name:"Fanta", type:"Drinks",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"2$"},
    {img:"/img/spices1.jpg",name:"Caraway", type:"Spices",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"0.7$"},
    {img:"/img/spices2.jpg",name:"Bay leaves", type:"Spices",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"0.3$"},
    {img:"/img/cabbage.jpg",name:"Cabbage", type:"Vegetables",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"0.4$"},
    {img:"/img/spices.jpg",name:"Cumin", type:"Spices",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"0.5$"},
    {img:"/img/radish.jpg",name:"Garden Radish", type:"Vegetables",info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eveniet sint nobis sed harum obcaecati ullam quaerat laboriosam cum dolorem pariatur similique.`,prise:"2$"},
]




for(let i = 0; i < product.length; i++){
    let card = document.createElement("div");
    card.classList.add("card");
card.innerHTML = `
  <div class="img"><img src= ${product[i].img} alt="" /></div>
    <div class="details">
      <div class="type">
        <p class="name">${product[i].name}</p>
        <p class="type-text">${product[i].type}</p>
    </div>
     <p class="info">
     ${product[i].info}
     </p>
    <div class="bottom">
       <div class="prise">${product[i].prise}</div>
       <button class="btn">Buy</button>
    </div>
`
cardSection.appendChild(card);
}

const card = document.querySelectorAll('.card');

for(let i = 0; i < link.length; i++){
    link[i].addEventListener('click',() => {
        link.forEach(li => li.classList.remove('active'))
        link[i].classList.add('active'); 
        let value = link[i].dataset.filter;
        for(let e = 0; e < product.length; e++){
            if(value === 'all'){
                card[e].style.display = "";
            }
            else if(product[e].type === value){  
                card[e].style.display = "";
            }
            else{
                card[e].style.display = "none";
            }
        }
       
    })
}



const names = document.querySelectorAll('.name');
const searchInput = document.querySelector('.search-input');


function search(){
    let searchValue = searchInput.value.toUpperCase();
    for(let i = 0; i < names.length; i++){
        let nameValue = names[i].innerHTML || names[i].textContent;
       if(nameValue.toUpperCase().indexOf(searchValue) > -1){
           card[i].style.display = ''
       }
       else{
        card[i].style.display = 'none'
       }
    }
}




