/**
 * Um array de rotas publicas
 * Não será necessaria a autenticação
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * Um array de rotas utilizadas para autenticação
 * Essas rotas irão redirecionar usuarios logados para /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * O prefixo para a API de authnticação de rotas
 * Rotas que começam com esse prefixo são usadas pela a API
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * O direecionamento para usuarios logados
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
