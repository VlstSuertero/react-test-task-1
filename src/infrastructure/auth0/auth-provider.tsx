import React from 'react';
import {Auth0Provider} from '@auth0/auth0-react';

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN || '';
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || '';
    const redirectUri = `${window.location.origin}`;

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri
            }}
        >
            {children}
        </Auth0Provider>
    );
};

export default AuthProvider;
