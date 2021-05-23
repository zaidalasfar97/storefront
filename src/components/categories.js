import React from 'react';
import { connect } from 'react-redux';
import { activeCategory } from '../store/categories-reducer';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';


function Categories(props) {

    return (
        <>
            <p style={{ marginLeft: '20px', fontSize: '30px' }}>Browse our Categories</p>
            {props.categories.map(category => {
                return (
                    <ButtonBase key={category.name} onClick={() => props.activeCategory(category.name)} style={{ marginLeft: '30px', color: 'blue' }}>
                        <Typography>{category.displayName}</Typography>

                    </ButtonBase>
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
        active: state.categories.active
    };
};

const mapDispatchToProps = { activeCategory };



export default connect(mapStateToProps, mapDispatchToProps)(Categories);