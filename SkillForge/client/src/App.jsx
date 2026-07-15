import { Route, Routes } from 'react-router-dom';

//layouts
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';

//pages
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Login from './pages/login';
import Course from './pages/courseDetails';
import Register from './pages/register';
import Profile from './pages/profile';
import Message from './pages/messages'
import Communities from './pages/communities';
import Tasks from './pages/tasks';
import Settings from './pages/settings';
import Support from './pages/support';
import Privacy from './pages/privacy';
import Dashboard  from './pages/Dashboard';
import axios from 'axios';
import { UserContextProvider } from '../context/userContext'
import { Toaster } from 'react-hot-toast'; //for error/success Notification

axios.defaults.baseURL = 'http://localhost:5000'; // Development PORT server
axios.defaults.baseURL = 'https://ffa-synj.onrender.com'; // Deployment PORT server
axios.defaults.withCredentials = true;  // give all credentrials to connect to that server port

function App() {

  return (
    <UserContextProvider>
      <div className='flex flex-col h-screen max-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-800'>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
  
        <main className=' overflow-y-auto'>
          <Routes>
            //Public Routes
            <Route element = {<AuthLayout/>}>
              <Route path='/' element = {<Home/>}/>
              <Route path='/about' element = {<About/>}/>
              <Route path='/services' element = {<Services/>}/>
              <Route path='/login' element = {<Login/>}/>
              <Route path='/register' element = {<Register/>}/>
            </Route>

            //Protected Routes/Dashboard Routes
            <Route element = {<DashboardLayout/>}>
              <Route path='/courseDetails/:title' element = {<Course/>}/>
              <Route path='/profile' element = {<Profile/>}/>
              <Route path='/messages' element = {<Message/>}/>
              <Route path='/communities' element = {<Communities/>}/>
              <Route path='/tasks' element = {<Tasks/>}/>
              <Route path='/settings' element = {<Settings/>}/>
              <Route path='/support' element = {<Support/>}/>
              <Route path='/privacy' element = {<Privacy/>}/>
              <Route path= '/dashboard' element = {<Dashboard/>}/>
            </Route>

          </Routes>
        </main>
      </div>
    </UserContextProvider>
  )
}

export default App