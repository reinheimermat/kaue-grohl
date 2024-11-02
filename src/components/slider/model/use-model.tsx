import { useCallback, useContext, useEffect } from "react";
import context from "./context";

export function useModel(modelName: string) {
    const { registerModel, unregisterModel, getModelByName } = useContext(context)

    useEffect(() => {

        return () => unregisterModel(modelName)
    }, [modelName, unregisterModel])

    const getModel = useCallback(() => getModelByName(modelName), [getModelByName, modelName])

    return {
        registerModel,
        getModel
    }
}