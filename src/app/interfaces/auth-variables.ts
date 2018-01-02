interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    REDIRECT: string;
    SCOPE: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'c8upwGuqBMXf26zhZsrzWklDYJRAIOsi',
    CLIENT_DOMAIN: 'tutorialudemy.auth0.com', // e.g., you.auth0.com
    REDIRECT: 'http://localhost:4200',
    SCOPE: 'openid profile email'
  };

