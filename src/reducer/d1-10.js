export default {
    size: '12',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Update on JASMIN Phase 4 & what this means for users '
            }
        }, {
            key: 'panel-0',
            type: 'panel',
            props: {
                label: 'The changing nature of JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Bryan Lawrence',
                        organisation: 'University of Reading'
                    }
                }, {
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
                label: 'JASMIN Infrastructure as of Phase 4',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Jonathan Churchill',
                        organisation: 'STFC Scientific Computing Department'
                    }
                }, {
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
                label: 'Storage improvements as of Phase 4',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Matt Pritchard',
                        organisation: 'STFC RAL Space / CEDA'
                    }
                }, {
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        contents: 'Something'
                    }
                }]
            }
        }, {
            key: 'panel-3',
            type: 'panel',
            props: {
                label: 'New capabilities and the evolution of services on JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Phil Kershaw',
                        organisation: 'STFC RAL Space / CEDA'
                    }
                }, {
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
        label: 'Home',
        onClick: 'goto-home'
    },
    right: {
        visible: true,
        label: 'Day 1 - 11am',
        onClick: 'goto-d1-11'
    }
}