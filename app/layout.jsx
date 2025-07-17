import '../styles/globals.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material';

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
                        <Navbar />

                        <main className="grow">{children}</main>

                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
