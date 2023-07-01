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
    // 'март-апрель': {
    //     task1: 'стульчик на статике',
    //     task2: 'рогатки подряд – подъем и опускание, силой',
    //     task3: 'тюльпан во вращении на статике',
    // },
    // 'май-июнь': {
    //     task1: 'стульчик на крутяшке',
    //     task2: 'рогатки на крутяшке',
    //     task3: 'тюльпан на крутяшке',
    // },
    'июль-август': {
        task1: 'стульчик на статике',
        task2: 'рогатки с коленным зацепом и подъемом наверх',
        task3: 'тюльпан в статике на статике',
    }
};


const actualWarmUpMonths = 'июль-август';

export const weekTrainingPlansFit1: TrainingPlansType = {
    '03.07-09.07': {
        task1: 'Обрыв из мартини',
        task2: 'Флаг',
        task3: 'Шпагаты из брассманки',
        warmUpMonths: actualWarmUpMonths,
    },
    '10.07-16.07': {
        task1: 'Купидон (усл: заход из китайского)',
        task2: 'Стойка боковая',
        task3: 'Флаг',
        warmUpMonths: actualWarmUpMonths,
    },
    '17.07-23.07': {
        task1: 'Инста-штучка',
        task2: 'Шпагат вдоль пилона грудью вниз',
        task3: 'Обрыв со сменой ног из раскачки',
        warmUpMonths: actualWarmUpMonths,
    },
    '24.07-30.07': {
        task1: 'Крутка чашечкой',
        task2: 'Балерина на крутяшке',
        task3: 'Флаг',
        warmUpMonths: actualWarmUpMonths,
    },
    '31.07-06.08': {
        task1: 'Комбо',
        task2: 'Стойка лопатками к пилону на двух руках',
        task3: 'СФП',
        warmUpMonths: actualWarmUpMonths,
    },
    '07.08-13.08': {
        task1: 'Крутка с вылетом',
        task2: 'Лук и стрелы',
        task3: 'Флаг',
        warmUpMonths: actualWarmUpMonths,
    },
    '14.08-20.08': {
        task1: 'Инста-штучка',
        task2: 'Карандашик',
        task3: 'Китайский флаг',
        warmUpMonths: actualWarmUpMonths,
    },
    '21.08-27.08': {
        task1: 'Кокон',
        task2: 'Обрыв в журавлике',
        task3: 'Флаг',
        warmUpMonths: actualWarmUpMonths,
    },
    '28.08-03.09': {
        task1: 'Крутка чашечкой',
        task2: 'Комбо',
        task3: 'СФП',
        warmUpMonths: actualWarmUpMonths,
    },
    // '04.09-10.09': {
    //     task1: 'Брассманки',
    //     task2: 'Стойка полуфлаговая',
    //     task3: 'Шпагат Джамиллы',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '11.09-17.09': {
    //     task1: 'Комбо',
    //     task2: 'СФП',
    //     task3: '',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '18.09-24.09': {
    //     task1: 'Инста-штучка',
    //     task2: 'Шпагат грудью вверх',
    //     task3: 'Обрыв в бедра',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '25.09-01.10': {
    //     task1: 'Крутка с вылетом',
    //     task2: 'Супермен',
    //     task3: 'Флаг',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '02.10-08.10': {
    //     task1: 'Комбо',
    //     task2: 'Стойка спиной к пилону',
    //     task3: 'СФП',
    //     warmUpMonths: actualWarmUpMonths,
    // },
};

//FIT 2

export const warmUpWithPolePlanFit2: TrainingPlansType = {
    // 'март-апрель': {
    //     task1: 'Крутка солдатик на статике',
    //     task2: 'Шоулдеры силой, подъемы и опускания',
    //     task3: 'Крутка феникс (облёт в тюльпан и флаг)',
    // },
    // 'май-июнь': {
    //     task1: 'Солдатик на крутяхе',
    //     task2: 'Шоулдеры с раскачки в группировку',
    //     task3: 'Облет во флаг на статике',
    // },
    'июль-август': {
        task1: 'Раскачка с подъемом',
        task2: 'Шоудеры с выходом в коленный зацеп',
        task3: 'Тюльпан во флаг',
    }
};

export const weekTrainingPlansFit2: TrainingPlansType = {
    '03.07-09.07': {
        task1: 'Крутка с проведением корпуса',
        task2: 'Флаг',
        task3: 'Инста-штучка',
        warmUpMonths: actualWarmUpMonths,
    },
    '10.07-16.07': {
        task1: 'Кинжал',
        task2: 'Хвост дракона',
        task3: 'Бланшики',
        warmUpMonths: actualWarmUpMonths,
    },
    '17.07-23.07': {
        task1: 'Комбо',
        task2: 'Силовые опускания/подъемы',
        task3: 'Стойка флажковая',
        warmUpMonths: actualWarmUpMonths,
    },
    '24.07-30.07': {
        task1: 'Русский шпагат',
        task2: 'Флаг',
        task3: 'Прыжок из брассманки',
        warmUpMonths: actualWarmUpMonths,
    },
    '31.07-06.08': {
        task1: 'Крутка через разворот в ленточном',
        task2: 'Флаг на предплечье',
        task3: 'Инста-штучка',
        warmUpMonths: actualWarmUpMonths,
    },
    '07.08-13.08': {
        task1: 'Оборот в балерину/бедра',
        task2: 'Опасный мост',
        task3: 'Икс/тейбл-топ',
        warmUpMonths: actualWarmUpMonths,
    },
    '14.08-20.08': {
        task1: 'Титаник',
        task2: 'Флаг',
        task3: 'Стойка силовая',
        warmUpMonths: actualWarmUpMonths,
    },
    '21.08-27.08': {
        task1: 'Крутка с двойным облетом',
        task2: 'Комбо',
        task3: 'Бланшики',
        warmUpMonths: actualWarmUpMonths,
    },
    '28.08-03.09': {
        task1: 'Флаг цирковой',
        task2: 'Динамика в шоулдере',
        task3: 'Джамилла',
        warmUpMonths: actualWarmUpMonths,
    },
    // '04.09-10.09': {
    //     task1: 'Китайский шпагат',
    //     task2: 'Рондат',
    //     task3: 'Икс/тейбл-топ',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '11.09-17.09': {
    //     task1: 'Комбо',
    //     task2: 'СФП',
    //     task3: '',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '18.09-24.09': {
    //     task1: 'Крутка в шоулдер',
    //     task2: 'Флаг',
    //     task3: 'Инста-штучка',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '25.09-01.10': {
    //     task1: 'Комбо',
    //     task2: 'Силовые опускания/подъемы',
    //     task3: 'Стойка флажковая',
    //     warmUpMonths: actualWarmUpMonths,
    // },
    // '02.10-08.10': {
    //     task1: 'Машин Ган',
    //     task2: 'Задняя аиша',
    //     task3: 'Стойка силовая',
    //     warmUpMonths: actualWarmUpMonths,
    // },
};



