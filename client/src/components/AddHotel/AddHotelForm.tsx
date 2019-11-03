import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../../Redux/actions';
import { IHotel } from '../../types';

// Components
import { TEXT_FIELDS, NUMBER_FIELDS, BOOLEAN_FIELDS } from './formFields';
import ToggleSwitch from '../External/ToggleSwitch/ToggleSwitch';
import DropzoneElement from '../External/Dropzone/DropzoneElement';
import Messages from '../External/Messages/Messages';

interface IState {
  files: Array<any>;
  fields: Partial<IHotel>;
  errors: any;
  hotel_images: any;
}

interface IProps {
  addHotel: (field: any) => void;
  history: any;
}

enum ErrorMessageEnum {
  provideValue = 'FAILURE! You must provide a value',
  empty = 'Cannot be empty',
}

class AddHotelForm extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      files: [],
      fields: {
        is_new: false,
        is_apartment: false,
        facilities_restaurant: false,
        facilities_gym: false,
        facilities_wifi: false,
        facilities_card_payment: false,
        facilities_game_room: false,
        hotel_images: [],
      },
      hotel_images: [],
      errors: {},
    };
  }

  handleValidation = () => {
    let fields: any = this.state.fields;
    let errors: any = {};
    let formIsValid: boolean = true;

    TEXT_FIELDS.forEach(({ name }) => {
      if (!fields[name]) {
        formIsValid = false;
        errors[name] = ErrorMessageEnum.empty;
      }
    });

    NUMBER_FIELDS.forEach(({ name }) => {
      if (!fields[name]) {
        formIsValid = false;
        errors[name] = ErrorMessageEnum.empty;
      }
    });

    this.setState({ errors: errors });
    return formIsValid;
  };

  handleChange = (field: any, e: any) => {
    let fields: any = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    this.handleValidation();
  };

  renderTextFields = () => {
    return (
      <div className="hotel-form__formValueBox">
        <div>
          <label htmlFor="">Hotel name</label>
          <input
            type="text"
            placeholder="Burj Al Arab"
            onChange={this.handleChange.bind(this, 'hotel_name')}
            value={this.state.fields['hotel_name'] || ''}
            className={
              this.state.errors['hotel_name'] ? 'input input__error' : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel adress</label>
          <input
            type="text"
            placeholder="Jumeirah St - Dubai"
            onChange={this.handleChange.bind(this, 'hotel_adress')}
            value={this.state.fields['hotel_adress'] || ''}
            className={
              this.state.errors['hotel_adress'] ? 'input input__error' : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel city</label>
          <input
            type="text"
            placeholder="Dubai"
            onChange={this.handleChange.bind(this, 'hotel_city')}
            value={this.state.fields['hotel_city'] || ''}
            className={
              this.state.errors['hotel_city'] ? 'input input__error' : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel province</label>
          <input
            type="text"
            placeholder={'Jumeirah'}
            onChange={this.handleChange.bind(this, 'hotel_province')}
            value={this.state.fields['hotel_province'] || ''}
            className={
              this.state.errors['hotel_province']
                ? 'input input__error'
                : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel description</label>
          <input
            type="text"
            placeholder={'This is the best hotel on the world'}
            onChange={this.handleChange.bind(this, 'hotel_description')}
            value={this.state.fields['hotel_description'] || ''}
            className={
              this.state.errors['hotel_description']
                ? 'input input__error'
                : 'input'
            }
          />
        </div>
      </div>
    );
  };

  renderNumberFields = () => {
    return (
      <div className="hotel-form__formValueBox">
        <div>
          <label htmlFor="">Hotel price</label>
          <input
            type="number"
            min={0}
            placeholder={'172'}
            onChange={this.handleChange.bind(this, 'hotel_price')}
            value={this.state.fields['hotel_price'] || 0}
            className={
              this.state.errors['hotel_price'] ? 'input input__error' : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel distance</label>
          <input
            type="number"
            min={0}
            placeholder={'10'}
            onChange={this.handleChange.bind(this, 'hotel_distance')}
            value={this.state.fields['hotel_distance'] || 0}
            className={
              this.state.errors['hotel_distance']
                ? 'input input__error'
                : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel stars</label>
          <input
            type="number"
            min={0}
            placeholder={'5'}
            onChange={this.handleChange.bind(this, 'hotel_stars')}
            value={this.state.fields['hotel_stars'] || 0}
            className={
              this.state.errors['hotel_stars'] ? 'input input__error' : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel rating</label>
          <input
            type="number"
            min={0}
            placeholder={'8.9'}
            onChange={this.handleChange.bind(this, 'hotel_rating')}
            value={this.state.fields['hotel_rating'] || 0}
            className={
              this.state.errors['hotel_rating'] ? 'input input__error' : 'input'
            }
          />
        </div>
        <div>
          <label htmlFor="">Hotel reviews</label>
          <input
            type="number"
            min={0}
            placeholder={'1200'}
            onChange={this.handleChange.bind(this, 'hotel_reviews')}
            value={this.state.fields['hotel_reviews'] || 0}
            className={
              this.state.errors['hotel_reviews']
                ? 'input input__error'
                : 'input'
            }
          />
        </div>
      </div>
    );
  };

  setToggleValues = (value = false, id: string) => {
    let fields: any = this.state.fields;
    fields[id] = value;
    this.setState({ fields });
  };

  renderBooleanFields = () => {
    return (
      <div className="hotel-form__formValueBox">
        {BOOLEAN_FIELDS.map(({ label, name }, i) => {
          return (
            <div className={'hotel-form__toggleInput'} key={i}>
              <ToggleSwitch
                onClick={this.setToggleValues}
                theme={'default'}
                className={'d-flex'}
                label={label}
                id={name}
              />
            </div>
          );
        })}
      </div>
    );
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    if (this.handleValidation()) {
      this.props.addHotel(this.state.fields);
      console.log(this.state.fields);
      this.props.history.push('/send');
    } else {
      return;
    }
  };

  onDrop = (files: any) => {
    this.setState({ files });
    this.encodeImageFileAsURL(files);
  };

  encodeImageFileAsURL = (elements: any) => {
    let fields: any = this.state.fields;
    fields['hotel_images'] = elements;
    this.setState({
      fields,
    });
  };

  render() {
    const isErrors: boolean = Object.keys(this.state.errors).length === 0;

    return (
      <div className={'hotel-form'}>
        {isErrors !== true && (
          <Messages type={'danger'} message={ErrorMessageEnum.provideValue} />
        )}
        <div className="hotel-form__container">
          <div className={'content__header-wrapper'}>
            <h1 className={'view-header'}>Fill to submit</h1>
          </div>
          <form
            onSubmit={this.handleSubmit}
            className="hotel-form__form"
            encType="multipart/form-data"
            method="post"
            id={'test-form'}>
            <div className="hotel-form__formValuesBox">
              {this.renderTextFields()}
              {this.renderNumberFields()}
              {this.renderBooleanFields()}
            </div>

            <div className={'content__header-wrapper'}>
              <h1 className={'view-header'}>Add files</h1>
            </div>
            <div className={'hotel-form__dropzone'}>
              <DropzoneElement onDrop={this.onDrop} files={this.state.files} />
              <div className="hotel-form__buttons">
                <Link to="/" className="button is-danger">
                  Cancel
                </Link>
                <button type="submit" className="button is-info">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    addHotelFormValues: state.addHotelFormValues,
  };
}

export default connect(
  mapStateToProps,
  actions,
)(withRouter(AddHotelForm));
