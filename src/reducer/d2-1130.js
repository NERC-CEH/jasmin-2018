export default {
    size: '12',
    className: 'd21130',
    sections: [{
        key: 'd110',
        elements: [
            {
              key: 'title',
              type: 'head',
              props: {large: true, label: 'Storage system'}
            },
            {
              key: 'contact',
              type: 'contact',
              props: {
                name: 'Matt Pritchard',
                organisation: 'STFC RAL Space / CEDA',
                link: {
                  href:
                      'https://people.ncas.ac.uk/people/view/208',
                  label: 'Home Page'
                }
              }
            },
            {
              key: 'synopsis',
              type: 'markdown',
              props: {
                source: `Where and how things are stored
Interesting information about Elastic Tape and Near Line Archive
There is also the JASMIN Data Migration App to get data via HTTP
Here is the link [Presentation](https://drive.google.com/file/d/1957mdLoBzCgLeVj4FuYdSukFQwtWf6aW/view)`
              }
            }
          ]
    }],
    left: {
        visible: true,
        label: 'Day 2 - 10.30am',
        onClick: 'goto-d2-1030'
    },
    right: {
        visible: true,
        label: 'Day 2 - 12pm',
        onClick: 'goto-d2-12'
    }
}