import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
        }
        this.addBox = this.addBox.bind(this);
    }
    addBox(box) {
        const newBox = {
            id: uuid(),
            width: parseInt(box.width),
            height: parseInt(box.height),
            backgroundColor: box.backgroundColor,
        };
        this.setState(prevState => ({
            boxes: [...prevState.boxes, newBox],
        }))
    }
    removeBox = (id) => {

        this.setState(prevState => ({
            boxes: prevState.boxes.filter(box => (box.id !== id))
        }))
    }
    render() {
        return (
            <div>
                <h1>Boxes!!</h1>
                {this.state.boxes.map(box => (
                    <Box key={box.id}
                        id={box.id}
                        width={box.width}
                        height={box.height}
                        backgroundColor={box.backgroundColor}
                        removeBox={this.removeBox}
                    />
                ))}
                <NewBoxForm addBox={this.addBox} />
            </div>
        )
    }
}
export default BoxList;