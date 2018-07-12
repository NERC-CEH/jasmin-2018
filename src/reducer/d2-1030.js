export default {
    size: '12',
    className: 'd21030',
    sections: [{
        key: 'd110',
        elements: [
            {
              key: 'title',
              type: 'head',
              props: {large: true, label: 'Porting processing to the LOTUS batch cluster'}
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
                source: `What is LOTUS
How to use LOTUS, with lots of details on commands
Here is the link [Presentation](https://drive.google.com/file/d/1c_c1RJlTcd04qGUG_y2G_W7YSPrSeYN0/view)`
              }
            }
          ]
        }],
    left: {
        visible: true,
        label: 'Day 2 - 10am',
        onClick: 'goto-d2-10'
    },
    right: {
        visible: true,
        label: 'Day 2 - 11.30am',
        onClick: 'goto-d2-1130'
    }
}