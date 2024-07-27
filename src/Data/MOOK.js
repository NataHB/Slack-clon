const WORKSPACES = [
    {
        title: 'Universo Pepes',
        thumbnail: '/thumnail_slack_verde.png',
        canals: [
            {
                title: 'Las Pepas',
                messages: [
                    {
                        thumbnail: '/thumnail_slack_rojo.png',
                        author: 'Pepa',
                        text: 'Bienvenidos a Slack!',
                        time: '19:57',
                        id: 1
                    }
                ],
                id_canal: 1
            },
            {
                title: 'Los Pepes',
                messages: [
                    {
                        thumbnail: '',
                        author: 'Pepe',
                        text: 'Bienvenidos a Slack!',
                        time: '19:57',
                        id: 1
                    }
                ],
                id_canal: 2
            }
        ], 
        id: 1
    },
    {
        title: 'Micheria',
        thumbnail: 'https://a.slack-edge.com/80588/img/avatars-teams/ava_0009-88.png',
        canals: [
            {
                title: 'Los Michos',
                messages: [
                    {
                        thumbnail: '',
                        author: 'Micho',
                        text: 'Miau, Bienvenidos a Slack!',
                        time: '19:57',
                        id: 1
                    }
                ],
                id_canal: 1
            },
            {
                title: 'Las Michas',
                messages: [
                    {
                        thumbnail: '',
                        author: 'Micha',
                        text: 'Miau, Bienvenidos a Slack!',
                        time: '19:57',
                        id: 1
                    }
                ],
                id_canal: 2
            }
        ], 
        id: 2
    }
]

export default WORKSPACES