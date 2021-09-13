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
        let newInfCl = {
            id: this.props.info.id,
            fam: this.newFamRef.value,
            im: this.newImRef.value,
            otch: this.newOtchRef.value,
            balance: Number(this.newBalanceRef.value),
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
                        <input type='text' defaultValue={this.props.info.fam} ref={this.setNewFamRef} />
                    </div>
                    <div className={'prodInfo'}>
                        <div className='title'>{"имя: "}</div>
                        <input type='text' defaultValue={this.props.info.im} ref={this.setNewImRef} />
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{"отчество: "}</div>
                        <input type='text' defaultValue={this.props.info.otch} ref={this.setNewOtchRef} />
                    </div>

                    <div className={'prodInfo'}>
                        <div className='title'>{"баланс: "}</div>
                        <input type='text' defaultValue={this.props.info.balance} ref={this.setNewBalanceRef} />
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