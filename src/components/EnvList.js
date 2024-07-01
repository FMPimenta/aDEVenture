import React from 'react';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';

import { observer } from "mobx-react-lite";

function EnvList({store}) {

    const handleUpdateEnv = (id) => {
        store.updateEnv(id);
    }
    
    return (
        <Row>
            {store.envs.map((env) => {
                return(
                    <Col>
                        <div className='mr-2 env Clicker'>
                            <h3>{env.name} Features: <p>{env.features}</p></h3>
                            <Button className='mb-2' onClick={() => handleUpdateEnv(env.id)}>Develop</Button>
                        </div>
                    </Col>
                )
            })}
        </Row>
    );
}

export default observer(EnvList);