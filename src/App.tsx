import './globals.css';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public Routes */}
        <Route path='/sign-in' element={<signinForm />} />
          {/* Private Routes */}
          <Route index element = {<Home />} />

      </Routes>
    </main>
  )
}

export default App