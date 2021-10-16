import React, {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';
 
export function AdicionarUsuarioComponent(prop){
 
    
     const stateData = {
            showHide : false
        }
      

      const [state, setState] = useState(stateData);


     const handleModalShowHide = (event) => {
             
          setState({
               ...state,
               showHide: !state.showHide
           })    
     }
    
    
        return(
            <div>
                <Button variant="primary" onClick={() => handleModalShowHide()}>
                    Launch demo modal
                </Button>
 
                <Modal show={state.showHide}>
                    <Modal.Header closeButton onClick={() => handleModalShowHide()}>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleModalShowHide()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
 
            </div>
        )
    
     
}
 
