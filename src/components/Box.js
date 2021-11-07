import React from "react"

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6" style={{ fontSize: "40px", color: this.props.color }}>
                <span className="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
            </div>
        );
    }
}

export default Box;