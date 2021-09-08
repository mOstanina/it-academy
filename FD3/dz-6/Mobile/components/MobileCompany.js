import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
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
    name: this.props.name,
    clients: this.props.clients,
    clientsForRender: this.props.clients,
    workMode: 0,// 0- все; 1-активные; 2-заблокированные
  };
  setName1 = () => {
    this.setState({ name: 'МТС' });
  };
  setName2 = () => {
    this.setState({ name: 'Velcom' });
  };

  setAll = () => {     // выбраны все клиенты
    let newClients = this.state.clients; // копия самого массива клиентов
    this.setState({ clientsForRender: newClients });
    this.setState({ workMode: 0 });
  };
  setActive = () => {     // выбраны только активные клиенты
    // let newClients = [...this.state.clients]; // копия самого массива клиентов
    // let newClientsForRender=[];
    // newClients.forEach((c,i) => {
    //   if (c.balance >=0) {
    //     //newClientsForRender.push(c)
    //     newClients.splice(i,1,false);
    //   }
    // });
    // this.setState({ clientsForRender: newClientsForRender });
    this.setState({ workMode: 1 });
  };
  setBlocked = () => {     // выбраны только заблокированные клиенты
    // let newClients = [...this.state.clients]; // копия самого массива клиентов
    // let newClientsForRender=[];
    // newClients.forEach(c => {
    //   if (c.balance <0) {
    //     newClientsForRender.push(c)
    //   }
    // });
    // this.setState({ clientsForRender: newClientsForRender });
    this.setState({ workMode: 2 });
  }


  render() {

    console.log("MobileCompany render");

    var clientsCode = this.state.clientsForRender.map(client => {
      return <MobileClient key={client.id} id={client.id}  workMode={this.state.workMode} clients={this.state.clientsForRender} />;
    }
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='btn'>
          <input type="button" value="все" onClick={this.setAll} />
          <input type="button" value="активные" onClick={this.setActive} />
          <input type="button" value="заблокированные" onClick={this.setBlocked} />
        </div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="добавить нового клиента" />
      </div>
    );
  }
}

export default MobileCompany;
