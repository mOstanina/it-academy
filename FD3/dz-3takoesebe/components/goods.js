import React from 'react';
import PropTypes from 'prop-types';

class Products extends React.Component {
    static propTypes = {
        productName: PropTypes.string.isRequired,
        code: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        selectedProductCode: PropTypes.number,
        cbDelete: PropTypes.func.isRequired,
        cbClicked: PropTypes.func.isRequired,
        className: PropTypes.string.isRequired,
        clickedProduct: PropTypes.number,
        cssClassNotSelect: PropTypes.string.isRequired,
        cssClassSelect: PropTypes.string.isRequired,
    };
    productClickedForDelete = (EO) => {
        EO.stopPropagation();
        this.props.cbDelete(this.props.code);
    }
    productClicked = (EO) => {
        this.props.cbClicked(this.props.code);
    }
    render() {
        if (this.props.code !== this.props.clickedProduct) {
            return (
                <div className={this.props.cssClassNotSelect} onClick={this.productClicked}>
                    <div className='ProductName'>{this.props.productName}</div>
                    <div className='price'>{this.props.price}</div>
                    <div className='url'>{this.props.url}</div>
                    <div className='Count'>{this.props.count}</div>
                    <input type='button' value='delete' onClick={this.productClickedForDelete} />
                </div>
            )
        } else {
            return (
                <div className={this.props.cssClassSelect} onClick={this.productClicked}>
                    <div className='ProductName'>{this.props.productName}</div>
                    <div className='price'>{this.props.price}</div>
                    <div className='url'>{this.props.url}</div>
                    <div className='Count'>{this.props.count}</div>
                    <input type='button' value='delete' onClick={this.productClickedForDelete} />
                </div>
            );
        }
    }
}

export default Products;


//////////////
// console.log(this.props.match.params.list)
// let shortistOfAllSongs
// if (this.props.match.params.list === undefined || this.props.match.params.list === "10") {
//   console.log("!!!")
//   shortistOfAllSongs = this.props.songs.slice(0, 9)
//   console.log(shortistOfAllSongs)
// }else if (this.props.match.params.list === "20"){
//   shortistOfAllSongs = this.props.songs.slice(10, 18)
//   console.log(shortistOfAllSongs)
// }else if (this.props.match.params.list === "30"){
//   shortistOfAllSongs = this.props.songs.slice(19, 27)
//   console.log(shortistOfAllSongs)
// }else if (this.props.match.params.list === "40"){
//   shortistOfAllSongs = this.props.songs.slice(28, 36)
//   console.log(shortistOfAllSongs)
// }else if (this.props.match.params.list === "30"){
//   shortistOfAllSongs = this.props.songs.slice(37, 45)
//   console.log(shortistOfAllSongs)
// }else if (this.props.match.params.list === "30"){
//   shortistOfAllSongs = this.props.songs.slice(46, 56)
//   console.log(shortistOfAllSongs)
// }