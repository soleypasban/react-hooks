import React from 'react';
import { UseStateHook } from 'hooks/UseStateHook';
import { RenderCount } from 'hooks/RenderCount';

const UseEffectHook = () => {

    return (
        <>
            <RenderCount name='UseEffectHook' />
            <UseStateHook />
        </>
    );
}

export { UseEffectHook }