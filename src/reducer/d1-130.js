export default {
    size: '12',
    className: 'd1130',
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
                        name: 'Joshua Foster',
                        organisation: 'Tessella',
                        link: {
                            href: 'https://github.com/joshua-foster-tessella',
                            label: 'GitHub'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `A good presentation with a video.
Clearly very few people had used DataLabs and it seemed even less understood what you would do with it.
The problem (imo) is that JASMIN is a CLI and sold as such.
Here is the link [Presentation]()`
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
                    type: 'markdown',
                    props: {
                        source: `Quite a fun presentation about storage.
The interesting parts about history and where the data is heading.
There is also a good table (Slide 11) about the evolution of the data.
Here is the link [Presentation](https://drive.google.com/file/d/1wD184zrtiA2wvoI-X0FL5WwXbQvrVaUF/view)`
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
                        organisation: 'University of Leicester',
                        link: {
                            href: 'https://www2.le.ac.uk/offices/itservices/images/staff/TeriForey.jpg/view',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `She ran a demo which worked.
It was a form, which would submit a job, then you could follow it's progress.
All run on JASMIN.
Here is the link [Presentation](https://drive.google.com/file/d/196Qy76EY6Gl_cz39-woXrfEKcH52hfYF/view)`
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
                    type: 'markdown',
                    props: {
                        source: `More graphs for scientists.
Here is the link [Presentation](https://drive.google.com/file/d/1zdthA13Jqo7wKl2GcwjPNMesTyPnFha6/view)`
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
                    type: 'markdown',
                    props: {
                        source: `The MetOffice combining their data and JASMIN data.
Here is the link [Presentation](https://drive.google.com/file/d/1lkNNTnbiqjIFI-0cIec3M5V8OO1XFA0n/view)`
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