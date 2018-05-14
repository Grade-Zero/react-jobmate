var Jobs = {
  list: [
    {
      id: 1,
      title: 'Tech Lead',
      industry: {
        id: 1,
        name: 'IT',
        labelColor: 'red'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 1,
          name: 'Full Time'
        }
      ],
      display: true
    }, {
      id: 2,
      title: 'Diesel Fitter',
      industry: {
        id: 2,
        name: 'Automotive',
        labelColor: 'green'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 1,
          name: 'Full Time'
        }
      ],
      display: true
    }, {
      id: 3,
      title: 'Floor Salesman',
      industry: {
        id: 3,
        name: 'Retail',
        labelColor: 'blue'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 1,
          name: 'Full Time'
        }
      ],
      display: true
    }, {
      id: 4,
      title: 'Crane Driver',
      industry: {
        id: 2,
        name: 'Automotive',
        labelColor: 'green'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 3,
          name: 'Contract / Freelance'
        }
      ],
      display: true
    }, {
      id: 5,
      title: 'Brick Layer',
      industry: {
        id: 4,
        name: 'Construction',
        labelColor: 'yellow'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 2,
          name: 'Part Time'
        }
      ],
      display: true
    }, {
      id: 6,
      title: 'Web Designer',
      industry: {
        id: 1,
        name: 'IT',
        labelColor: 'red'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$80000',
      tags: [
        {
          id: 2,
          name: 'Part Time'
        }
      ],
      display: true
    }, {
      id: 7,
      title: 'Senior Developer',
      industry: {
        id: 1,
        name: 'IT',
        labelColor: 'red'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 1,
          name: 'Full Time'
        }
      ],
      display: true
    }, {
      id: 8,
      title: 'Store Manager',
      industry: {
        id: 3,
        name: 'Retail',
        labelColor: 'red'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$180000',
      tags: [
        {
          id: 1,
          name: 'Full Time'
        }
      ],
      display: true
    }, {
      id: 9,
      title: 'Forklift Driver',
      industry: {
        id: 2,
        name: 'Automotive',
        labelColor: 'green'
      },
      updated: '2018-02-01',
      company: 'Konami',
      value: '$25000',
      tags: [
        {
          id: 4,
          name: 'Internship'
        }
      ],
      display: true
    }
  ],
  types: [
    {
      id: 1,
      name: 'Full Time',
      selected: false
    }, {
      id: 2,
      name: 'Part Time',
      selected: false
    }, {
      id: 3,
      name: 'Contract / Freelance',
      selected: false
    }, {
      id: 4,
      name: 'Internship',
      selected: false
    }
  ],
  industries: [
    {
      id: 1,
      name: 'IT',
      selected: false
    }, {
      id: 2,
      name: 'Automotive',
      selected: false
    }, {
      id: 3,
      name: 'Retail',
      selected: false
    }, {
      id: 4,
      name: 'Construction',
      selected: false
    }
  ]
}

export default Jobs;
