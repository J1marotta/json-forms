const schema = {
  name: {
    title: 'Name',
    required: true,
    type: 'text',
  },
  dob: {
    title: 'Date of birth',
    required: true,
    type: 'date',
    min: '2001-01-01',
  },
  gender: {
    title: 'Gender',
    required: false,
    options: [
      { name: 'Female', value: 1 },
      { name: 'Male', value: 2 },
    ],
  },
  number: {
    title: 'Number',
    type: "tel",
    required: false,
    prefix: { 
      type: 'text',
      required: true,
    }
  },
  guardianConsent: {
    title: 'Guardian required',
    type: 'checkbox',
    required: false,
  },
  guardian: {
    required: false,
    name: {
      title: `Guardian's name`,
      type: 'text',
      required: true,
    },
    contact: {
      title: `Guardian's contact number`,
      type: 'tel',
      required: true,  
    }
  },
}

export default schema