import React, { FC } from 'react';

interface IProps {
    children: any;
}

const Row: FC<IProps> = ({ children }) => {
    return <div className="my-row" children={children} />;
};

export default Row;
