export default {
    menu: {
        items: [{
            key: 'hero-0',
            label: 'HOME',
            icon: 'home',
            onClick: 'goto-home'
        }, {
            key: 'hero-1',
            label: 'DAY 1',
            items: [{
                key: 'hero-1-0',
                label: '10AM',
                onClick: 'goto-d1-10'
            }, {
                key: 'hero-1-1',
                label: '11AM',
                onClick: 'goto-d1-11'
            }, {
                key: 'hero-1-2',
                label: '1.30PM',
                onClick: 'goto-d1-130'
            }, {
                key: 'hero-1-4',
                label: '3.15PM',
                onClick: 'goto-d1-315'
            }, {
                key: 'hero-1-5',
                label: '4.45PM',
                onClick: 'goto-d1-445'
            }]
        }, {
            key: 'hero-2',
            label: 'DAY 2',
            items: [{
                key: 'hero-2-0',
                label: '10AM',
                onClick: 'goto-d2-10'
            }, {
                key: 'hero-2-1',
                label: '10.30AM',
                onClick: 'goto-d2-1030'
            }, {
                key: 'hero-2-2',
                label: '11.30AM',
                onClick: 'goto-d2-1130'
            }, {
                key: 'hero-2-3',
                label: '12AM',
                onClick: 'goto-d2-12'
            }]
        }]
    },
    user: {
        label: 'Luke Preston'
    }
}