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
    max: '2001-01-01',
    min: '1920-01-01',
    guardianConsent: {
      title: 'Guardian required',
      type: 'checkbox',
      required: false,
    },
  },
  gender: {
    title: 'Gender',
    required: false,
    type: 'select',
    options: [
      { name: 'Female', value: 1 },
      { name: 'Male', value: 2 },
    ],
  },
  contact: {
    title: 'Contact',
    type: "tel",
    required: false,
    prefix: { 
      type: 'text',
      required: true,
    }
  },
 
}

export default schema