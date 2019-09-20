import React, { useState } from 'react';
import { UseStateHook } from 'hooks/UseStateHook';
import { RenderCount } from 'hooks/RenderCount';

const UseEffectHook = () => {
    const [isVisible, setFormVisibility] = useState(true)
    return (
        <>
            <RenderCount name='UseEffectHook' />
            <button onClick={() => setFormVisibility(!isVisible)}>Toggle Form</button>
            {isVisible && <UseStateHook />}
        </>
    );
}

export { UseEffectHook }