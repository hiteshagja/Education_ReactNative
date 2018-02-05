import AppIntroLayout from '../components/appintro/AppIntro';
import LoginScreen from '../components/login/LoginScreen';
import SignupScreen from '../components/signup/SignupScreen';
import DashboardScreen from '../components/dashboard/Dashboard';
import CoursesScreen from '../components/courses/Courses';
import singleCourseScreen from '../components/singleCourse/SingleCourse';
import ProfileScreen from '../components/profile/Profile';
import {
  StackNavigator,
} from 'react-navigation';

const Mainstack = StackNavigator({

	Login:{ screen: LoginScreen},
  Signup:{ screen: SignupScreen},
  Dashboard:{screen: DashboardScreen},
  Courses:{screen: CoursesScreen},
  Singlecourse : {screen: singleCourseScreen},
  Profile:{screen: ProfileScreen},
  AppIntro:{ screen: AppIntroLayout}
},
	{
	initialRouteName: 'AppIntro',
});

export default Mainstack;
