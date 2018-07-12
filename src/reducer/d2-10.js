export default {
  size: '12',
  className: 'd210',
  sections: [{
    key: 'd110',
    elements: [
      {
        key: 'title',
        type: 'head',
        props: {large: true, label: 'Interactive Computing'}
      },
      {
        key: 'contact',
        type: 'contact',
        props: {
          name: 'Fatima Chami',
          organisation: 'STFC RAL Space / CEDA',
          link: {
            href:
                'https://people.ncas.ac.uk/people/view/372',
            label: 'Home Page'
          }
        }
      },
      {
        key: 'synopsis',
        type: 'markdown',
        props: {
          source: `How to create a JASMIN account
How to log on
How do some \`bsub\` commands
There is also useful information about the servers so you can decide which to use
Here is the link [Presentation](https://drive.google.com/file/d/1LBgl7rAMp009yQQ7lW0ayhHC5bUtizus/view)`
        }
      }
    ]
  }],
  left: {visible: true, label: 'Day 1 - 4.45pm', onClick: 'goto-d1-445'},
  right: {visible: true, label: 'Day 2 - 10.30am', onClick: 'goto-d2-1030'}
}
