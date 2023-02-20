export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getStatusRefresh = state => state.auth.isRefreshing;

export const getStatusLoading = state => state.auth.isLoading;

export const getStatusError = state => state.auth.error;
