//Data object which fetches data from all the pages

const Data = {
  fullName: "",
  address: "",
  email: "",
  panNumber: "",
  phoneNumber: "",
  aadharNumber: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  address1: "",
  address2: "",
  state: "",
  city: "",
  zipcode: "",
  addressProofType: "",
  idProofType: "",
  securityQuestionsId: "",
  securityQuestionsId2: "",
  securityQuestionsId3: "",
  Question1: "",
  Question2: "",
  Question3: "",
  Answer1: "",
  Answer2: "",
  Answer3: "",
};

export const getData = () => {
  return Data;
};

export const setPersonaldata = (data) => {
  Data.email = data.email;
  Data.panNumber = data.panNumber;
  Data.aadharNumber = data.aadharNumber;
  Data.phoneNumber = data.mobileNumber;
};

export const setCustomerdata = (data) => {
  Data.firstName = data.firstName;
  Data.lastName = data.lastName;
  Data.dateOfBirth = data.dob;
  Data.address1 = data.address1;
  Data.address2 = data.address2;
  Data.state = data.state;
  Data.city = data.city;
  Data.zipcode = data.zipcode;
  Data.fullName = data.firstName + " " + data.lastName;
  Data.address =
    data.address1 +
    ", " +
    data.address2 +
    " ," +
    data.state +
    ", " +
    data.city +
    ", " +
    data.zipcode;
};

export const setKycdata = (data) => {
  Data.addressProofType = data.addressproof;
  Data.idProofType = data.idproof;
};

export const setSecuritydata = (data) => {
  Data.Question1 = data.Question1;
  Data.Question2 = data.Question2;
  Data.Question3 = data.Question3;
  Data.Answer1 = data.Answer1;
  Data.Answer2 = data.Answer2;
  Data.Answer3 = data.Answer3;
};
