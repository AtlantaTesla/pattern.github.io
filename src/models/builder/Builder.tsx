import { TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import Row from '../../components/Row/ExampleBuilder';

interface IBaseBuilder {
    getResult: () => Array<any>;
    resetComponent: () => this;
}

export interface IBuilder extends IBaseBuilder {
    addTextField: (props?: any) => this;
    addTitle: (props: { titleForm: string; titleManual: string }) => this;
}

abstract class Builder implements IBaseBuilder {
    protected componentList: any = [];

    public getResult = () => this.componentList;

    public resetComponent = () => {
        this.componentList = [];
        return this;
    };
}

export class BuilderForm extends Builder implements IBuilder {
    public addTitle = ({
        titleForm,
    }: {
        titleForm: string;
        titleManual: string;
    }) => {
        this.componentList.push(<h2>{titleForm}</h2>);
        return this;
    };

    public addTextField = (props?: any) => {
        const component = (
            <Row>
                <TextField {...props} />
            </Row>
        );
        this.componentList.push(component);
        return this;
    };
}

export class BuilderManual extends Builder implements IBuilder {
    public addTitle = ({
        titleManual,
    }: {
        titleForm: string;
        titleManual: string;
    }) => {
        this.componentList.push(<h2>{titleManual}</h2>);
        return this;
    };

    addTextField = (props?: any) => {
        const component = (
            <Row>
                <Alert severity="info" {...props} />
            </Row>
        );
        this.componentList.push(component);
        return this;
    };
}
