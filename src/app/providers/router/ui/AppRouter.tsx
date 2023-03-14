import { getUserAuthData } from 'entities/User'
import { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object
      .values(routeConfig)
      .filter(route => (route.authOnly && !isAuth) ? false : true)
  }, [isAuth])

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route 
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className='page-wrapper'>
                {element}
              </div>
            </Suspense>
          )}
        />
      ))}
    </Routes>
  )
}

export default memo(AppRouter)