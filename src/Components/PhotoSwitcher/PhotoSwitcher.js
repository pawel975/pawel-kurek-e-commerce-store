import { Component } from "react";
import "./PhotoSwitcher.scss";

class PhotoSwitcher extends Component {

    constructor(props){
        super(props)
        this.handleActivePhotoIndexIncrement = this.props.handleActivePhotoIndexIncrement;
        this.handleActivePhotoIndexDecrement = this.props.handleActivePhotoIndexDecrement;
    }

    render(){
        return (
            <div className="photo-switcher">
                <button 
                    className="photo-switcher__prev"
                    onClick={this.handleActivePhotoIndexDecrement}
                >
                    <img src="/assets/img/dash-left.svg" alt="dash left"/>
                </button>
                <button 
                    className="photo-switcher__next"
                    onClick={this.handleActivePhotoIndexIncrement(this.props.photoCount)}
                >    
                    <img src="/assets/img/dash-right.svg" alt="dash right"/>
                </button>
            </div>
        )
    }
}

export default PhotoSwitcher;