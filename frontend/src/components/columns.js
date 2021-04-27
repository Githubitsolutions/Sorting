export const COLUMNS = [

{
  Header:'id',
  Footer:'id',
  accessor:'id'
},
  {
    Header:'First Name',
    Footer:'First Name',
    accessor:'first_name'
  },
  {
    Header:'Last Name',
    Footer:'Last Name',
    accessor:'last_name'
  },{
    Header:'Email',
    Footer:'Email',
    accessor:'email'
  },
  {
    Header:'Date Of Birth',
    Footer:'Date Of Birth',
    accessor:'date_of_birth'
  },
  {
    Header:'Age',
    Footer:'Age',
    accessor:'age'
  },
  {
    Header:'Phone',
    Footer:'Phone',
    accessor:'phone'
  }
]

export const GROUPED_COLUMNS = [

  {
    Header:'id',
    Footer:'id',
    accessor:'id'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    columns: [
      {
        Header:'First Name',
        Footer:'First Name',
        accessor:'first_name'
      },
      {
        Header:'Last Name',
        Footer:'Last Name',
        accessor:'last_name'
      }
    ]
  },
  {
    Header: 'Info',
    Footer: 'Info',
    columns: [
      {
        Header:'Email',
        Footer:'Email',
        accessor:'email'
      },
      {
        Header:'Date Of Birth',
        Footer:'Date Of Birth',
        accessor:'date_of_birth'
      },
      {
        Header:'Age',
        Footer:'Age',
        accessor:'age'
      },
      {
        Header:'Phone',
        Footer:'Phone',
        accessor:'phone'
      }
    ]
  }
]
