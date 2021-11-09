import { Route, Routes } from 'react-router'
import { PrivateRoute } from './components/functional/PrivateRoute/PrivateRoute'
import { TopPage } from './components/pages/TopPage'

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<TopPage />} />
      </Route>
    </Routes>
  )
}

export default App
