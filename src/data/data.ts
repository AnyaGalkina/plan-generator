export type TrainingPlanType = {
    task1: string,
    task2: string;
    task3?: string;
    warmUpMonths?: string
};

export type TrainingPlansType = {
    [key: string]: TrainingPlanType
}

export const placeholderTest = 'Посмотри\n' +
    'видео\n' +
    'и сделай \n' +
    'по 3 раза на каждую сторону.\n'

export const weeks = [

    // '12.02-18.02',
    // '19.02-25.02',
    // '26.02-03.03',
    '04.03-10.03',
    '11.03-17.03',
    // '18.03-24.03',
    '25.03-31.03',
    '01.04-07.04',
    '08.04-14.04',
];


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
    // 'май-июнь': {
    //     task1: 'стульчик на крутяшке',
    //     task2: 'рогатки на крутяшке',
    //     task3: 'тюльпан на крутяшке',
    // },
    // 'июль-август': {
    //     task1: 'стульчик на статике',
    //     task2: 'рогатки с коленным зацепом и подъемом наверх',
    //     task3: 'тюльпан на статике',
    // },
    // 'сентябрь-октябрь': {
    //     task1: 'стульчик на статике',
    //     task2: 'рогатки, подъем и опускание силой',
    //     task3: 'тюльпан во вращении на статике',
    // },
    // 'ноябрь-декабрь': {
    //     task1: 'стульчик на крутяшке',
    //     task2: 'рогатки на крутяшке',
    //     task3: 'тюльпан на крутяшке',
    // },
    // 'январь-февраль': {
    //     task1: 'стульчик на статике',
    //     task2: 'рогатки с коленным зацепом и подъемом наверх',
    //     task3: 'тюльпан на статике',
    // }
};


export const actualWarmUpMonths = 'март-апрель';

export const weekTrainingPlansFit1: TrainingPlansType = {

    // '30.10-05.11': {
    //     task1: 'Крутка чашечкой',
    //     task2: 'Комбо',
    //     task3: 'СФП',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '06.11-12.11': {
    //     task1: 'Купидон',
    //     task2: 'Стойка лопатками к пилону на двух руках',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '13.11-19.11': {
    //     task1: 'Разворот в балерину на статике',
    //     task2: 'Инста-штучка',
    //     task3: 'Китайский флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '20.11-26.11': {
    //     task1: 'Крутка с вылетом',
    //     task2: 'Шпагат аллегры',
    //     task3: 'Супермен',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '27.11-03.12': {
    //     task1: 'Комбо',
    //     task2: 'Стойка полуфлаговая',
    //     task3: 'СФП',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '04.12-10.12': {
    //     task1: 'Крутка чашечкой',
    //     task2: 'Мост',
    //     task3: 'Оттяжка',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '11.12-17.12': {
    //     task1: 'Смена бока в висе',
    //     task2: 'Инста-штучка',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '18.12-24.12': {
    //     task1: 'Поперечка (складка/шпагат)',
    //     task2: 'Питер пен',
    //     task3: 'Стойка спиной к пилону',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '25.12-31.12': {
    //     task1: 'Обрыв из мартини',
    //     task2: 'Шпагаты из брассманки',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '08.01-14.01': {
    //     task1: 'Крутка с вылетом',
    //     task2: 'Комбо',
    //     task3: 'СФП',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '15.01-21.01': {
    //     task1: 'Купидон',
    //     task2: 'Стойка боковая',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '22.01-28.01': {
    //     task1: 'Обрыв со сменой ног из раскачки',
    //     task2: 'Шпагат вдоль пилона грудью вниз',
    //     task3: 'Инста-штучка',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '29.01-04.02': {
    //     task1: 'Крутка чашечкой',
    //     task2: 'Балерина на крутяшке',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '05.02-11.02': {
    //     task1: 'Комбо',
    //     task2: 'Стойка лопатками к пилону на двух руках',
    //     task3: 'СФП',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '12.02-18.02': {
    //     task1: 'Крутка с вылетом',
    //     task2: 'Лук и стрелы',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '19.02-25.02': {
    //     task1: 'Кокон',
    //     task2: 'Инста-штучка',
    //     task3: 'Китайский флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '26.02-03.03': {
    //     task1: 'Обрыв в журавлике',
    //     task2: 'Карандашик',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    '04.03-10.03': {
        task1: 'Крутка чашечкой',
        task2: 'Комбо',
        task3: 'СФП',
        warmUpMonths: actualWarmUpMonths
    },
    '11.03-17.03': {
        task1: 'Шпагат Джамиллы',
        task2: 'Брассманки',
        task3: 'Стойка полуфлаговая',
        warmUpMonths: actualWarmUpMonths
    },
    '25.03-31.03': {
        task1: 'Шпагат грудью вверх',
        task2: 'Инста-штучка',
        task3: 'Обрыв в бедра',
        warmUpMonths: actualWarmUpMonths
    },
    '01.04-07.04': {
        task1: 'Крутка с вылетом',
        task2: 'Супермен',
        task3: 'Флаг',
        warmUpMonths: actualWarmUpMonths
    },
    '08.04-14.04': {
        task1: 'Комбо',
        task2: 'Стойка спиной к пилону',
        task3: 'СФП',
        warmUpMonths: actualWarmUpMonths
    }

};

//FIT 2

