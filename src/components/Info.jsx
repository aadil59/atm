import React from 'react'

export default function Info(props) {
    const { details } = props;
    function sum( counterObj ) {
        var sum = 0;
        for( var el in details.counterObj ) {
          if( details.counterObj.hasOwnProperty( el ) ) {
            sum += parseFloat( details.counterObj[el] );
          }
        }
        return sum;
      }
          
      var sample = { a: 1 , b: 2 , c:3 };
      var summed = sum( sample );
    return (
        <React.Fragment>
            <div className="col-md-6">
                <h6>You will get the following amount</h6>
                <ul className="list-group">
                    {Object.entries(details.counterObj).map(function ([item, count], index) {
                        return <li key={index}><span className="unit pr-2">{count}</span>notes of Rs <span className="value pl-1">{item}</span></li>
                    })}
                </ul>
                <h6>Total notes dispensed: {summed}</h6>
            </div>
        </React.Fragment>
    )
}
