export default {
    size: '12',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Interactive Computing'
            }
        }, {
            key: 'synopsis',
            type: 'paragraph',
            props: {
                contents: 'Something'
            }
        }]
    }],
    left: {
        visible: true,
        label: 'Day 1 - 4.45pm',
        onClick: 'goto-d1-445'
    },
    right: {
        visible: true,
        label: 'Day 2 - 10.30am',
        onClick: 'goto-d2-1030'
    }
}