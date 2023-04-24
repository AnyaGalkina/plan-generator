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
    // 'январь-февраль': {
    // task1: 'стульчик на статике',
    // task2: 'рогатки с коленным зацепом и подъемом наверх',
    // task3: 'тюльпан в статике на статике',
    // },
    'март-апрель': {
        task1: 'стульчик на статике',
        task2: 'рогатки подряд – подъем и опускание, силой',
        task3: 'тюльпан во вращении на статике',
    },
    'май-июнь': {
        task1: 'стульчик на крутяшке',
        task2: 'рогатки на крутяшке',
        task3: 'тюльпан на крутяшке',
    }
};


export const weekTrainingPlansFit1: TrainingPlansType = {
    '17.04-23.04': {
        task1: 'Перевернутый бильман',
        task2: 'Инста-штучка',
        task3: 'Стойка боковая',
        warmUpMonths: 'март-апрель',
    },
    '24.04-30.04': {
        task1: 'Шпагат Джамиллы',
        task2: 'Карандашик',
        task3: 'Флаг',
        warmUpMonths: 'март-апрель',
    },
    '01.05-07.05': {
        task1: 'Крутка чашечкой',
        task2: 'Комбо',
        task3: 'СФП',
        warmUpMonths: 'май-июнь',
    },
    '08.05-14.05': {
        task1: 'Купидон',
        task2: 'Стойка лопатками к пилону на двух руках',
        task3: 'Флаг',
        warmUpMonths: 'май-июнь',
    },
    '15.05-21.05': {
        task1: 'Инста-штучка',
        task2: 'Разворот в балерину на статике',
        task3: 'Китайский флаг',
        warmUpMonths: 'май-июнь',
    },
    '22.05-28.05': {
        task1: 'Крутка с вылетом',
        task2: 'Шпагат аллегры',
        task3: 'Супермен',
        warmUpMonths: 'май-июнь',
    },
    '29.05-04.06': {
        task1: 'Комбо',
        task2: 'Стойка полуфлаговая',
        task3: 'СФП',
        warmUpMonths: 'май-июнь',
    },
    '05.06-11.06': {
        task1: 'Крутка чашечкой',
        task2: 'Мост',
        task3: 'Оттяжка',
        warmUpMonths: 'май-июнь',
    },
    '12.06-18.06': {
        task1: 'Инста-штучка',
        task2: 'Питер пен',
        task3: 'Стойка спиной к пилону',
        warmUpMonths: 'май-июнь',
    },
    '19.06-25.06': {
        task1: 'Поперечка (складка/шпагат)',
        task2: 'Смена бока в висе',
        task3: 'Флаг',
        warmUpMonths: 'май-июнь',
    },
    '26.06-02.07': {
        task1: 'Крутка с вылетом',
        task2: 'Комбо',
        task3: 'СФП',
        warmUpMonths: 'май-июнь',
    },


    // '06.02-12.02': {
    //     task1: '',
    //     task2: '',
    //     task3: '',
    //     warmUpMonths: 'январь-февраль',
    // },
    // '13.02-19.02': {
    //     task1: 'Инста-штучка',
    //     task2: 'Карандашик',
    //     task3: 'Китайский флаг',
    //     warmUpMonths: 'январь-февраль',
    // },
    // '20.02-26.02': {
    //     task1: 'Кокон',
    //     task2: 'Обрыв в журавлике',
    //     task3: 'Флаг',
    //     warmUpMonths: 'январь-февраль',
    // },
    // '27.02-05.03': {
    //     task1: 'Крутка чашечкой',
    //     task2: 'Комбо',
    //     task3: 'СФП',
    //     warmUpMonths: 'март-апрель',
    // },
    // '06.03-12.03': {
    //     task1: 'Брассманки',
    //     task2: 'Стойка полуфлаговая',
    //     task3: 'Шпагат Джамиллы',
    //     warmUpMonths: 'март-апрель',
    // },
    // '13.03-19.03': {
    //     task1: 'Комбо',
    //     task2: 'СФП',
    //     warmUpMonths: 'март-апрель',
    //     // task3: '33',
    // },
    // '20.03-26.03': {
    //     task1: 'Инста-штучка',
    //     task2: 'Шпагат грудью вверх',
    //     task3: 'Обрыв в бедра',
    //     warmUpMonths: 'март-апрель',
    // },
    // '27.03-02.04': {
    //     task1: 'Крутка с вылетом',
    //     task2: 'Супермен ',
    //     task3: 'Флаг',
    //     warmUpMonths: 'март-апрель',
    // },
    // '03.04-09.04': {
    //     task1: 'Комбо',
    //     task2: 'Стойка спиной к пилону',
    //     task3: 'СФП',
    //     warmUpMonths: 'март-апрель',
    // },
};

//FIT 2

