import React from 'react';
import PropTypes from 'prop-types';
import {mobileEvents} from './events';
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

  changeInfo = (EO) => {
    mobileEvents.emit('ChangeInfoClicked',this.props.info);
  }
  deleteClient= (EO) => {
    mobileEvents.emit('DeleteClient',this.props.info);
  }
  
  render() {
    console.log("MobileClient id=" + this.props.id + " render");
    return (
      <div className='MobileClient'>
        <div className='MobileClientFIO'>{this.props.info.fam + " " + this.props.info.im + " " + this.props.info.otch}</div>
        <div className='MobileClientInfo'>
          <div className='MobileClientBalance'>{this.props.info.balance}</div>
          {this.props.info.balance >= 0 && <div className='MobileClientIsBlocked' className={"MobileClientIsBlockedfalse"} >{"активен"}</div>}
          {this.props.info.balance < 0 && <div className='MobileClientIsBlocked' className={"MobileClientIsBlockedtrue"} >{"заблокирован"}</div>}
          <input type="button" value="редактировать"  onClick={this.changeInfo}/>
          <input type="button" value="Удалить" onClick={this.deleteClient} />
        </div>
      </div>
    );
  }
}

export default MobileClient;
