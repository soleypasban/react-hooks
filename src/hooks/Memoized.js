import React from 'react';
import { RenderCount } from 'hooks/RenderCount';

const MemoizedComponent = () => {
    return <RenderCount name='Memoized' />
}

export const Memoized = React.memo(MemoizedComponent)