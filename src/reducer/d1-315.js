export default {
    size: '12',
    className: 'd1315',
    sections: [{
        key: 'd110',
        elements: [{
            key: 'title',
            type: 'head',
            props: {
                large: true,
                label: 'Round Table'
            }
        }, {
            key: 'panel-0',
            type: 'panel',
            props: {
                label: 'Installing software on JASMIN',
                elements: [{
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        large: true,
                        contents: 'The main point of discussion from my group was Matlab. It seems that if you want software you can either make a request or spin up a VM. The latter would be preferable. I did request they create a GUI or something similar to AWS console to make things like this easier.'
                    }
                }]
            }
        }, {
            key: 'panel-1',
            type: 'panel',
            props: {
                label: 'I want to move my application to JASMIN, what services should I use?',
                elements: [{
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        contents: 'This was an interesting talk because it highlighted that there is a cloud which is built using VMWare and openstack. Hopfully in the future they migrate to Openstack completly. We also discussed a bit about SSO and it seemed it might be possible to integrate CEH login similar to CEDA login.'
                    }
                }]
            }
        }, {
            key: 'panel-2',
            type: 'panel',
            props: {
                label: 'Data discovery, visualisation and distribution',
                elements: [{
                    key: 'synopsis',
                    type: 'paragraph',
                    props: {
                        contents: 'There are multiple places to put your data and it seemed like a good idea to make as much of it as available as possible. There didn\'t apear to be a catalogue to help find data or to describe the data. Also found that putting things on tape would mean you have to make a request to get the data back, but there is a python API available to do this.'
                    }
                }]
            }
        }]
    }],
    left: {
        visible: true,
        label: 'Day 1 - 1.30pm',
        onClick: 'goto-d1-130'
    },
    right: {
        visible: true,
        label: 'Day 1 - 4.45pm',
        onClick: 'goto-d1-445'
    }
}