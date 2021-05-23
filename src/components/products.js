import React from 'react';
import { connect } from 'react-redux';
import Card from "@material-ui/core/Card";
import { Button, Grid } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";




function Products(props) {
    // console.log(props.active)
    return (
        <Grid item sm={5} >

            {props.products.map((product) => {
                if (props.active === product.category) {
                    return (
                        <Card
                            style={{ width: "300px", height: '300px', margin: '20px' }}
                            className={`cards ${product.name}`}
                            key={product.name}
                        >
                            <img alt={product.name} src={product.image} width="100" height="100"></img>
                            <CardMedia className={"img"} image={product.img} />
                            <CardContent>{product.name}</CardContent>
                            <CardContent>Price : {product.price}$</CardContent>
                            <CardContent>in Stock : {product.stock}</CardContent>
                            <section className="btnn">
                                <Button variant="light" style={{ color: 'white', background: 'black', margin: '5px 5px 5px' }}>ADD TO CART</Button>
                                <Button variant="light" style={{ color: 'white', background: 'black', margin: '5px 5px 5px' }}>VIEW DETAILS</Button>
                            </section>
                        </Card>

                    )
                } else {
                    return '';
                }
            })}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return { active: state.categories.active, products: state.products.products };
};


export default connect(mapStateToProps)(Products);