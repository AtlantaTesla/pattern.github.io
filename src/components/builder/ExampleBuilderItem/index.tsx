import React, { FC, ReactNode } from 'react';
import PairColumns from '../../PairColumns';
import Row from '../../Row/ExampleBuilder';

interface IProps {
    children: [Array<any>, Array<any>];
}

const ExampleBuilderItem: FC<IProps> = ({ children }) => {
    const getListElement = (item: any, index: any) => {
        return <Row key={index}>{item}</Row>;
    };

    return (
        <PairColumns>
            <div>{children[0].map(getListElement)}</div>
            <div>{children[1].map(getListElement)}</div>
        </PairColumns>
    );
};

export default ExampleBuilderItem;
