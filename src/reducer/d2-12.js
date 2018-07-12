export default {
    size: '12',
    className: 'd212',
    sections: [{
        key: 'd110',
        elements: [
            {
              key: 'title',
              type: 'head',
              props: {large: true, label: '	Cloud computing'}
            },
            {
              key: 'contact',
              type: 'contact',
              props: {
                name: 'Phil Kershaw',
                organisation: 'STFC RAL Space / CEDA',
                link: {
                  href:
                      'https://people.ncas.ac.uk/people/view/206',
                  label: 'Home Page'
                }
              }
            },
            {
              key: 'synopsis',
              type: 'markdown',
              props: {
                source: `Starts off by talking about what is a cloud
Some diagrams on how you should interact with the cloud
It also talks about storage in slide 7
Also they are moving from VMWare to Open Stack
Here is the link [Presentation](https://drive.google.com/file/d/198GADhL6xRCgHIh_baxD8MgED2dLXHJj/view)
He also has a video (there werre more than just this one video, it might get updated) [Video](https://drive.google.com/file/d/18zvEbnwt6D97MgRaMqRkS3smsrqeDDaC/view)`
              }
            }
          ]
    }],
    left: {
        visible: true,
        label: 'Day 2 - 11.30am',
        onClick: 'goto-d2-1130'
    }
}