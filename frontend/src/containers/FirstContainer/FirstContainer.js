import React from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';

class FirstContainer extends React.Component{
  state = {
    showModal: true
  }
  closeModalHandler = () => {
    this.setState({showModal: false});
  }
  render(){
    return (
      <div>
        <p>FirstContainer</p>
        <Button
          className='button button--small'
        >small</Button>
        <Button
          className='button button--medium'
        >medium</Button>
        <Button
          className='button button--large'
          disabled
        >large</Button>
        <Button
          className='button-circle button-circle--small'
        >+</Button>
        <Button
          className='button-circle button-circle--medium'
        >+</Button>
        <Button
          className='button-circle button-circle--large'
          disabled
        >+</Button>
        <Button
          className='button--large button--link'
        >link</Button>
        <Spinner />
        {/* <Backdrop show={true} /> */}
        <Modal showModal={this.state.showModal} closeModalHandler={this.closeModalHandler}>
          <h2>Hi this is me</h2>
        </Modal>
        <button onClick={() => this.setState({temp: !this.state.temp})}>Click me</button>
      </div>
    );
  }
}

export default FirstContainer;
