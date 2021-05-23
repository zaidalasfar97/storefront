const initialState = {
    products: [
        { name: 'Macbook pro', category: 'Electronics', price: 1200, stock: 20, image: 'https://i.pcmag.com/imagery/reviews/0227QDT3xYwn3xEOpyiJpNU-1..1574212824.jpg' },
        { name: 'Lenovo', category: 'Electronics', price: 900, stock: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS23Qni3o2uDkDiDdngik43ipnBqqLcNFAtg&usqp=CAU' },
        { name: 'samsung note 20 ultra', category: 'Electronics', price: 1000, stock: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsV6JOHuunGGaqzG9-xxAgLKhPLfo8QrybHQ&usqp=CAU' },
        { name: 'Shawerma', category: 'Food', price: 4, stock: 15, image: 'https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg' },
        { name: 'Burger', category: 'Food', price: 7, stock: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09QQpcy7GS2sjsM6ockQ3Kld3qMMPSaBwQw&usqp=CAU' },
        { name: 'Sushi', category: 'Food', price: 10, stock: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gnNoH8H9aHGT9-7NjxCn1YdsOBILklYioA&usqp=CAU' },
    ]
}


// eslint-disable-next-line import/no-anonymous-default-export
const productsReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            let product = state.products.filter((product) =>
                product.category === payload ? product.category : null
            );
            return { ...state, product: product };
        default:
            return state;
    }
};

export default productsReducer;