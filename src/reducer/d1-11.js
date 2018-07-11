export default {
    size: '12',
    className: 'd111',
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
                        organisation: 'University of Oxford',
                        link: {
                            href: 'http://www.oerc.ox.ac.uk/people/sarahs',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `go check out <climateprediction.net>
They are usnig rsync to get data from the unmanaged cloud to the managed cloud.
Here is the link [Presentation](https://drive.google.com/file/d/1QUN3poecz2znfJhysmZI1v_-ZYgycnWx/view)`
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
                        organisation: 'STFC RAL Space',
                        link: {
                            href: 'https://www.ralspace.stfc.ac.uk/Pages/Remote-Sensing-Group-Members.aspx#Dr-Barry-Latter',
                            label: 'Profile'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `Lots of diagrams which might make sense to scientists.
Main thing was that JASMIN meant they could get results quick.
Here is the link [Presentation](https://drive.google.com/file/d/1g9XYCjJcnPP3ViAOP2uZcN0EzC2I_4f1/view)`
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
                        organisation: 'NCAS Reading',
                        link: {
                            href: 'http://www.met.reading.ac.uk/userpages/nr912752.php',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `The MetOffice have data inside JASMIN if you want to use it
Here is the link [Presnetation](https://drive.google.com/file/d/17uC8sK8Ph3absBs5Q0MGvdl9rxaT0G01/view)`
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
                        name: 'Andrew Banks',
                        link: {
                            href: 'http://www.npl.co.uk/people/andrew-banks',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `Lots of graphs again, which scientists might appreciate.
Simulated forest was pretty impressive.
Here is the link [Presnetation](https://drive.google.com/file/d/18vv6K5fU7wnUuI2tLkX6tpxYMQR_7fhr/view)`
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
                        address: 'New Zealand',
                        link: {
                            href: 'https://www.niwa.co.nz/people/jonny-williams',
                            label: 'Home Page'
                        }
                    }
                }, {
                    key: 'synopsis',
                    type: 'markdown',
                    props: {
                        source: `I think this is the person who tried to VC and it failed the first time.
Again more graphs and things for scientists, also some Memes.
He is using globus to transfar data, which reduced transfer time from a week to 2 hours.
Here is the link [Presnetation](https://drive.google.com/file/d/1pSrFO5FklREJcQQKRj1trB_Argplb1fp/view)`
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