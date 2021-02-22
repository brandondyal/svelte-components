import createAuth0Client from '@auth0/auth0-spa-js';
import { writable } from "svelte/store";

export const authStore = writable({});
export const user = writable({});

let auth0Client;

async function createClient(domain, clientId) {
  auth0Client = await createAuth0Client({
    domain: domain,
    client_id: clientId,
    onRedirectCallback: onAuthenticationSuccess
  });

  const isAuthenticated = await auth0Client.isAuthenticated();
  if (isAuthenticated) {
    await onAuthenticationSuccess(auth0Client);
    return auth0Client;
  }

  const queryParams = window.location.search;
  if (queryParams.includes('code=') || queryParams.includes('state=')) {
    await auth0Client.handleRedirectCallback();
    await onAuthenticationSuccess(auth0Client);
    window.history.replaceState({}, document.title, window.location.pathname);
    return auth0Client;
  }

  await auth0Client.loginWithRedirect({
    redirect_uri: window.location.origin
  });
}

async function onAuthenticationSuccess(auth0Client) {
  const tokenClaims = await auth0Client.getIdTokenClaims();
  const token = tokenClaims.__raw;
  authStore.set({ isAuthenticated: true, token: token });
  user.set(await auth0Client.getUser());
}

function logout() {
  return auth0Client.logout();
}

export const authService = {
  createClient,
  logout
};