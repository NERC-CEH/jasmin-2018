export default {
    size: '12',
    className: 'd110',
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
                        organisation: 'University of Reading',
                        link: {
                            href: 'http://www.met.reading.ac.uk/userpages/bnl.php',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `This topic was about storage, how we are consuming with lots of stats and graphs.
Key take away, there will be an Object Store like S3 bucket and we should be using tape to store data.
Quobyte looked interesting and they seem to be moving from Panasas to it.
Phase 5 could have more services for parrallel computing such as SLURM, DASK and SPARK.
Here is the link [Presentation](https://drive.google.com/file/d/1k2ERBw_-ioQzYQmRsMQCiHuHrI0uhukG/view)`
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
                        organisation: 'STFC Scientific Computing Department',
                        link: {
                            href: 'https://www.scd.stfc.ac.uk/Pages/Jonathan-Churchill.aspx',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `Went into more depth about Quobyte and Caringo.
Also gave lots of good information about storage capacity.
Here is the link [Presentation](https://drive.google.com/file/d/1lmVJYcbicD0ZmettyqQm8CmePfKCncDb/view)`
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
                    type: 'markdown',
                    props: {
                        source: `More about storage.
More space for home and scratch.
Some graphs about storage size.
Here is the link [Presentation](https://drive.google.com/file/d/1XHy0QzIC-iePeVj1ZWWvDRvpJ9VP0jdP/view)`
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
                    type: 'markdown',
                    props: {
                        source: `Yet even more about storage.
He also spoke about the cloud, check out slides 8-10 for some good diagrams.
The workshop made more sense of this.
Here is the link [Presentation](https://drive.google.com/file/d/1GT8ulTInoC0HW17ii97CH6EVBD0mQGGh/view)`
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