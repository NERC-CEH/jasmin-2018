export default {
    size: '12',
    className: 'd1315',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Round Table'
            }
        }, {
            key: 'panel-0',
            type: 'panel',
            props: {
                label: 'Installing software on JASMIN',
                elements: [{
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        contents: 'Something'
                    }
                }]
            }
        }, {
            key: 'panel-1',
            type: 'panel',
            props: {
                label: 'I want to move my application to JASMIN, what services should I use?',
                elements: [{
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        contents: 'Something'
                    }
                }]
            }
        }, {
            key: 'panel-2',
            type: 'panel',
            props: {
                label: 'Data discovery, visualisation and distribution',
                elements: [{
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        contents: 'Something'
                    }
                }]
            }
        }]
    }],
    left: {
        visible: true,
        label: 'Day 1 - 1.30pm',
        onClick: 'goto-d1-130'
    },
    right: {
        visible: true,
        label: 'Day 1 - 4.45pm',
        onClick: 'goto-d1-445'
    }
}