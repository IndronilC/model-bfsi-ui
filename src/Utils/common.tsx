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
  
  export const setPersonaldata = (data:any) => {
    Data.email = data.email;
    Data.panNumber = data.panNumber;
    Data.aadharNumber = data.aadharNumber;
    Data.phoneNumber = data.mobileNumber;
  };
  
  