import React, { FC, ReactNode } from 'react';
import PairColumns from '../../PairColumns';

interface IProps {
    children: [ReactNode, ReactNode];
}

const ExampleBuilderItem: FC<IProps> = ({ children }) => {
    return (
        <PairColumns>
            <div>{children[0]}</div>
            <div>{children[1]}</div>
        </PairColumns>
    );
};

export default ExampleBuilderItem;
