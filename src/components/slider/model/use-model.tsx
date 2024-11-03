import { useCallback, useContext, useEffect } from 'react'
import { Context } from './context'

export function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(Context)

  useEffect(() => {
    return () => unregisterModel(modelName)
  }, [modelName, unregisterModel])

  const getModel = useCallback(
    () => getModelByName(modelName),
    [getModelByName, modelName],
  )

  return {
    registerModel,
    getModel,
  }
}
