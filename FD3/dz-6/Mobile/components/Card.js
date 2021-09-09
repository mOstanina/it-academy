import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import { mobileEvents } from './events';

class Card extends React.PureComponent {
    static propTypes = {
        workMode: PropTypes.number.isRequired, //передаю режим отображения крточки: редактирование / добавление
        info: PropTypes.shape({
            id: PropTypes.number,
            fam: PropTypes.string,
            im: PropTypes.string,
            otch: PropTypes.string,
            balance: PropTypes.number,
        })
    };
  
    state = {   
        fam: this.props.info.fam,
        im: this.props.info.im,
        otch: this.props.info.otch,
        balance: this.props.info.balance,
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

    newFamRef = null;
    setNewFamRef = (ref) => {
        this.newFamRef = ref;
    };

    newImRef = null;
    setNewImRef = (ref) => {
        this.newImRef = ref;
    };

    newOtchRef = null;
    setNewOtchRef = (ref) => {
        this.newOtchRef = ref;
    };

    newBalanceRef = null;
    setNewBalanceRef = (ref) => {
        this.newBalanceRef = ref;
    };

    setNewInfo = () => {
        let newFam = null;
        let newIm = null;
        let newOtch = null;
        let newBalance = null;
        if (this.setNewFamRef) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
            newFam = this.newFamRef.value;
            this.setState({ fam: newFam });
        }
        if (this.setNewImRef) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
            newIm = this.newImRef.value;
            this.setState({ im: newIm });
        }
        if (this.setNewOtchRef) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
            newOtch = this.newOtchRef.value;
            this.setState({ otch: newOtch });
        }
        if (this.setNewBalanceRef) { // всегда проверяем - мало ли метод вызовется когда DOM-элемента уже нет или ещё нет?
            newBalance = this.newBalanceRef.value;
            this.setState({ balance: newBalance });
        }
        let idCl = this.props.info.id
        let newInfCl = {
            id: idCl,
            fam: newFam,
            im: newIm,
            otch: newOtch,
            balance: Number(newBalance),
        }
        mobileEvents.emit('SaveClient', newInfCl);
    };
    cancel = () => {
        mobileEvents.emit('Cancel');
    }

    render() {
        console.log("Card is render");
        if (this.props.workMode === 1) {     //режим редактирования
            return (
                <div className={'cssClassSelectEdit'}>
                    <div className={'prodInfo'}>
                        <div className='title'>{"фамилия: "}</div>
                        <input type='text' defaultValue={this.state.fam} ref={this.setNewFamRef} />
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{"имя: "}</div>
                        <input type='text' defaultValue={this.state.im} ref={this.setNewImRef} />
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{"отчество: "}</div>
                        <input type='text' defaultValue={this.state.otch} ref={this.setNewOtchRef} />
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{"баланс: "}</div>
                        <input type='text' defaultValue={this.state.balance} ref={this.setNewBalanceRef} />
                    </div>
                    <input type='button' value='save' onClick={this.setNewInfo} />
                    <input type='button' value='cancel' onClick={this.cancel} />
                </div>
            )
        } else if (this.props.workMode === 2) {// режим добаления нового товара
            return (
                <div className={'cssClassSelectEdit'}>
                    <div className={'prodInfo'}>
                        <div className='title'>{"фамилия: "}</div>
                        <input type='text' ref={this.setNewFamRef} />
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{"имя: "}</div>
                        <input type='text' ref={this.setNewImRef} />
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{"отчество: "}</div>
                        <input type='text' ref={this.setNewOtchRef} />
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{"баланс: "}</div>
                        <input type='text' ref={this.setNewBalanceRef} />
                    </div>
                    <input type='button' value='save' onClick={this.setNewInfo} />
                    <input type='button' value='cancel' onClick={this.cancel} />
                </div>
            )
        }
    }
}
export default Card;