import { Logotype } from './components/svg.module'
import statue from './assets/image/statue.png'
import abstract1 from './assets/image/collection/abstract_1.jpg'
import abstract2 from './assets/image/collection/abstract_2.jpg'
import abstract3 from './assets/image/collection/abstract_3.jpg'
import abstract4 from './assets/image/collection/abstract_4.jpg'
import nft1 from './assets/image/auction/nft1.jpg'
import nft2 from './assets/image/auction/nft2.jpg'
import nft3 from './assets/image/auction/nft3.jpg'
import avatar1 from './assets/image/auction/avatar1.jpg'
import avatar2 from './assets/image/auction/avatar2.jpg'
import avatar3 from './assets/image/auction/avatar3.jpg'
import coin from './assets/image/coin.svg'

import { HomeIcon, 
    DiscoverIcon,
    CommunityIcon,
    WalletIcon,
    MarketIcon,
    Polygon,
    WalletSvg,
    AddIcon,
    CreateIcon,
    PenIcon, 
    Twitter,
    Discord, 
    Instagram,
    Vk,
    Facebook} from './components/svg.module'


// LOGO

export const designation = {
    logo: <Logotype />,
    brand: 'Nifter'
}



// NavBar
export const navigation = {
    title: 'Навигация',
    list: [
        {
            title:'Home',
            link:'/home',
            icon: <HomeIcon />
        },
        {
            title:'Market',
            link:'/market',
            icon: <MarketIcon />
        },
        {
            title:'Discover',
            link:'/discover',
            icon: <DiscoverIcon />
        },
        {
            title:'Community',
            link:'/community',
            icon: <CommunityIcon />
        },
        {
            title:'Wallet',
            link:'/wallet',
            icon: <WalletIcon />
        }
    ],
}


