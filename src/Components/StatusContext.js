import React from 'react';

export const StatusContext = React.createContext();

export const QuizStatus = ({children}) => {

    const [status, setStatus] = React.useState(false);

    const True = () => setStatus(true);
    const False = () => setStatus(false);

    return (
        <StatusContext.Provider value={{status, True, False}}>
            {children}
        </StatusContext.Provider>
    )

}