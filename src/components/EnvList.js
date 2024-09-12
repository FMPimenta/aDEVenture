import React from 'react';

import { observer } from "mobx-react-lite";

function EnvList({store}) {

    const handleUpdateEnv = (id) => {
        store.updateEnv(id);
    }
    
    return (
        <div>
            {store.envs.map((env) => {
                return(
                    <div key={env.name}>
                        <div className='mr-2 mb-2 bg-teal-900 text-slate-200'>
                            <p className='text-start ms-2'>{env.name} {env.features}</p>
                            <button className='mb-2' onClick={() => handleUpdateEnv(env.id)}>Develop</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default observer(EnvList);