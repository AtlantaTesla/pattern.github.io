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
            .addTextField({label: 'Ваше имя', helper: 'Введите пожалуйста ваше имя в полной форме'})
            .addTextField({label: 'Ваш номер телефона', helper: 'Номер телефона начинается с +7'});
    };

    constructEntryForm = (builder: IBuilder) => {
        builder.resetComponent().addTitle({
            titleForm: 'Анкета',
            titleManual: 'Пояснения к Анкете',
        });
    };

    constructAgreementForm = (builder: IBuilder) => {
        builder.resetComponent().addTextField({
            label: 'Ваш номер телефона',
            helper:
                'Отправив нам свой номер, Вы даёте согласие на передачу ваших сбережений в 3-х литровом баллоне фонду защиты коал',
        });
    };
}
