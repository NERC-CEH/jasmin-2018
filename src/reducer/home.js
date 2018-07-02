export default {
    size: '12',
    sections: [{
        key: 'home',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'JASMIN 2018'
            }
        }, {
            key: 'synopsis',
            type: 'paragraph',
            props: {
                large: true,
                contents: `This year's event aims to provide:

    An opportunity to learn about recent developments from the JASMIN Team, including updates on the ongoing Phase 4 upgrade
    An opportunity for existing users to share their experiences of using JASMIN
    A chance for new or potential users to learn about what's possible on JASMIN
    Discussion around topics of interest
    A chance to network with colleagues working in similar areas, or tacking problems using similar methods
    An opportunity to tour the JASMIN infrastructure`
            }
        }]
    }],
    right: {
        visible: true,
        label: 'Day 1 - 10am',
        onClick: 'goto-d1-10'
    }
}