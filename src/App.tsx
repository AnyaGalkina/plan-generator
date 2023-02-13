import React from 'react';
import './App.css';
import {Main} from './components/Main';
import {useAppSelector} from './store/hooks/hooks';
import {
    warmUpWithPolePlanFit1,
    warmUpWithPolePlanFit2, weekTrainingPlansFit1,
    weekTrainingPlansFit2,
    weekTrainingPlansIntro
} from './data/data';

const FIT_2 = 'Fit 2';
const FIT_1 = 'Fit 1';
export const INTRO = 'Intro'


function App() {

    const level = useAppSelector(state => state.settings.level);

    return (
        <div className="App">
            {level === FIT_2
                ? <Main weekTrainingPlans={weekTrainingPlansFit2} warmUpWithPolePlan={warmUpWithPolePlanFit2}/>
                : level === FIT_1
                    ? <Main weekTrainingPlans={weekTrainingPlansFit1} warmUpWithPolePlan={warmUpWithPolePlanFit1}/>
                    : <Main weekTrainingPlans={weekTrainingPlansIntro} />
            }
        </div>
    );
}

export default App;
