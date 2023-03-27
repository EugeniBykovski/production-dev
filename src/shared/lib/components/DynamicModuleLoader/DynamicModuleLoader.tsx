import { FC, useEffect } from 'react'
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
  const { children, reducers, removeAfterUnmount } = props
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers()

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey]

      // add new reducer if not yet
      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${name} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey)
          dispatch({ type: `@INIT ${name} reducer` })
        })
      }
    } 
  }, [])

  return (
    <>
      {children}
    </>
  )
}