export const warmUpWithPolePlanFit2: TrainingPlansType = {
    // 'январь-февраль': {
    //     task1: 'Раскачка с подъемом',
    //     task2: 'Шоудеры с выходом в коленный зацеп',
    //     task3: 'Тюльпан во флаг',
    // },
    'март-апрель': {
        task1: 'Крутка солдатик на статике',
        task2: 'Шоулдеры силой, подъемы и опускания',
        task3: 'Крутка феникс (облёт в тюльпан и флаг)',
    },
    'май-июнь': {
        task1: 'Солдатик на крутяхе',
        task2: 'Шоулдеры с раскачки в группировку',
        task3: 'Облет во флаг на статике',
    },
    // 'июль-август': {
    //     task1: 'Раскачка с подъемом',
    //     task2: 'Шоудеры с выходом в коленный зацеп',
    //     task3: 'Тюльпан во флаг',
    // }
};


export const weekTrainingPlansFit2: TrainingPlansType = {
    '17.04-23.04': {
        task1: 'Прыжок из журавля/свечки',
        task2: 'Флаг',
        task3: 'Инста-штучка',
        warmUpMonths: 'март-апрель',
    },
    '24.04-30.10': {
        task1: 'Комбо',
        task2: 'Стойка флажковая',
        task3: 'Силовые опускания/выходы',
        warmUpMonths: 'март-апрель',
    },
    '01.05-07.05': {
        task1: 'Крутка с двойным облетом',
        task2: 'Пегас',
        task3: 'Инста-штучка',
        warmUpMonths: 'май-июнь',
    },
    '08.05-14.05': {
        task1: 'Переворот через шоулдер',
        task2: 'Шпагат Чебы',
        task3: 'Икс/тейбл топ',
        warmUpMonths: 'май-июнь',
    },
    '15.05-21.05': {
        task1: 'Комбо',
        task2: 'Флаг',
        task3: 'Стойка силовая',
        warmUpMonths: 'май-июнь',
    },
    '22.05-28.05': {
        task1: 'Райская птица',
        task2: 'Крутка через разворот в ленточном',
        task3: 'Бланшики',
        warmUpMonths: 'май-июнь',
    },
    '29.05-04.06': {
        task1: 'Рашн лейбек',
        task2: 'Марион',
        task3: 'Рондат',
        warmUpMonths: 'май-июнь',
    },
    '05.06-11.06': {
        task1: 'Комбо',
        task2: 'Стойка флажковая',
        task3: 'Силовые опускания/подъемы',
        warmUpMonths: 'май-июнь',
    },
    '12.06-18.06': {
        task1: 'Крутка с выходом в шоулдер',
        task2: 'Флаг',
        task3: 'Инста-штучка',
        warmUpMonths: 'май-июнь',
    },
    '19.06-25.06': {
        task1: 'Пума',
        task2: 'Серпантин',
        task3: 'Икс/Тейбл топ',
        warmUpMonths: 'май-июнь',
    },
    '26.06-02.07': {
        task1: 'Кокон/бильман/перевернутый бильман',
        task2: 'Задняя аиша',
        task3: 'Стойка силовая',
        warmUpMonths: 'май-июнь',
    },
    // '03.07-09.07': {
    //     task1: 'Крутка с проведением корпуса',
    //     task2: 'Флаг',
    //     task3: 'Инста-штучка',
    //     warmUpMonths: 'июль-август',
    // },
    // '10.07-16.07': {
    //     task1: 'Кинжал',
    //     task2: 'Хвост дракона',
    //     task3: 'Бланшики',
    //     warmUpMonths: 'июль-август',
    // },
    // '17.07-23.07': {
    //     task1: 'Комбо',
    //     task2: 'Силовые опускания/подъемы',
    //     task3: 'Стойка флажковая',
    //     warmUpMonths: 'июль-август',
    // },
    // '24.07-30.07': {
    //     task1: 'Русский шпагат',
    //     task2: 'Флаг',
    //     task3: 'Прыжок из брассманки',
    //     warmUpMonths: 'июль-август',
    // },
    // '31.07-06.08': {
    //     task1: 'Крутка через разворот в ленточном',
    //     task2: 'Флаг на предплечье',
    //     task3: 'Инста-штучка',
    //     warmUpMonths: 'июль-август',
    // },
    // '07.08-13.08': {
    //     task1: 'Оборот в балерину/бедра',
    //     task2: 'Опасный мост',
    //     task3: 'Икс/тейбл-топ',
    //     warmUpMonths: 'июль-август',
    // },
    // '14.08-20.08': {
    //     task1: 'Титаник',
    //     task2: 'Флаг',
    //     task3: 'Стойка силовая',
    //     warmUpMonths: 'июль-август',
    // },
    // '21.08-27.08': {
    //     task1: 'Крутка с двойным облетом',
    //     task2: 'Комбо',
    //     task3: 'Бланшики',
    //     warmUpMonths: 'июль-август',
    // },
    // '28.08-03.09': {
    //     task1: 'Флаг цирковой',
    //     task2: 'Динамика в шоулдере/перехваты',
    //     task3: 'Джамилла',
    //     warmUpMonths: 'июль-август',
    // },
    // '': {
    //     task1: '',
    //     task2: '',
    //     task3: '',
    //     warmUpMonths: '',
    // },
};