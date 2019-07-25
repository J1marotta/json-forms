export const formSchema = {
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
    title: 'gender identity',
    required: false,
    options: [
      { name: 'Female', value: 1 },
      { name: 'Male', value: 2 },
      { name: 'Other', value: 3 },
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
    type: 'checkbox',
    required: false,
  },
  guardian: {
    required: false,
    name: {
      type: 'text',
      required: true,
    },
    contact: {
      type: 'tel',
      required: true,  
    }
  },
}
