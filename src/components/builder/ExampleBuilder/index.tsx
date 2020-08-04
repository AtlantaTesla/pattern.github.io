import React, { FC } from 'react';
import ExampleBuilderItem from '../ExampleBuilderItem';
import { BuilderForm, BuilderManual } from '../../../models/builder/Builder';
import { Director } from '../../../models/builder/Director';

interface IProps {}

const ExampleBuilder: FC<IProps> = () => {
    const list: Array<any> = [];
    const builderForm = new BuilderForm();
    const builderManual = new BuilderManual();
    const director = new Director();

    director.constructAuthorizationForm(builderForm);
    director.constructAuthorizationForm(builderManual);
    list.push([builderForm.getResult(), builderManual.getResult()]);

    director.constructEntryForm(builderForm);
    director.constructEntryForm(builderManual);
    list.push([builderForm.getResult(), builderManual.getResult()]);

    director.constructAgreementForm(builderForm);
    director.constructAgreementForm(builderManual);
    list.push([builderForm.getResult(), builderManual.getResult()]);

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <ExampleBuilderItem key={index}>{item}</ExampleBuilderItem>
                );
            })}
        </div>
    );
};

export default ExampleBuilder;