// HERO
export const hero = {
    title: 'Disсover, collect and sell dope NFTs',
    text: 'The wold largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs)',
    btn1: 'Explore',
    btn2: 'Create',
    statistics: [
        {
            title:'42k+',
            text:'User Active',
            icon: <Polygon />
        },
        {
            title:'8k+',
            text:'Artworks',
            icon: <Polygon />
        },
        {
            title:'2k+',
            text:'Artist',
            icon: <Polygon />
        },
    ],
    countdown: {
        date:'May 05,2024 17:25:59',
        bid: 'Current Bid',
        eth: '9.00 ETH',
        dollar: '$11,373.55',
        subtitle: 'Auction ends in',
        btn1:'Bid now',
        btn2:'See item',
    },  
    card: {
        id: 12546,
        nft: statue,
        avatar: avatar1,
        name: 'Prism Statue',
        price: '9.00',
        author: 'by davincidante',
        inStock: '1',
        minBid: '0.05',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
}

// Live Auction

export const liveAuction = {
    title: 'Live Auction',
    cards: [
        {
            id: 0,
            nft: nft1,
            avatar: avatar1,
            name: 'Onus Medu',
            price: '8.12',
            author: 'by davincidante',
            inStock: '8',
            minBid: '0.02',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eaque!',
        },
        {
            id: 1,
            nft: nft2,
            avatar: avatar2,
            name: 'Dream Big',
            price: '2.45',
            author: 'by Itvrn',
            inStock: '6',
            minBid: '0.02',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.',

        },
        {
            id: 2,
            nft: nft3,
            avatar: avatar3,
            name: 'Oddoties',
            price: '1.45',
            author: 'by brellias',
            inStock: '3',
            minBid: '0.02',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 3,
            nft: nft3,
            avatar: avatar3,
            name: 'Oddoties',
            price: '1.45',
            author: 'by brellias',
            inStock: '3',
            minBid: '0.02',
        },
        {
            id: 4,
            nft: nft2,
            avatar: avatar2,
            name: 'Dream Big',
            price: '2.45',
            author: 'Bi Itvrn',
            inStock: '6',
        },
        {
            id: 5,
            nft: nft3,
            avatar: avatar3,
            name: 'Oddoties',
            price: '1.45',
            author: 'By brellias',
            inStock: '3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
    ]
}

// COLLECTION

export const collection = {
    title: 'Hot Collection',
    cards: [
        {
            id: 1,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abstracttt',
            items: '24 items',
        },
        {
            id: 2,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abst',
            items: '15 items',
        },
        {
            id: 3,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abst',
            items: '15 items',
        },
        {
            id: 4,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'fbbgfnghm',
            items: '15 items',
        },
        {
            id: 5,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'sdcfaf',
            items: '15 items',
        },
        {
            id: 6,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abst',
            items: '15 items',
        },
        {
            id: 7,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abstracttt',
            items: '24 items',
        },
        {
            id: 8,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abst',
            items: '15 items',
        },
        {
            id: 9,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'Abst',
            items: '83 items',
        },
        {
            id: 10,
            images: [
                abstract1,
                abstract2,
                abstract3,
                abstract4,
            ],
            name: 'fbbgfnghm',
            items: '15 items',
        },
    ]
}

export const howItWorks = {
    title: 'Hot it Works',
    text: "Getting started and selling your Nfts. Explore the full process so you don't have any confusions.",
    btn: 'Load More',
    items: [
        {
        img: <WalletSvg />,
        title: 'Set up your wallet',
        text: 'To set up Apple Pay, add a debit, credit, or prepaid card to the Wallet app on your iPhone, Apple Watch, or other compatible device.',
        },
        {
        img: <CreateIcon />,
        title: 'Create collection',
        text: 'In the command, name is name of collection to be created. Options is a document and is used to specify configuration.',
        },
        {
        img: <AddIcon />,
        title: 'Add your NFTs',
        text: 'If you want to create a series of NFTs, you can use a collection to do so — on Rarible, you can create one right from the NFT creation screen.',
        },
        {
        img: <PenIcon />,
        title: 'List item for sale',
        text: 'Creating a listing is the first step in getting your item in front of ... We have a range of tools and options to help make sure your listing ends in a sale.',
        },
    ]
}


// CREATOR


export const creator = {
    title: 'Are you a digital creator?',
    text: 'Learn how Marketplace helps you protect and sell your unique digital creations, and join our growing community of thousand digital creators ',
    placeholder: 'Enter your email',
    btn: 'Get started',
    img: coin,
}






// FOOTER

export const footer = {
    text: 'The worlds largest digital marketplace for crypto collectibities and non tokens (NFTs) Buy, Sell and discover exclusive digital assets',
    icons: [
        {
        icon: <Twitter />,
        link: 'https://twitter.com/',
        },
        {
        icon: <Discord /> ,
        link: 'https://discord.com/',
        },
        {
        icon: <Instagram />,
        link: 'https://www.instagram.com/',
        },
        {
        icon: <Vk />,
        link: 'https://vk.com/',
        },
        {
        icon: <Facebook />,
        link: 'https://facebook.com/',
        },
    ],
    nav: [
        {
        title: 'Explore',
        list: [
            {
            subtitle: 'Art',
            link: '/art',
            },
            {
            subtitle: 'Photography',
            link: '/photography',
            },
            {
            subtitle: 'Music',
            link: '/music',
            },
            {
            subtitle: 'Games',
            link: '/games',
            },
        ],
        },
        {
        title: 'My Account',
        list: [
            {
            subtitle: 'My Profile',
            link: '/myprofile',
            },
            {
            subtitle: 'My Collections',
            link: '/mycollections',
            },
            {
            subtitle: 'My Favorites',
            link: '/myfavorites',
            },
            {
            subtitle: 'My Account Setings',
            link: '/accountsetings',
            },
        ],
        },
        {
        title: 'Resourses',
        list: [
            {
            subtitle: 'Help Centre',
            link: '/helpcentre',
            },
            {
            subtitle: 'Parthers',
            link: '/parthers',
            },
            {
            subtitle: 'Suggestions',
            link: '/suggestions',
            },
            {
            subtitle: 'Newsletter',
            link: '/newsletter',
            },
        ],
        },
        {
        title: 'Company',
        list: [
            {
            subtitle: 'About',
            link: '/about',
            },
            {
            subtitle: 'Careers',
            link: '/careers',
            },
            {
            subtitle: 'Rankings',
            link: '/rankings',
            },
            {
            subtitle: 'Activity',
            link: '/activity',
            },
        ],
        },
    ]
}