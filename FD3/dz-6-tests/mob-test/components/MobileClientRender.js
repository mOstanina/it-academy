import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './Card';


class MobileClientRender extends React.PureComponent {

    static propTypes = {
        clientsForRender: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            })
        ),
        toSetAll: PropTypes.func.isRequired,
        toSetActiv: PropTypes.func.isRequired,
        toSetBlock: PropTypes.func.isRequired,
        toAaddClient: PropTypes.func.isRequired,
        workMode:PropTypes.number.isRequired,
        cardInfo:PropTypes.object
    };
    render() {

        console.log("MobileCompany render");

        var clientsCode = this.props.clientsForRender.map(client => {
            return <MobileClient key={client.id} id={client.id} info={client} />;
        }
        );

        return (
            <div className='MobileCompany'>
                <div className='MobileCompanyName'>Компания</div>
                <div className='btn'>
                    <input type="button" value="все" onClick={this.props.toSetAll} />
                    <input type="button" value="активные" onClick={this.props.toSetActiv} />
                    <input type="button" value="заблокированные" onClick={this.props.toSetBlock} />
                </div>
                <div className='MobileCompanyClients'>
                    {clientsCode}
                </div>
                {this.props.workMode === 0 && <input type="button" value="добавить нового клиента" onClick={this.props.toAaddClient} />}
                {this.props.workMode === 1 && <Card workMode={1} info={this.props.cardInfo} key={this.props.cardInfo.id} />}
                {this.props.workMode === 2 && <Card workMode={2} info={{ fam: null, im: null, otch: null, balance: null }} />}
            </div>
        );
    }
}

export default MobileClientRender;