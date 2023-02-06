export const initialState = {
    level: 'Intro',
    week: '',
    warmUpPlan: '',
    task1Description: '',
    task2Description: '',
    task3Description: '',
}

type InitialStateType = typeof initialState;

export const settingsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_LEVEL':
        case 'SET_WEEK':
        case 'SET_WARM_UP_PLAN':
        case 'SET_TASK_1':
        case 'SET_TASK_2':
        case 'SET_TASK_3':
            return {...state, ...action.payload};
        default:
            return state
    }
}

export const setLevel = (level: string) => {
    return {type: 'SET_LEVEL', payload:{level}} as const
};
export const setWeek = (week: string) => {
    return {type: 'SET_WEEK', payload:{week}} as const
};
export const setWarmUpPlan = (warmUpPlan: string) => {
    return {type: 'SET_WARM_UP_PLAN', payload:{warmUpPlan}} as const
};
export const setTask1Description = (task1Description: string) => {
    return {type: 'SET_TASK_1', payload:{task1Description}} as const
};
export const setTask2Description = (task2Description: string) => {
    return {type: 'SET_TASK_2', payload:{task2Description}} as const
};
export const setTask3Description = (task3Description: string) => {
    return {type: 'SET_TASK_3', payload:{task3Description}} as const
};


type ActionType = ReturnType<typeof setLevel>
    | ReturnType<typeof setWeek>
    | ReturnType<typeof setWarmUpPlan>
    | ReturnType<typeof setTask1Description>
    | ReturnType<typeof setTask2Description>
    | ReturnType<typeof setTask3Description>