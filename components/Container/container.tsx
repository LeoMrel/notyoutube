import { ReactNode } from "react";

const Container: React.FC<{children: ReactNode}> = ({children}) => {
    return (
        <div className="h-screen w-screen flex place-items-center place-content-center">
            <div className="bg-green-300 container w-full h-full flex place-items-center place-content-center">
                {children}
            </div>
        </div>
    )
};

export default Container