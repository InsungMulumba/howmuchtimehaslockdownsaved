
import React from 'react';
import '../styles/Form.scss';

const newMinutes = (oldM) => {
    return oldM-2;
};

const ResultPage = ({ctMinutes}) => {
    
    return (
        
        <div className="question-section">     
            
            {newMinutes(ctMinutes)}
        </div>
      );
};

   


export default ResultPage;