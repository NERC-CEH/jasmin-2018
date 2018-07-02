export default {
    size: '12',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Land & Environment'
            }
        }, {
            key: 'panel-0',
            type: 'panel',
            props: {
                label: 'Exploitation of JASMIN architecture for multi-mission land surface temperature',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Emma Dodd',
                        organisation: 'University of Leicester'
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
                label: 'COMET-LiCSAR: Automatic InSAR processing of Sentinel-1 products on JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Nicholas Greenall',
                        organisation: 'University of Leeds'
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
                label: 'Processing NERC Airborne Research Facility Data using JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Daniel Clewley',
                        organisation: 'Plymouth Marine Laboratory'
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
        label: 'Day 1 - 3.15pm',
        onClick: 'goto-d1-315'
    },
    right: {
        visible: true,
        label: 'Day 2 - 10am',
        onClick: 'goto-d2-10'
    }
}