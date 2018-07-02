export default {
    size: '12',
    className: 'd21130',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Storage Systems'
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
        label: 'Day 2 - 10.30am',
        onClick: 'goto-d2-1030'
    },
    right: {
        visible: true,
        label: 'Day 2 - 12pm',
        onClick: 'goto-d2-12'
    }
}