export default {
    size: '12',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Cloud Computing'
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
        label: 'Day 2 - 11.30am',
        onClick: 'goto-d2-1130'
    }
}