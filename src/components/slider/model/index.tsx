import { useCallback, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import Context, { CarModel } from "./context";

interface ModelsSectionProps extends HTMLAttributes<HTMLDivElement> {
    modelname: string;
    overlaynode: ReactNode;
    children?: ReactNode;
}

const ModelsWrapper = ({ children }: { children: ReactNode }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

    const registerModel = useCallback((model: CarModel) => {
        setRegisteredModels(state => [...state, model]);
    }, [])

    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName));
    }, [])

    const getModelByName = useCallback((modelName: string) => {
        return registeredModels.find(model => model.modelName === modelName) || null;
    }, [registeredModels])

    return (
        <Context.Provider value={{
            wrapperRef,
            registeredModels,
            registerModel,
            unregisterModel,
            getModelByName
        }}>
            <div ref={wrapperRef} className="h-full overflow-y-auto scroll-wrapper">
              {children}
            </div>
        </Context.Provider>
    )
}

const ModelsSection = ({ children, ...props }: ModelsSectionProps) => {
    return (
        // todo: This is a container
        <div className="h-full snap-start scroll-section" {...props}>
            {children}
        </div>
    )
}

export const Model = {
    Wrapper: ModelsWrapper,
    Section: ModelsSection
}