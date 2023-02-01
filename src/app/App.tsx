import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import { MainPage } from "pages/MainPage"
import { AboutPage } from "pages/AboutPage"
import { useTheme } from "app/providers/ThemeProvider"
import { classNames } from "shared/lib/classNames/classNames"

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>change theme</button>

      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/about'} element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App