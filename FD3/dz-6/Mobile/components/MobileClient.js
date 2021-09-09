import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    fam: this.props.info.fam,
    im: this.props.info.im,
    otch: this.props.info.otch,
    balance: this.props.info.balance,
    isBlocked: null,
    isBlockedText: null,
    display: true,
  };

  componentWillReceiveProps = (newProps) => {
    //console.log("MobileClient id=" + this.props.id + " componentWillReceiveProps");
    this.setState({
      fam: newProps.info.fam,
      im: newProps.info.im,
      otch: newProps.info.otch,
      balance: newProps.info.balance,
    });
  };
  componentWillMount = () => {
    //console.log("MobileClient id=" + this.props.id + " componentWillMount");

  };

  render() {
    console.log("MobileClient id=" + this.props.id + " render");
    return (
      <div className='MobileClient'>
        <div className='MobileClientFIO'>{this.state.fam + " " + this.state.im + " " + this.state.otch}</div>
        <div className='MobileClientInfo'>
          <div className='MobileClientBalance'>{this.state.balance}</div>
          {this.state.balance >= 0 && <div className='MobileClientIsBlocked' className={"MobileClientIsBlockedfalse"} >{"активен"}</div>}
          {this.state.balance < 0 && <div className='MobileClientIsBlocked' className={"MobileClientIsBlockedtrue"} >{"заблокирован"}</div>}
          <input type="button" value="редактировать" />
          <input type="button" value="Удалить" />
        </div>
      </div>
    );
  }
}

export default MobileClient;
