import React, { Component } from "react";

class IconList extends Component {
    static defaultProps = {
        options: [
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    };
    constructor(props) {
        super(props);
        this.state = { icons: ["bone", "cloud"] };
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon() {
        const randIndex = Math.floor(Math.random() * this.props.options.length);
        const option = this.props.options[randIndex];
        const newIcons = [...this.state.icons, option ];
        this.setState({ icons: newIcons });
    }
    render() {
        const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
        return (
            <div>
                <h1>Icons: {icons}</h1>
                <button onClick={this.addIcon}>Add New Icon</button>
            </div>
        );
    }
}

export default IconList;
