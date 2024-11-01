import type { HTMLAttributes, ReactNode } from "react";

interface ModelsSectionProps extends HTMLAttributes<HTMLDivElement> {
    modelname: string;
    overlaynode: ReactNode;
    children?: ReactNode;
}

const ModelsWrapper = ({ children }: { children: ReactNode }) => {
    return (
        // todo: This is a container
        <div className="h-full overflow-y-auto scroll-wrapper">
            {children}
        </div>
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