import React, { Component } from "react";
import Card from "./Card";
class Form extends Component {
  //has-success in form group & is-valid in form-contron
  //has-danger in form group & is-invalid in form-contron
  constructor(props) {
    super(props);

    this.state = {
      company: "",
      prodUnitName: "",
      email: "",
      phone: "",
      users: [
        {
          username: "",
          useremail: "",
          userphone: "",
        },
      ],
      userNameErr: false,
      userNameLengthErr: false,
      userNameDigitErr: false,

      userEmailErr: false,
      userEmailInvalidErr: false,

      userPhoneErr: false,
      userPhoneLetterErr: false,
      userPhoneLengthErr: false,

      compErr: false,
      prodNameReqErr: false,
      prodNameReqErrLength: false,
      prodNameNumberErr: false,
      emailReqErr: false,
      emailInvalidErr: false,
      phoneReqErr: false,
      phoneLetterErr: false,
      phoneLengthErr: false,

      errNameIndex: null,
      errNameLengthIndex: null,
      errNameDigitIndex: null,

      errEmailIndex: null,
      errEmailInvalidIndex: null,

      errPhoneIndex: null,
      errPhoneLetterIndex: null,
      errPhoneLengthIndex: null,
    };
  }
  validate = () => {
    const { company, prodUnitName, email, phone, users } = this.state;
    //For username
    let errNameIndex = users.findIndex((x) => {
      return x.username.length === 0;
    });
    let errNameLengthIndex = users.findIndex((x) => {
      return x.username.length < 5;
    });
    let errNameDigitIndex = users.findIndex((x, idx) => {
      return x.username.length && !/^[a-zA-Z\s]*$/.test(x.username);
    });
    //For useremail
    let errEmailIndex = users.findIndex((x) => {
      return x.useremail.length === 0;
    });
    let errEmailInvalidIndex = users.findIndex((x) => {
      return (
        x.useremail.length &&
        !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(x.useremail)
      );
    });
    //For userphone
    let errPhoneIndex = users.findIndex((x) => {
      return x.userphone.length === 0;
    });
    let errPhoneLetterIndex = users.findIndex((x) => {
      return x.userphone.length && !/^\d+$/.test(x.userphone);
    });
    let errPhoneLengthIndex = users.findIndex((x) => {
      return x.userphone.length < 10;
    });
    console.log(errNameIndex, "errNameIndex");
    // this.setState({ ...this.state.errNameIndex, errNameIndex: errNameIndex });

    let isError = false;
    let errorFlags = {
      compErr: false,
      prodNameReqErrLength: false,
      prodNameReqErr: false,
      prodNameNumberErr: false,
      emailReqErr: false,
      emailInvalidErr: false,
      phoneReqErr: false,
      phoneLetterErr: false,
      phoneLengthErr: false,
      userNameErr: false,
      userNameLengthErr: false,
      userNameDigitErr: false,
      userEmailErr: false,
      userEmailInvalidErr: false,
      userPhoneErr: false,
      userPhoneLetterErr: false,
      userPhoneLengthErr: false,
      errNameIndex: null,
      errNameLengthIndex: null,
      errNameDigitIndex: null,
      errEmailIndex: null,
      errEmailInvalidIndex: null,
      errPhoneIndex: null,
      errPhoneLetterIndex: null,
      errPhoneLengthIndex: null,
    };
    if (company === "") {
      isError = true;
      errorFlags.compErr = true;
    }
    //userName
    if (errNameIndex > -1) {
      isError = true;
      errorFlags.userNameErr = true;
      errorFlags.errNameIndex = errNameIndex;
    } else if (errNameDigitIndex > -1) {
      //First have to check i/p is digit or not
      isError = true;
      errorFlags.userNameDigitErr = true;
      errorFlags.errNameDigitIndex = errNameDigitIndex;
    } else if (errNameLengthIndex > -1 && !errorFlags.errNameDigitIndex) {
      // Then have to check length is less than required or not
      isError = true;
      errorFlags.userNameLengthErr = true;
      errorFlags.errNameLengthIndex = errNameLengthIndex;
    }
    //userEmail
    if (errEmailIndex > -1) {
      isError = true;
      errorFlags.userEmailErr = true;
      errorFlags.errEmailIndex = errEmailIndex;
    } else if (errEmailInvalidIndex > -1) {
      isError = true;
      errorFlags.userEmailInvalidErr = true;
      errorFlags.errEmailInvalidIndex = errEmailInvalidIndex;
    }
    //userPhone
    if (errPhoneIndex > -1) {
      isError = true;
      errorFlags.userPhoneErr = true;
      errorFlags.errPhoneIndex = errPhoneIndex;
    } else if (errPhoneLetterIndex > -1) {
      isError = true;
      errorFlags.userPhoneLetterErr = true;
      errorFlags.errPhoneLetterIndex = errPhoneLetterIndex;
    } else if (errPhoneLengthIndex > -1 && !errorFlags.userphoneLetterErr) {
      isError = true;
      errorFlags.userPhoneLengthErr = true;
      errorFlags.errPhoneLengthIndex = errPhoneLengthIndex;
    }

    if (prodUnitName.length === 0) {
      isError = true;
      errorFlags.prodNameReqErr = true;
    } else if (prodUnitName.length && !/^[a-zA-Z\s]*$/.test(prodUnitName)) {
      isError = true;
      errorFlags.prodNameNumberErr = true;
    } else if (prodUnitName.length < 5 && !errorFlags.prodNameNumberErr) {
      isError = true;
      errorFlags.prodNameReqErrLength = true;
    }

    if (phone === "") {
      isError = true;
      errorFlags.phoneReqErr = true;
    } else if (phone.length && !/^\d+$/.test(phone)) {
      isError = true;
      errorFlags.phoneLetterErr = true;
    } else if (phone.length < 10 && !errorFlags.phoneLetterErr) {
      isError = true;
      errorFlags.phoneLengthErr = true;
    }

    if (email === "") {
      isError = true;
      errorFlags.emailReqErr = true;
    }
    if (email.length && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isError = true;
      errorFlags.emailInvalidErr = true;
    }

    // if (isError) {
    this.setState({ ...this.state, ...errorFlags });
    // }

    setTimeout(() => {
      this.setState({
        ...this.state,
        compErr: false,
        prodNameReqErr: false,
        prodNameReqErrLength: false,
        prodNameNumberErr: false,
        emailReqErr: false,
        emailInvalidErr: false,
        phoneReqErr: false,
        phoneLetterErr: false,
        phoneLengthErr: false,
        userNameErr: false,
        userNameLengthErr: false,
        userNameDigitErr: false,
        userEmailErr: false,
        userEmailInvalidErr: false,
        userPhoneErr: false,
        userPhoneLetterErr: false,
        userPhoneLengthErr: false,
        errNameIndex: null,
        errNameLengthIndex: null,
        errNameDigitIndex: null,
        errEmailIndex: null,
        errEmailInvalidIndex: null,
        errPhoneIndex: null,
        errPhoneLetterIndex: null,
        errPhoneLengthIndex: null,
      });
    }, 4000);
    return isError;
  };
  handleChange = (e) => {
    e.preventDefault();
    // const { company, prodUnitName, email, phone, compErr } = this.state;
    console.log(e.target.value);
    let target = e.target;
    const { name, value } = target;

    if (["username", "useremail", "userphone"].includes(name)) {
      let usrs = [...this.state.users];
      usrs[target.dataset.id][name] = value;
      this.setState({ users: usrs });
    } else {
      this.setState({ ...this.state, [name]: value });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let err = this.validate();
    if (!err) {
      console.log(this.state);
    }
  };
  addUser = (e) => {
    e.preventDefault();
    this.setState({
      users: [
        ...this.state.users,
        { username: "", useremail: "", userphone: "" },
      ],
    });
  };
  deleteUser = (e, index) => {
    e.preventDefault();
    this.setState({
      users: this.state.users.filter((elem, idx) => index !== idx),
    });
  };
  render() {
    const {
      company,
      prodUnitName,
      email,
      phone,
      users,
      compErr,
      prodNameReqErr,
      prodNameReqErrLength,
      prodNameNumberErr,
      emailReqErr,
      emailInvalidErr,
      phoneReqErr,
      phoneLetterErr,
      phoneLengthErr,
      userNameErr,
      userNameLengthErr,
      userNameDigitErr,
      userEmailErr,
      userEmailInvalidErr,
      userPhoneErr,
      userPhoneLengthErr,
      userPhoneLetterErr,
      errNameIndex,
      errNameLengthIndex,
      errNameDigitIndex,
      errEmailIndex,
      errEmailInvalidIndex,
      errPhoneIndex,
      errPhoneLetterIndex,
      errPhoneLengthIndex,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="card-body">
          <h4>Basic Info</h4>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <select
                  className={`custom-select ${compErr && "is-invalid"}`}
                  name="company"
                  id="company"
                  onChange={this.handleChange}
                >
                  <option value="">Company</option>
                  <option value="KFC">KFC</option>
                  <option value="Mc Donalds">Mc Donalds</option>
                  <option value="Burger King">Burger King</option>
                  <option value="Dominos">Dominos</option>
                  <option value="Pizza Hut">Pizza Hut</option>
                </select>
                <div className="invalid-feedback">Please choose a company!</div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Email Address"
                  className={`form-control ${emailReqErr && "is-invalid"} 
                  ${emailInvalidErr && "is-invalidCustom"}`}
                  id="email"
                  onChange={this.handleChange}
                />
                <div className="valid-feedback">Perfect!</div>
                <div className="invalid-feedback">Email is required!</div>
                {emailInvalidErr && (
                  <div className="invalid-feedbackCustom">
                    Email is invalid!
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  value={prodUnitName}
                  name="prodUnitName"
                  placeholder="Production Unit Name"
                  className={`form-control ${prodNameReqErr && "is-invalid"} ${
                    prodNameReqErrLength && "is-invalidCustom"
                  } ${prodNameNumberErr && "is-invalidCustom"}`}
                  id="prodUnitName"
                  onChange={this.handleChange}
                />
                <div className="valid-feedback">Perfect!</div>
                <div className="invalid-feedback">Name is required!</div>
                {prodNameReqErrLength && (
                  <div className="invalid-feedbackCustom">
                    Name must be 5 character!
                  </div>
                )}
                {prodNameNumberErr && (
                  <div className="invalid-feedbackCustom">
                    No digit or symbol please!
                  </div>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={phone}
                  name="phone"
                  placeholder="Phone"
                  className={`form-control ${phoneReqErr && "is-invalid"} ${
                    phoneLetterErr && "is-invalidCustom"
                  } ${phoneLengthErr && "is-invalidCustom"}`}
                  id="phone"
                  onChange={this.handleChange}
                />
                <div className="valid-feedback">Perfect!</div>
                <div className="invalid-feedback">Phone is required!</div>
                {phoneLetterErr && (
                  <div className="invalid-feedbackCustom">
                    No letter please!
                  </div>
                )}
                {phoneLengthErr && (
                  <div className="invalid-feedbackCustom">
                    Must be 10 digit!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h4>Assign Product Unit Manager</h4>
          <div className="row py-3">
            {users.map((item, index) => {
              return (
                <Card
                  key={index}
                  username={item.username}
                  useremail={item.useremail}
                  userphone={item.userphone}
                  handleChange={this.handleChange}
                  index={index}
                  deleteUser={(e) => this.deleteUser(e, index)}
                  userNameErr={userNameErr}
                  userNameLengthErr={userNameLengthErr}
                  userNameDigitErr={userNameDigitErr}
                  userEmailErr={userEmailErr}
                  userEmailInvalidErr={userEmailInvalidErr}
                  userPhoneErr={userPhoneErr}
                  userPhoneLengthErr={userPhoneLengthErr}
                  userPhoneLetterErr={userPhoneLetterErr}
                  errNameIndex={errNameIndex}
                  errNameLengthIndex={errNameLengthIndex}
                  errNameDigitIndex={errNameDigitIndex}
                  errEmailIndex={errEmailIndex}
                  errEmailInvalidIndex={errEmailInvalidIndex}
                  errPhoneIndex={errPhoneIndex}
                  errPhoneLetterIndex={errPhoneLetterIndex}
                  errPhoneLengthIndex={errPhoneLengthIndex}
                />
              );
            })}
          </div>
          <button
            className="btn btn-secondary add_manager"
            onClick={this.addUser}
          >
            Add Product Unit Manager<i className="fas fa-plus"></i>
          </button>
        </div>
        <button type="submit" className="btn btn-success _submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
