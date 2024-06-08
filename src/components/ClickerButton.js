import React, {useState} from 'react';

function ClickerButton(props) {

    const [prevFeatures, setFeatures] = useState(0);
    
    function handleClick() {
        let newFeatures = prevFeatures + 1;
        setFeatures(newFeatures);
    }

    return (
    <div className='Clicker'>
        <h3>{props.envName} Features: <p>{prevFeatures}</p></h3>
        <button onClick={handleClick}>Develop</button>
    </div>
    );
}

export default ClickerButton;