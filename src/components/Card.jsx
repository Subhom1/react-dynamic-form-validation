import React, { Component } from "react";
class Card extends Component {
  render() {
    const {
      username,
      useremail,
      userphone,
      handleChange,
      index,
      deleteUser,
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
    } = this.props;
    console.log(errNameIndex, "error");
    return (
      <div className="col-lg-6 small-card">
        <div className="input-wrapper">
          <div className="form-group input-block">
            <input
              type="text"
              className={`form-control small-input " 
              ${userNameErr && errNameIndex === index && "is-invalid"} 
              ${
                userNameLengthErr &&
                errNameLengthIndex === index &&
                "is-invalidCustom"
              }
              ${
                userNameDigitErr &&
                errNameDigitIndex === index &&
                "is-invalidCustom"
              }
              `}
              placeholder="Manager Name"
              name="username"
              value={username}
              onChange={handleChange}
              data-id={index}
              id={`user-${index}`}
            />
            <div className="invalid-feedback">Name is required!</div>
            {userNameLengthErr && errNameLengthIndex === index && (
              <div className="invalid-feedbackCustom">
                Name must be of 5 character
              </div>
            )}
            {userNameDigitErr && errNameDigitIndex === index && (
              <div className="invalid-feedbackCustom">
                No digit or symbol please!
              </div>
            )}
          </div>
          <div className="form-group input-block">
            <input
              type="email"
              className={`form-control small-input  ${
                userEmailErr && errEmailIndex === index && "is-invalid"
              } ${
                userEmailInvalidErr &&
                errEmailInvalidIndex === index &&
                "is-invalidCustom"
              }`}
              placeholder="Email"
              name="useremail"
              value={useremail}
              onChange={handleChange}
              data-id={index}
              id={`useremail-${index}`}
            />
            <div className="invalid-feedback">Email is required!</div>
            {userEmailInvalidErr && errEmailInvalidIndex === index && (
              <div className="invalid-feedbackCustom">Email is invalid</div>
            )}
          </div>
          <div className="form-group input-block">
            <input
              type="text"
              className={`form-control small-input 
              ${userPhoneErr && errPhoneIndex === index && "is-invalid"}
              ${
                userPhoneLetterErr &&
                errPhoneLetterIndex === index &&
                "is-invalidCustom"
              }
              ${
                userPhoneLengthErr &&
                errPhoneLengthIndex === index &&
                "is-invalidCustom"
              }
              `}
              placeholder="Phone"
              name="userphone"
              value={userphone}
              onChange={handleChange}
              data-id={index}
              id={`userphone-${index}`}
            />
            <div className="invalid-feedback">Phone is required!</div>
            {userPhoneLetterErr && errPhoneLetterIndex === index && (
              <div className="invalid-feedbackCustom">No Letter PLease!</div>
            )}
            {userPhoneLengthErr && errPhoneLengthIndex === index && (
              <div className="invalid-feedbackCustom">Must be 10 digit!</div>
            )}
          </div>
        </div>
        <div className="icon-wrapper">
          <React.Fragment>
            <i className="fas fa-user-edit" style={{ color: "#000" }}></i>
            {index !== 0 && (
              <button className="btn p-0" onClick={deleteUser}>
                <i className="fas fa-trash" style={{ color: "#f00" }}></i>
              </button>
            )}
          </React.Fragment>
          <React.Fragment>
            {/* <i class="fas fa-check-circle"></i>
            <i class="fas fa-times-circle"></i> */}
          </React.Fragment>
        </div>
      </div>
    );
  }
}

export default Card;
