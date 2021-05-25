const initialState = {
    products: [
        { name: 'Macbook pro', category: 'Electronics', price: 1200, inStock: 20, image: 'https://i.pcmag.com/imagery/reviews/0227QDT3xYwn3xEOpyiJpNU-1..1574212824.jpg' },
        { name: 'Lenovo', category: 'Electronics', price: 900, inStock: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS23Qni3o2uDkDiDdngik43ipnBqqLcNFAtg&usqp=CAU' },
        { name: 'samsung note 20 ultra', category: 'Electronics', price: 1000, inStock: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsV6JOHuunGGaqzG9-xxAgLKhPLfo8QrybHQ&usqp=CAU' },
        { name: 'Pizza', category: 'Food', price: 4, inStock: 15, image: 'https://www.glutenfreepalate.com/wp-content/uploads/2018/08/Gluten-Free-Pizza-3.2-480x360.jpg' },
        { name: 'Burger', category: 'Food', price: 7, inStock: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09QQpcy7GS2sjsM6ockQ3Kld3qMMPSaBwQw&usqp=CAU' },
        { name: 'Sushi', category: 'Food', price: 10, inStock: 110, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gnNoH8H9aHGT9-7NjxCn1YdsOBILklYioA&usqp=CAU' },
    ]
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    const { payload, type } = action;
    switch (type) {
        case 'ACTIVE':
            const productsActive = initialState.products.filter((product) => {
                return product.category === payload;
            })
            return { products: productsActive };
        case 'ADD':
            state.products = state.products.map((product) => {
                if (product.name === payload.name) {
                    if (product.inStock > 0) {

                        product.inStock--;
                    }
                    return product;
                } else {
                    return product;
                }
            });
            return { ...state };
        case 'DELETE':

            payload.product.inStock = payload.product.inStock + payload.product.count;
            payload.product.count = 0;
            if (payload.active === payload.product.category && payload.product.inStock === 0) {
                return { products: [...state.products, payload.product] };
            }
            return state;

        default:
            return state;
    }
};