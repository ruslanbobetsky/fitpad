import paths from './paths';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main/Main';
// import Cardio from '../pages/Cardio/Cardio';
// import Health from '../pages/Health/Health';
// import Exercise from '../pages/Exercise/Exercise';
// import Training from '../pages/Training/Training';
// import Nutrition from '../pages/Nutrition/Nutrition';
// import Drugs from '../pages/Drugs/Drugs';
import TrainingProgramDetails from '../pages/TrainingProgramDetails';

export const authRoutes = [
    {
        path: paths.login,
        Component: Login,
        exact: true,
    },
    {
        path: paths.signUp,
        Component: SignUp,
        exact: true,
    },
];

export const appRoutes = [
    {
        path: paths.articles,
        Component: Main,
        exact: true,
    },
    {
        path: paths.cardio,
        Component: Main,
        exact: true,
    },
    {
        path: paths.drugs,
        Component: Main,
        exact: true,
    },
    {
        path: paths.exercise,
        Component: Main,
        exact: true,
    },
    {
        path: paths.health,
        Component: Main,
        exact: true,
    },
    {
        path: paths.nutrition,
        Component: Main,
        exact: true,
    },
    {
        path: paths.training,
        Component: Main,
        exact: true,
    },
    {
        path: paths.trainingProgramDetails,
        Component: TrainingProgramDetails,
        exact: true,
    },
];
