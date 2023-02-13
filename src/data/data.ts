export type TrainingPlanType = {
    task1: string,
    task2: string;
    task3?: string;
    warmUpMonths?: string
};

export type TrainingPlansType = {
    [key: string]: TrainingPlanType
}

//INTRO

export const weekTrainingPlansIntro: TrainingPlansType = {
    'неделя А': {
        task1: 'Бедра',
        task2: 'Рогатка',
        warmUpMonths: 'неделя А',
    },
    'неделя Б': {
        task1: 'Стойки',
        task2: 'Рогатка',
        warmUpMonths: 'неделя Б',
    },
    'неделя В': {
        task1: 'Распор',
        task2: 'Коленные зацепы',
        warmUpMonths: 'неделя В',
    },
};

//FIT 1

export const warmUpWithPolePlanFit1: TrainingPlansType = {
    'январь-февраль': {
        task1: 'стульчик на статике',
        task2: 'рогатки с коленным зацепом и подъемом наверх',
        task3: 'тюльпан в статике на статике',
    },
    'март-апрель': {
        task1: 'стульчик на статике',
        task2: 'рогатки подряд – подъем и опускание, силой',
        task3: 'тюльпан во вращении на статике',
    }
};


export const weekTrainingPlansFit1: TrainingPlansType = {
    '06.02-12.02': {
        task1: '',
        task2: '',
        task3: '',
        warmUpMonths: 'январь-февраль',
    },
    '13.02-19.02': {
        task1: 'Инста-штучка',
        task2: 'Карандашик',
        task3: 'Китайский флаг',
        warmUpMonths: 'январь-февраль',
    },
    '20.02-26.02': {
        task1: 'Кокон',
        task2: 'Обрыв в журавлике',
        task3: 'Флаг',
        warmUpMonths: 'январь-февраль',
    },
    '27.02-05.03': {
        task1: 'Крутка чашечкой',
        task2: 'Комбо',
        task3: 'СФП',
        warmUpMonths: 'март-апрель',
    },
    '06.03-12.03': {
        task1: 'Брассманки',
        task2: 'Стойка полуфлаговая',
        task3: 'Шпагат Джамиллы',
        warmUpMonths: 'март-апрель',
    },
    '13.03-19.03': {
        task1: 'ДУЭТЫ',
        task2: 'СФП',
        warmUpMonths: 'март-апрель',
        // task3: '33',
    },
    '20.03-26.03': {
        task1: 'Инста-штучка',
        task2: 'Шпагат грудью вверх',
        task3: 'Обрыв в бедра',
        warmUpMonths: 'март-апрель',
    },
    '27.03-02.04': {
        task1: 'Крутка с вылетом',
        task2: 'Супермен ',
        task3: 'Флаг',
        warmUpMonths: 'март-апрель',
    },
    '03.04-09.04': {
        task1: 'Комбо',
        task2: 'Стойка спиной к пилону',
        task3: 'СФП',
        warmUpMonths: 'март-апрель',
    },
};

//FIT 2

export const warmUpWithPolePlanFit2: TrainingPlansType = {
    'январь-февраль': {
        task1: 'Раскачка с подъемом',
        task2: 'Шоудеры с выходом в коленный зацеп',
        task3: 'Тюльпан во флаг',
    },
    'март-апрель': {
        task1: 'Крутка солдатик',
        task2: 'Шоулдеры силой, подъемы и опускания',
        task3: 'Крутка тюльпан на статике с прыжком во флаг ',
    }
};


export const weekTrainingPlansFit2: TrainingPlansType = {
    '06.02-12.02': {
        task1: 'Оборот в балерину/бедра',
        task2: 'Опасный мост',
        task3: 'Икс/тейбл-топ',
        warmUpMonths: 'январь-февраль',
    },
    '13.02-19.02': {
        task1: 'Титаник',
        task2: 'Флаг',
        task3: 'Стойка силовая',
        warmUpMonths: 'январь-февраль',
    },
    '20.02-26.02': {
        task1: 'Крутка с двойным облетом',
        task2: 'Комбо',
        task3: 'Бланшики',
        warmUpMonths: 'январь-февраль',
    },
    '27.02-05.03': {
        task1: 'Флаг цирковой',
        task2: 'Динамика в шоулдере/перехваты',
        task3: 'Джамилла',
        warmUpMonths: 'март-апрель',
    },
    '06.03-12.03': {
        task1: 'Китайский шпагат',
        task2: 'Рондат',
        task3: 'Икс/тейбл-топ',
        warmUpMonths: 'март-апрель',
    },
    '13.03-19.03': {
        task1: 'ДУЭТЫ',
        task2: 'СФП',
        warmUpMonths: 'март-апрель',
        // task3: '33',
    },
    '20.03-26.03': {
        task1: 'Крутка в шоулдер',
        task2: 'Флаг',
        task3: 'Инста-штучка',
        warmUpMonths: 'март-апрель',
    },
    '27.03-02.04': {
        task1: 'Комбо',
        task2: 'Силовые опускания/подъемы',
        task3: 'Стойка флажковая',
        warmUpMonths: 'март-апрель',
    },
    '03.04-09.04': {
        task1: 'Машин Ган',
        task2: 'Задняя аиша',
        task3: 'Стойка силовая',
        warmUpMonths: 'март-апрель',
    },
};