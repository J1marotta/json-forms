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
  },
  guardian: {
    required: false,
    hidden: true,
    name: '',
    contact: '',
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
    title: 'Contacts',
    type: "number",
    required: false,
  },
  
}

export default schema