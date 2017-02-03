export default [
  {
    name: "Item delivery",
    description: 'This process is used for delivering items to customers',
    startAction: 'Package item',
    actions: [
      {
        name: 'Package item',
        type: 'TASK',
        nextAction: 'Send email to customer',
        roles: 'packager'
      },
      {
        name: 'Send email to customer',
        type: 'TASK',
        nextAction: 'send',
        roles: 'sails'
      },
      {
        name: 'Transport item',
        type: 'TASK',
        roles: 'delivery'
      }
    ]
  },
  {
    name: "Item delivery2",
    description: 'This process is used for delivering items to customers',
    startAction: 'Package item',
    actions: [
      {
        name: 'Package item',
        type: 'TASK',
        nextAction: 'Send email to customer',
        roles: 'packager'
      },
      {
        name: 'Send email to customer',
        type: 'TASK',
        nextAction: 'send',
        roles: 'sails'
      },
      {
        name: 'Transport item',
        type: 'TASK',
        roles: 'delivery'
      }
    ]
  }
]
