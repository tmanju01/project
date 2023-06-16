import React from 'react';

function Chakbox(props) {
    return (
        <>
           <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">{props.title}</label>
                            </div>
                            <p>{props.para}</p> 
        </>
    );
}

export default Chakbox;