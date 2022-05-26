import React from 'react'
import DragableColorBox from './DragableColorBox';
import { SortableContainer } from "react-sortable-hoc";

const DragableColorBoxList=SortableContainer((props)=> {
    const { colors, deleteColor } = props;
    return (
        <div style={{ height: '100%' }}>
            {colors.map((color,i) => (
                <DragableColorBox
                    key={color.name}
                    name={color.name}
                    background={color.color}
                    deleteColor={deleteColor}
                    index={i}
                />
            ))}
        </div>
    )
})
export default DragableColorBoxList;