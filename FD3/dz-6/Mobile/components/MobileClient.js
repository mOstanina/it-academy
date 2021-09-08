import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    //idClient: PropTypes.number.isRequired,
    //workMode: PropTypes.number.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
   // workMode: this.props.workMode,
    fam: null,
    im: null,
    otch: null,
    balance: null,
    isBlocked: null,
    isBlockedText: null,
  };

  // componentWillReceiveProps = (newProps) => {
  //   console.log("MobileClient id="+this.props.clients.id+" componentWillReceiveProps");
  //   this.setState({
  //     fam: newProps.clients.fam,
  //     im: newProps.clients.im,
  //     otch: newProps.clients.otch,
  //     balance: newProps.clients.balance,
  //   });
  // };
  componentWillMount = () => {
    //console.log("MobileClient id=" + this.props.id + " componentWillUnmount");
    this.props.clients.forEach(client => {
     // if (this.state.workMode === 0) {
        if (this.props.id === client.id) {
          this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
          if (client.balance >= 0) {
            this.setState({ isBlockedText: "активен", isBlocked: false });
          } else {
            this.setState({ isBlockedText: "заблокирован", isBlocked: true });
          }
        }
      // }if(this.state.workMode === 1){
      //   if (this.props.id === client.id) {
      //     this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
      //     if (client.balance >= 0) {
      //       this.setState({ isBlockedText: "активен", isBlocked: false });
      //     } else {
      //       this.setState({ fam: false });
      //     }
      //   }
      // }if(this.state.workMode === 2){
      //   if (this.props.id === client.id) {
      //     this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
      //     if (client.balance < 0) {
      //       this.setState({ isBlockedText: "заблокирован", isBlocked: true });
      //     } else {
      //       this.setState({ fam: false });
      //     }
      //   }
      // }






    });
  };

  render() {

    console.log("MobileClient id=" + this.props.id + " render");
    return (
      <div className='MobileClient'>
        <div className='MobileClientFIO'>{this.state.fam + " " + this.state.im + " " + this.state.otch}</div>
        <div className='MobileClientInfo'>
          <div className='MobileClientBalance'>{this.state.balance}</div>
          <div className='MobileClientIsBlocked' className={'MobileClientIsBlocked' + this.state.isBlocked} >{this.state.isBlockedText}</div>
          <input type="button" value="редактировать" />
          <input type="button" value="Удалить" />
        </div>
      </div>
    );

  }

}

export default MobileClient;
