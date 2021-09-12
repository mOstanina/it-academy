import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card';

import './MobileCompany.css';
import { mobileEvents } from './events';

import { setActive } from '../modules/setActive';
import { setBlocked } from '../modules/setBlock';
import { toSave } from '../modules/toSave';
import { toDelete } from '../modules/toDelete';


class MobileCompany extends React.PureComponent {

  static propTypes = {
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
    clients: this.props.clients,
    clientsForRender: this.props.clients,
    workMode: 0,// 0- только просмотр всего списка; 1-редактирование клиента; 2-добавление клиента
    cardInfo: null,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileCompany-componentWillReceiveProps");
    this.setState({
      clientsForRender: newProps.clients,
      clients: newProps.clients,
      cardInfo: newProps.cardInfo,
    });
  };
  componentDidMount = () => {
    mobileEvents.addListener('ChangeInfoClicked', this.toChangeInfo);
    mobileEvents.addListener('DeleteClient', this.toDeleteClient);
    mobileEvents.addListener('SaveClient', this.toSaveClient);
    mobileEvents.addListener('Cancel', this.toCancel);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('ChangeInfoClicked', this.toChangeInfo);
    mobileEvents.removeListener('DeleteClient', this.toDeleteClient);
    mobileEvents.removeListener('SaveClient', this.toSaveClient);
    mobileEvents.removeListener('Cancel', this.toCancel);
  };
  toCancel = () => {
    this.setState({ workMode: 0 });
  }
  toChangeInfo = (inf) => {
    this.setState({ workMode: 1, cardInfo: inf });
  }
  toDeleteClient = (inf) => {
    let newClients = toDelete(inf, this.state.clients)
    this.setState({ clients: newClients, clientsForRender: newClients, workMode: 0 });
  }

  toSaveClient = (inf) => {
    let newClients = toSave(inf, this.state.clients, this.state.workMode)
    this.setState({ clients: newClients, clientsForRender: newClients, workMode: 0 })
  }

  addClient = () => {
    this.setState({ workMode: 2 });
  };

  setAll = () => {     // выбраны все клиенты
    let newClients = this.state.clients; // копия самого массива клиентов
    this.setState({ clientsForRender: newClients });
    this.setState({ workMode: 0 });
  };
  setActiv = () => {// выбраны только активные клиенты
    let newClients = setActive(this.state.clients)
    this.setState({ clientsForRender: newClients, workMode: 0 });
  };

  setBlock = () => {     // выбраны только заблокированные клиенты
    let newClients = setBlocked(this.state.clients)
    this.setState({ clientsForRender: newClients });
    this.setState({ workMode: 0 });
  }
  render() {

    console.log("MobileCompany render");

    var clientsCode = this.state.clientsForRender.map(client => {
      return <MobileClient key={client.id} id={client.id} info={client} />;
    }
    );

    return (
      <div className='MobileCompany'>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='btn'>
          <input type="button" value="все" onClick={this.setAll} />
          <input type="button" value="активные" onClick={this.setActiv} />
          <input type="button" value="заблокированные" onClick={this.setBlock} />
        </div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        {this.state.workMode === 0 && <input type="button" value="добавить нового клиента" onClick={this.addClient} />}
        {this.state.workMode === 1 && <Card workMode={1} info={this.state.cardInfo} key={this.state.cardInfo.id} />}
        {this.state.workMode === 2 && <Card workMode={2} info={{ fam: null, im: null, otch: null, balance: null }} />}
      </div>
    );
  }
}

export default MobileCompany;
