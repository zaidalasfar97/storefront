import React from 'react';
import { connect } from 'react-redux';
import { If } from 'react-if'
import Card from "@material-ui/core/Card";
import { Button, Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { addProduct } from '../store/cart-reducer';


const mapStateToProps = (state) => {
    return { products: state.products.products, active: state.categories.active };
};
const mapDispatchToProps = { addProduct };

function Products(props) {
    // console.log(props.active)
    return (
        <>
            <Grid item sm={5} style={{
                display: 'grid',
                gridColumnGap: '60px',
                gridTemplateColumns: 'auto auto auto',
                margin: '20px',
            }}>
                {props.products.map((product, index) => {

                    product.index = index;

                    return (
                        <If key={product.name} condition={props.active !== ''}>
                            <Card
                                style={{ width: "300px", height: '300px', margin: '20px', float: 'left' }}
                                className={`cards ${product.name}`}
                                key={product.name}
                            >
                                <img alt={product.name} src={product.image} width="110" height="110" style={{ marginLeft: '90px' }} ></img>
                                <CardMedia className={"img"} image={product.img} />
                                <CardContent style={{ fontSize: '15px', margin: 'auto', padding: '10px' }}>{product.name}</CardContent>
                                <CardContent style={{ fontSize: '15px', margin: 'auto', padding: '10px' }}>Price : {product.price}$</CardContent>
                                <CardContent style={{ fontSize: '15px', margin: 'auto', padding: '10px' }}>in Stock : {product.inStock}</CardContent>
                                <section className="btnn">
                                    <Button onClick={() => props.addProduct(product)} variant="light" style={{ color: 'white', background: 'black', margin: '5px 5px 5px' }}>ADD TO CART</Button>
                                    <Button variant="light" style={{ color: 'white', background: 'black', margin: '5px 5px 5px' }}>VIEW DETAILS</Button>
                                </section>
                            </Card>
                        </If>

                    )
                })}
            </Grid>
        </>
    )
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return { active: state.categories.active, products: state.products.products };
// };

// const mapDispatchToProps = { addProduct };


export default connect(mapStateToProps, mapDispatchToProps)(Products);