import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
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
    fam: null,
    im: null,
    otch: null,
    balance: null,
    isBlocked: null,
    isBlockedText: null,
    display: true,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id=" + this.props.id + " componentWillReceiveProps");
    // this.props.clients.forEach(client => {
    //   if (this.props.workMode === 0) {
    //     if (this.props.id === client.id) {
    //       // this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
    //       if (this.state.display !== true) {
    //         this.setState({ isBlockedText: "активен", isBlocked: false, display: true });
    //       }
    //     }
    //   } if (this.state.workMode === 1) {
    //     if (this.props.id === client.id) {
    //       //this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
    //       if ((client.balance >= 0) && (this.state.display !== true)) {
    //         this.setState({ isBlockedText: "активен", isBlocked: false, display: true });
    //       } if ((client.balance <0) && (this.state.display !== false)) {
    //         this.setState({ isBlockedText: "заблокирован", isBlocked: true, display: false });
    //       }
    //     }
    //   } if (this.state.workMode === 2) {
    //     if (this.props.id === client.id) {
    //      // this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
    //       if ((client.balance < 0) && (this.state.display !== true)) {
    //         this.setState({ display: true });

    //       }if ((client.balance >= 0) && (this.state.display !== false)){
    //         this.setState({ display: false });
    //       }
    //     }
    //   }
    // });
  };
  componentWillMount = () => {
    console.log("MobileClient id=" + this.props.id + " componentWillMount");
    this.props.clients.forEach(client => {
      // if (this.props.workMode === 0) {
        if (this.props.id === client.id) {
          this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
          if (client.balance >= 0) {
            this.setState({ isBlockedText: "активен", isBlocked: false, display: true });
          } if(client.balance < 0){
            this.setState({ isBlockedText: "заблокирован", isBlocked: true, display: true });
          }
        }
    //   // } if (this.state.workMode === 1) {
    //     if (this.props.id === client.id) {
    //       this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
    //       if (client.balance >= 0) {
    //         this.setState({ isBlockedText: "активен", isBlocked: false, display: true });
    //       } else {
    //         this.setState({ isBlockedText: "заблокирован", isBlocked: true, display: false });
    //       }
    //     }
    //   // } if (this.state.workMode === 2) {
    //     if (this.props.id === client.id) {
    //       this.setState({ id: client.id, fam: client.fam, im: client.im, otch: client.otch, balance: client.balance });
    //       if (client.balance < 0) {
    //         this.setState({ isBlockedText: "активен", isBlocked: true, display: false });
    //       } else {
    //         this.setState({ isBlockedText: "заблокирован", isBlocked: true, display: true });
    //       }
    //     }
    //  // }
    });
  };

  render() {
    console.log("MobileClient id=" + this.props.id + " render");
   // if (this.state.display === true) {
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
    // }else{
    //   return <div></div>
    // }
  }
}

export default MobileClient;
