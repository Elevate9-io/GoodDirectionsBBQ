import '../styles/globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, Typography } from '@mui/material';

import theme from './theme';

import Navbar from '../components/Navbar';


export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Good Directions BBQ'
    }
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/images/logo.png" sizes="any" />
            </head>
            <body>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h1'>
                            Website currently down due to {
                                <a style={{ fontSize: 58 }} href="https://www.linkedin.com/in/austyn-beach-236055161">
                                    Austyn Beach
                                </a>
                            } owing his employees money. Please contact him at (214) 298-0472
                        </Typography>

                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
