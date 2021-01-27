import React from 'react';
import moment from 'moment';

const Confirmation = () => {
  const date = "2020-05-02";
  const momentDate = moment(date);
  console.log('before',momentDate.add(1, 'year'));
  const updatedDate = momentDate.subtract(1, 'month');
  console.log(updatedDate, momentDate);
  return (
    <div>

    </div>
  );
}

export default Confirmation;
