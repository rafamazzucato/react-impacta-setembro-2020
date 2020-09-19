import React, {useState, useEffect}from 'react';

export const Componente3 = () => {
    const [title, setTitle] = useState('Meu Terceiro componente')

    useEffect(() => {
        console.log('componente renderizou');
        setTitle('Texto mudou');

        return () =>{
            console.log('componente desmontou');
        }
    }, [title]);

    console.log('render');
    return (
        <h1 className="fonte">{title}</h1> 
    )
}