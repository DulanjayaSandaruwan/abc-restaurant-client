import { HomeRounded, ContactsRounded, NotificationsRounded, PersonRounded, SettingsRounded, DeliveryDiningRounded, FastfoodRounded, SupervisorAccountRounded, StickyNote2Rounded } from "@mui/icons-material";

export const SideBarList = [
    {
        name: 'Dashboard',
        icon: <HomeRounded />,
        path: '/admin/',
        identity: '',
    },
    {
        name: 'Staff Management',
        icon: <SupervisorAccountRounded />,
        path: '',
        identity: 'user',
        children: [
            {
                name: 'Staff',
                path: '/admin/user-staff',
            },
            {
                name: 'Customer',
                path: '/admin/user-customer',
            },
        ],
    },
    {
        name: 'Product Management',
        icon: <FastfoodRounded />,
        path: '',
        identity: 'item',
        children: [
            {
                name: 'Item',
                path: '/admin/item',
            },
            {
                name: 'Category',
                path: '/admin/item-category',
            },
            {
                name: 'Offers & Discount',
                path: '/admin/item-offers',
            },
        ],

    },
    {
        name: 'Order',
        icon: <DeliveryDiningRounded />,
        path: '/admin/order',
        identity: '',
    },
    {
        name: 'inquiry',
        icon: <StickyNote2Rounded />,
        path: '/admin/inquiry',
        identity: '',
    },
    {
        name: 'Notification',
        icon: <NotificationsRounded />,
        path: '/admin/notification',
        identity: '',
    },
    {
        name: 'Setting',
        icon: <SettingsRounded />,
        path: '/admin/setting',
        identityL: '',
    }
];