export default {
    size: '12',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Innovation & Collaboration on JASMIN'
            }
        }, {
            key: 'panel-0',
            type: 'panel',
            props: {
                label: 'The NERC Data Labs Initiative',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'James Downing',
                        organisation: 'Tessella'
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
                label: 'Using JASMIN as the Storage infrastructure for the CEDA Archive',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Sam Pepler',
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
            key: 'panel-2',
            type: 'panel',
            props: {
                label: 'Building a Web Processing Service to run NAME-on-JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Teri Forey',
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
            key: 'panel-3',
            type: 'panel',
            props: {
                label: 'Analysis Ready Data - standards and environmental applications in government',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Ulric Wilson',
                        organisation: 'JNCC'
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
            key: 'panel-4',
            type: 'panel',
            props: {
                label: 'Met Office collaboration and JASMIN - Current Use and Future Plans',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Roger Milton',
                        organisation: 'Met Office'
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
        label: 'Day 1 - 11am',
        onClick: 'goto-d1-11'
    },
    right: {
        visible: true,
        label: 'Day 1 - 3.15pm',
        onClick: 'goto-d1-315'
    }
}