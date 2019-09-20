import React from 'react';
import { useRef } from 'react';

const RenderCount = ({ name }) => {
    const renderRef = useRef(0)
    return <div className='c-render-counter'>{name}-renders: {++renderRef.current}</div>
}

export { RenderCount }