import './App.css'
import Wrapper from './components/Wrapper';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCxcwRZMgP108LqjR9c8_Dt63v69uLXf4Q",
//   authDomain: "todo-list-bf3af.firebaseapp.com",
//   projectId: "todo-list-bf3af",
//   storageBucket: "todo-list-bf3af.appspot.com",
//   messagingSenderId: "49569143081",
//   appId: "1:49569143081:web:7c3ed35f0fd7eef42abf38",
//   measurementId: "G-TB9J0LTGTV"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
function App() {
  return (
    <div className='h-screen w-screen bg-gradient-to-br from-blue-gradient-1 to-blue-gradient-2 grid place-items-center'>
      <Wrapper />
    </div>
  );
}

export default App;
