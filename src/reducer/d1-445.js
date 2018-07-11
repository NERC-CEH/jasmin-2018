export default {
    size: '12',
    className: 'd1445',
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
                        organisation: 'University of Leicester',
                        link: {
                            href: 'https://www2.le.ac.uk/departments/physics/people/emmadodd/emmadodd',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `Again loads of data anaylsis for scientists.
Here is the link [Presentation](https://drive.google.com/file/d/1ByXNhEmyg5acvgFLdl5sjnEJfwMTt5a3/view)`
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
                        organisation: 'University of Leeds',
                        link: {
                            href: 'http://www.see.leeds.ac.uk/people/n.greenall',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `Slide 10 he outlines how he is using JASMIN
He mentioned that the database he is using is a mongo database.
The website is a list of hyperlinks to canned data.
Here is the link [Presentation](https://drive.google.com/file/d/1jIDgbbRLOlua4jeLJAwthAmSpbwhoswq/view)`
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
                        organisation: 'Plymouth Marine Laboratory',
                        link: {
                            href: 'http://www.pml.ac.uk/People/Science_Staff/Dr_Daniel_Clewley',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `Broken down into two parts, the science then he talks about how he uses JASMIN
He also mentions how people don't use JASMIN and why
Talks about deploying using ARC CE
Here is the link [Presentation](https://drive.google.com/file/d/1gIfZZdPenqeafASan241MgfNGBQVzb0g/view)`
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