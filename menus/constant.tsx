import { Icon } from '@iconify/react';
import { SideNavItem } from '@/types/side-nav-types'; 


export const SUPER_SIDENAV_ITEMS: SideNavItem[] = [
    {
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: <Icon icon="lucide:home" width="18" height="18" />,
    },
    {
        title: 'Manage jobs',
        path: '/admin/transactions',
        icon: <Icon icon="lucide:archive" width="18" height="18" />,
        submenu: true,
        subMenuItems: [
            { title: 'Careers', path: '/admin/careers' },
            //     { title: 'Monthly', path: '/reports/monthly' },
            //     { title: 'Disbursement', path: '/reports/disbursement' },
            //     { title: 'Loans', path: '/reports/loan' }
        ],
    },
    // {
    //     title: 'Configuration',
    //     path: '/configuration',
    //     icon: <Icon icon="lucide:bolt" width="18" height="18" />,
    //     submenu: true,
    //     subMenuItems: [
    //         { title: 'Roles', path: '/configuration/roles' },
    //         { title: 'Stages', path: '/configuration/stages' },
    //         { title: 'Flow', path: '/configuration/flow' },
    //         { title: 'Flow Mapping', path: '/configuration/flow/mapping' },
    //         { title: 'Tenor', path: '/configuration/tenor' },
    //         { title: 'Tenor Rate', path: '/configuration/tenor-rate' },
    //         { title: 'General', path: '/configuration/general-configs' },
    //         { title: 'Capping', path: '/configuration/amount-capping' },
    //         { title: 'Password Policy', path: '/configuration/password-policy' },
    //         { title: 'Gender', path: '/configuration/gender' },
    //     ],
    // },
    // {
    //     title: 'Management',
    //     path: '/management',
    //     icon: <Icon icon="lucide:user-cog" width="18" height="18" />,
    //     submenu: true,
    //     subMenuItems: [
    //         { title: 'Constituencies', path: '/management/constituency' },
    //         { title: 'Branches', path: '/management/branches' },
    //         { title: 'Councils', path: '/management/councils' },
    //         { title: 'Users', path: '/management/users' },
    //         { title: 'Sectors', path: '/management/institution' },
    //     ],
    // }, 
    // {
    //     title: 'Logs',
    //     path: '/logs',
    //     icon: <Icon icon="lucide:scroll" width="18" height="18" />,
    //     submenu: true,
    //     subMenuItems: [
    //         { title: 'Authentication', path: '/logs/authentication' },
    //         { title: 'Activity', path: '/logs/activity' },
    //         { title: 'Batch', path: '/logs/batch' },
    //         { title: 'Email', path: '/logs/email' }
    //     ],
    // },
    // {
    //     title: 'Transactions',
    //     path: '/admin/transactions',
    //     icon: <Icon icon="lucide:layers-3" width="18" height="18" />,
    // },
    // {
    //     title: 'Merchants',
    //     path: '/admin/merchants',
    //     icon: <Icon icon="lucide:layers-3" width="18" height="18" />,
    // },
    // {
    //     title: 'Merchant Migration',
    //     path: '/admin/migrations',
    //     icon: <Icon icon="lucide:refresh-cw"width="18" height="18" />,
    // },
    // {
    //     title: 'Service Status',
    //     path: '/admin/service-status',
    //     icon: <Icon icon="lucide:bar-chart-3" width="18" height="18" />,
    // },
    // {
    //     title: 'Disbursement',
    //     path: '/disbursements',
    //     icon: <Icon icon="lucide:banknote" width="18" height="18" />,
    //     submenu: true,
    //     subMenuItems: [
    //         { title: 'Initiate', path: '/disbursements/initiate' }
    //     ],
    // },
];