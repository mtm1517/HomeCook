var initialState = [
    {
        id:1,
        name:'Pho Comfort Chicken',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/dru1dp7r2g3arpdbdbks',
        descirption:'Chicken bone broth, shredded all natural white chicken breast and vegetables. Gluten free.',
        price:14.95,
        rating : 3
    },
    {
        id:2,
        name:'Vegetarian Spring Roll',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/bemj3oecp59jijguzvvb',
        descirption:'Saute tofu, green beans, mushroom, leeks, onion, lettuce, mango, mint, bean sprout and rice noodle. Vegan.',
        price:9.95,
        rating : 4
    },
    {
        id:3,
        name:'Chicken Wings',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/dgfklf1mbum5der8cjba',
        descirption:'A classic Saigon street food',
        price:7.95,
        rating : 3
    },
    {
        id:4,
        name:'BBQ Pork Vermicelli Bowl',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/i6gqqqlgukvsa4laswsi',
        descirption:'BBQ all natural pork.',
        price:13.95,
        rating : 3
    },
    {
        id:5,
        name:'Segway Imperial Roll',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/bemj3oecp59jijguzvvb',
        descirption:'Original style, ground pork, egg, carrots, black mushrooms, taro roots and cellophane noodle. Wrapped in rice paper.',
        price:9.95,
        rating : 3
    },
    {
        id:6,
        name:'Pho Fanta-Sea',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/axbvoohyktjurofcvvdz',
        descirption:'Tiger prawns, chicken bone broth and vegetables. Gluten free.',
        price:17.95,
        rating : 4
    },
    {
        id:7,
        name:'Moped Mayhem Salad',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/t3kjjtuo9a3dttgh8nta',
        descirption:'Papaya and mango salad with grilled steak, carrot, mint and basil and peanut.',
        price:13.95,
        rating : 4
    },
    {
        id:8,
        name:'Garlic Noodle',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/htb1tdadm03zaxdqt0nj',
        descirption:'A side of garlic noodles.',
        price:6.95,
        rating : 4
    },
    {
        id:9,
        name:'Noisy Nostalgia Sandwich',
        image:'https://media-cdn.grubhub.com/image/upload/f_auto,fl_lossy,q_100,c_fill,w_376/urtara7dhjo3yxv3qpw7',
        descirption:'Grilled Black Angus Rib-eye steak. Served on an airy French baguette stuffed with homemade aioli, cucumber, tomatoes, carrot, cilantro, jalapeno, a side of edamame.',
        price:10.95,
        rating : 4
    },

];

const products = (state = initialState, action) =>{
    switch(action.type){
        default:return[...state];
    }
}

export default products;