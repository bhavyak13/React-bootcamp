import React, { useEffect, useRef } from 'react'

import data from '@emoji-mart/data'
import { Picker } from 'emoji-mart'

function EmojiPicker(props) {
    const ref = useRef()
    useEffect(() => {
        new Picker({ ...props, data, ref })
    }, [props]) 
    return <div ref={ref} />
}

export default EmojiPicker;

// render(<EmojiPicker onEmojiSelect={console.log} />, document.querySelector('#picker'))