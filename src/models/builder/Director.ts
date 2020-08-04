import { IBuilder } from './Builder';

interface IDirector {
    constructAuthorizationForm: (builder: IBuilder) => void;
    constructEntryForm: (builder: IBuilder) => void;
    constructAgreementForm: (builder: IBuilder) => void;
}

export class Director implements IDirector {
    constructAuthorizationForm = (builder: IBuilder) => {
        // prettier-ignore
        builder.resetComponent()
            .addTitle({titleForm: 'Форма регистрации', titleManual: 'Пояснения к форме регистрации'})
            .addTextField({label: 'Ваше имя'})
            .addTextField({label: 'Ваш номер телефона'});
    };

    constructEntryForm = (builder: IBuilder) => {
        builder
            .resetComponent()
            .addTitle({
                titleForm: 'Анкета',
                titleManual: 'Пояснения к Анкете',
            });
        // .addTextField()
        // .addTextField()
        // .addTextField()
        // .addTextField()
        // .addTextField()
        // .addTextField()
        // .addTextField();
    };

    constructAgreementForm = (builder: IBuilder) => {
        builder.resetComponent().addTextField();
    };
}
