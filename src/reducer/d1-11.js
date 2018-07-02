export default {
    size: '12',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Climate & Atmospheric Science'
            }
        }, {
            key: 'panel-0',
            type: 'panel',
            props: {
                label: 'Climateprediction.net program usage of JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Sarah Sparrow',
                        organisation: 'University of Oxford'
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
                label: 'Earth system modelling in New Zealand enabled by JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Jonny Williams',
                        organisation: 'National Institute of Water and Atmospheric Research (NIWA)',
                        address: 'New Zealand'
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
                label: 'The production of Near Real Time and 20+ year height-resolved ozone data from GOME-class instrument',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Barry Latter',
                        organisation: 'STFC RAL Space'
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
                label: 'High Resolution Climate Modelling Analysis on JASMIN',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Benoit Vanniere',
                        organisation: 'NCAS Reading'
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
                label: 'NPL\'s Use of the JASMIN Supercomputer Facility for Earth Observation and Climate Research',
                elements: [{
                    key: 'contact',
                    type: 'contact',
                    props: {
                        name: 'Andrew Banks, Niall Origo, Javier Gorroño, Samuel Hunt and Jonathan Mittaz'
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
        label: 'Day 1 - 10am',
        onClick: 'goto-d1-10'
    },
    right: {
        visible: true,
        label: 'Day 1 - 1.30pm',
        onClick: 'goto-d1-130'
    }
}