export const warmUpWithPolePlanFit2: TrainingPlansType = {
    'март-апрель': {
        task1: 'Крутка солдатик на статике',
        task2: 'Шоулдеры силой, подъемы и опускания',
        task3: 'Крутка феникс (облёт в тюльпан и флаг)',
    },
    // 'май-июнь': {
    //     task1: '  'март-апрель': {
    //         task1: 'Крутка солдатик на статике',
    //         task2: 'Шоулдеры силой, подъемы и опускания',
    //         task3: 'Крутка феникс (облёт в тюльпан и флаг)',
    //     },Солдатик на крутяшке',
    //     task2: 'Шоулдеры с раскачки в группировку',
    //     task3: 'Облет во флаг на статике',
    // },
    // 'июль-август': {
    //     task1: 'Раскачка с подъемом',
    //     task2: 'Шоудеры с выходом в коленный зацеп',
    //     task3: 'Тюльпан во флаг',
    // },
    // 'сентябрь-октябрь': {
    //     task1: 'Крутка солдатик на статике',
    //     task2: 'Шоулдеры силой, подъемы и опускания',
    //     task3: 'Тюльпан во флаг на статике',
    // },
    // 'ноябрь-декабрь': {
    //     task1: 'Солдатик на крутяшке',
    //     task2: 'Шоулдеры с раскачки в группировку',
    //     task3: 'Облет во флаг на статике',
    // },
    // 'январь-февраль': {
    //     task1: 'Раскачка с подъемом',
    //     task2: 'Шоудеры с выходом в коленный зацеп',
    //     task3: 'Тюльпан во флаг',
    // }

};

export const weekTrainingPlansFit2: TrainingPlansType = {

    //!!!!Just uncomment this to get the full list of weeks

    // '30.10-05.11': {
    //     task1: 'Крутка с двойным облетом',
    //     task2: 'Пегас',
    //     task3: 'Инста-штучка',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '06.11-12.11': {
    //     task1: 'Переворот через шоулдер',
    //     task2: 'Шпагат Чебы',
    //     task3: 'Икс/тейбл топ',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '13.11-19.11': {
    //     task1: 'Комбо',
    //     task2: 'Флаг',
    //     task3: 'Стойка силовая',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '20.11-26.11': {
    //     task1: 'Крутка через разворот в ленточном',
    //     task2: 'Райская птица',
    //     task3: 'Бланшики',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '27.11-03.12': {
    //     task1: 'Рондат',
    //     task2: 'Марион',
    //     task3: 'Инста-штучка',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '04.12-10.12': {
    //     task1: 'Комбо',
    //     task2: 'Стойка флажковая',
    //     task3: 'Силовые опускания/подъемы',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '11.12-17.12': {
    //     task1: 'Крутка с выходом в шоулдер',
    //     task2: 'Рашн лейбек',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '18.12-24.12': {
    //     task1: 'Машин Ган',
    //     task2: 'Задняя аиша',
    //     task3: 'Икс/Тейбл топ',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '25.12-31.12': {
    //     task1: 'элемент на спину',
    //     task2: 'Серпантин',
    //     task3: 'Стойка силовая',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '08.01-14.01': {
    //     task1: 'Крутка с проведением корпуса',
    //     task2: 'Инста-штучка',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '15.01-21.01': {
    //     task1: 'Кинжал',
    //     task2: 'Прыжок из брассманки',
    //     task3: 'Бланшики',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '22.01-28.01': {
    //     task1: 'Комбо',
    //     task2: 'Стойка флажковая',
    //     task3: 'Силовые опускания/подъемы',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '29.01-04.02': {
    //     task1: 'Русский шпагат',
    //     task2: 'Хвост дракона',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '05.02-11.02': {
    //     task1: 'Крутка через разворот в ленточном',
    //     task2: 'Инста-штучка',
    //     task3: 'Флаг цирковой',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '12.02-18.02': {
    //     task1: 'Оборот в балерину',
    //     task2: 'Опасный мост',
    //     task3: 'Икс/тейбл-топ',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '19.02-25.02': {
    //     task1: 'Комбо',
    //     task2: 'Флаг',
    //     task3: 'Стойка силовая',
    //     warmUpMonths: actualWarmUpMonths,
    //
    // },
    // '26.02-03.03': {
    //     task1: 'Крутка с двойным облетом',
    //     task2: 'Титаник',
    //     task3: 'Бланшики',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    '04.03-10.03': {
        task1: 'Динамика в шоулдере/перехваты',
        task2: 'Джамилла',
        task3: 'Флаг на предплечье',
        warmUpMonths: actualWarmUpMonths
    },
    '11.03-17.03': {
        task1: 'Рондат',
        task2: 'Китайский шпагат',
        task3: 'Икс/тейбл-топ',
        warmUpMonths: actualWarmUpMonths
    },
    '25.03-31.03': {
        task1: 'Крутка в шоулдер',
        task2: 'Инста-штучка',
        task3: 'Флаг',
        warmUpMonths: actualWarmUpMonths
    },
    '01.04-07.04': {
        task1: 'Комбо',
        task2: 'Стойка флажковая',
        task3: 'Силовые опускания/подъемы',
        warmUpMonths: actualWarmUpMonths
    },
    '08.04-14.04': {
        task1: 'Пума',
        task2: 'Задняя аиша',
        task3: 'Стойка силовая',
        warmUpMonths: actualWarmUpMonths
    }
};


