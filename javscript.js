const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}



































const closeBtn = document.querySelector('#closeBtn')
const modalBtn = document.querySelector('#modalBtn')
const modal = document.querySelector('.modal')


modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}

closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {
    // modal.classList.remove('open-modal')

    console.log(e.target)

    if(!e.target.closest('.modal')) {
        modal.classList.remove('open-modal')
    }

}












const logo = [
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3D Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    },
    {
        img:'./img/cards.png',
        name:'3Ddddd Soft Curves',
        comment:'Esther Howard',
        description:'Current Bid',
        price:'0.85 ETH',
    }
]




const box = document.querySelector('.box')






logo.forEach(card => {
    box.innerHTML += `
    
        <div class="card">
            <img src=${card.img} alt="">
            <h1>${card.name}</h1>
            <p>${card.comment}</p>
            <div class="flex">
                <h4>${card.description}</h4>
                <h3>${card.price}</h3>
            </div>
            
        </div>
        `
})



