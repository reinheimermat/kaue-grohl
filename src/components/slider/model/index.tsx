'use client'

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { CarModel, Context } from './context'
import { useModel } from './use-model'

interface ModelsSectionProps extends HTMLAttributes<HTMLDivElement> {
  modelname: string
  overlaynode: ReactNode
  children?: ReactNode
}

export const ModelsWrapper = ({ children }: { children: ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName),
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModels.find((model) => model.modelName === modelName) || null
      )
    },
    [registeredModels],
  )

  return (
    <Context.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <div ref={wrapperRef} className="h-full overflow-y-auto scroll-wrapper">
        <div className="sticky inset-0">
          {registeredModels.map((item) => (
            <div
              className="flex flex-col items-center sticky h-screen -mt-[100vh]"
              key={item.modelName}
            >
              {item.overlayNode}
            </div>
          ))}
        </div>
        {children}
      </div>
    </Context.Provider>
  )
}

export const ModelsSection = ({
  children,
  modelname,
  overlaynode,
  ...props
}: ModelsSectionProps) => {
  const { registerModel } = useModel(modelname)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName: modelname,
        overlayNode: overlaynode,
        sectionRef,
      })
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className="h-full snap-start scroll-section"
      {...props}
    >
      {children}
    </div>
  )
}

export const Model = {
  Wrapper: ModelsWrapper,
  Section: ModelsSection,
}
