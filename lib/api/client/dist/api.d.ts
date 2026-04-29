import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { CreateThemeBody, DownloadTemplate200, GenerateMarketingBody, GenerateTemplateBody, GenerateThemeBody, GeneratedMarketing, GeneratedTemplate, GeneratedTheme, HealthStatus, ListMarketingPhrasesParams, ListTemplatesParams, MarketingPhrase, SaveTemplateBody, SearchInspirationsBody, SearchInspirationsResult, Template, Theme, ThemeStats } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * Returns server health status
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all saved themes
 */
export declare const getListThemesUrl: () => string;
export declare const listThemes: (options?: RequestInit) => Promise<Theme[]>;
export declare const getListThemesQueryKey: () => readonly ["/api/themes"];
export declare const getListThemesQueryOptions: <TData = Awaited<ReturnType<typeof listThemes>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listThemes>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listThemes>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListThemesQueryResult = NonNullable<Awaited<ReturnType<typeof listThemes>>>;
export type ListThemesQueryError = ErrorType<unknown>;
/**
 * @summary List all saved themes
 */
export declare function useListThemes<TData = Awaited<ReturnType<typeof listThemes>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listThemes>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new theme
 */
export declare const getCreateThemeUrl: () => string;
export declare const createTheme: (createThemeBody: CreateThemeBody, options?: RequestInit) => Promise<Theme>;
export declare const getCreateThemeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTheme>>, TError, {
        data: BodyType<CreateThemeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createTheme>>, TError, {
    data: BodyType<CreateThemeBody>;
}, TContext>;
export type CreateThemeMutationResult = NonNullable<Awaited<ReturnType<typeof createTheme>>>;
export type CreateThemeMutationBody = BodyType<CreateThemeBody>;
export type CreateThemeMutationError = ErrorType<unknown>;
/**
 * @summary Create a new theme
 */
export declare const useCreateTheme: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createTheme>>, TError, {
        data: BodyType<CreateThemeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createTheme>>, TError, {
    data: BodyType<CreateThemeBody>;
}, TContext>;
/**
 * @summary Get a theme by ID
 */
export declare const getGetThemeUrl: (id: number) => string;
export declare const getTheme: (id: number, options?: RequestInit) => Promise<Theme>;
export declare const getGetThemeQueryKey: (id: number) => readonly [`/api/themes/${number}`];
export declare const getGetThemeQueryOptions: <TData = Awaited<ReturnType<typeof getTheme>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTheme>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTheme>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetThemeQueryResult = NonNullable<Awaited<ReturnType<typeof getTheme>>>;
export type GetThemeQueryError = ErrorType<void>;
/**
 * @summary Get a theme by ID
 */
export declare function useGetTheme<TData = Awaited<ReturnType<typeof getTheme>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTheme>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Delete a theme
 */
export declare const getDeleteThemeUrl: (id: number) => string;
export declare const deleteTheme: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteThemeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTheme>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteTheme>>, TError, {
    id: number;
}, TContext>;
export type DeleteThemeMutationResult = NonNullable<Awaited<ReturnType<typeof deleteTheme>>>;
export type DeleteThemeMutationError = ErrorType<unknown>;
/**
 * @summary Delete a theme
 */
export declare const useDeleteTheme: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteTheme>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteTheme>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Generate AI theme based on project description
 */
export declare const getGenerateThemeUrl: () => string;
export declare const generateTheme: (generateThemeBody: GenerateThemeBody, options?: RequestInit) => Promise<GeneratedTheme>;
export declare const getGenerateThemeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateTheme>>, TError, {
        data: BodyType<GenerateThemeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateTheme>>, TError, {
    data: BodyType<GenerateThemeBody>;
}, TContext>;
export type GenerateThemeMutationResult = NonNullable<Awaited<ReturnType<typeof generateTheme>>>;
export type GenerateThemeMutationBody = BodyType<GenerateThemeBody>;
export type GenerateThemeMutationError = ErrorType<unknown>;
/**
 * @summary Generate AI theme based on project description
 */
export declare const useGenerateTheme: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateTheme>>, TError, {
        data: BodyType<GenerateThemeBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateTheme>>, TError, {
    data: BodyType<GenerateThemeBody>;
}, TContext>;
/**
 * @summary List all templates
 */
export declare const getListTemplatesUrl: (params?: ListTemplatesParams) => string;
export declare const listTemplates: (params?: ListTemplatesParams, options?: RequestInit) => Promise<Template[]>;
export declare const getListTemplatesQueryKey: (params?: ListTemplatesParams) => readonly ["/api/templates", ...ListTemplatesParams[]];
export declare const getListTemplatesQueryOptions: <TData = Awaited<ReturnType<typeof listTemplates>>, TError = ErrorType<unknown>>(params?: ListTemplatesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTemplates>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listTemplates>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListTemplatesQueryResult = NonNullable<Awaited<ReturnType<typeof listTemplates>>>;
export type ListTemplatesQueryError = ErrorType<unknown>;
/**
 * @summary List all templates
 */
export declare function useListTemplates<TData = Awaited<ReturnType<typeof listTemplates>>, TError = ErrorType<unknown>>(params?: ListTemplatesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listTemplates>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Save a template to the marketplace
 */
export declare const getSaveTemplateUrl: () => string;
export declare const saveTemplate: (saveTemplateBody: SaveTemplateBody, options?: RequestInit) => Promise<Template>;
export declare const getSaveTemplateMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveTemplate>>, TError, {
        data: BodyType<SaveTemplateBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof saveTemplate>>, TError, {
    data: BodyType<SaveTemplateBody>;
}, TContext>;
export type SaveTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof saveTemplate>>>;
export type SaveTemplateMutationBody = BodyType<SaveTemplateBody>;
export type SaveTemplateMutationError = ErrorType<unknown>;
/**
 * @summary Save a template to the marketplace
 */
export declare const useSaveTemplate: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof saveTemplate>>, TError, {
        data: BodyType<SaveTemplateBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof saveTemplate>>, TError, {
    data: BodyType<SaveTemplateBody>;
}, TContext>;
/**
 * @summary Get a template by ID
 */
export declare const getGetTemplateUrl: (id: number) => string;
export declare const getTemplate: (id: number, options?: RequestInit) => Promise<Template>;
export declare const getGetTemplateQueryKey: (id: number) => readonly [`/api/templates/${number}`];
export declare const getGetTemplateQueryOptions: <TData = Awaited<ReturnType<typeof getTemplate>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplate>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTemplate>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTemplateQueryResult = NonNullable<Awaited<ReturnType<typeof getTemplate>>>;
export type GetTemplateQueryError = ErrorType<void>;
/**
 * @summary Get a template by ID
 */
export declare function useGetTemplate<TData = Awaited<ReturnType<typeof getTemplate>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTemplate>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Download a template (increments download count and returns HTML)
 */
export declare const getDownloadTemplateUrl: (id: number) => string;
export declare const downloadTemplate: (id: number, options?: RequestInit) => Promise<DownloadTemplate200>;
export declare const getDownloadTemplateMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof downloadTemplate>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof downloadTemplate>>, TError, {
    id: number;
}, TContext>;
export type DownloadTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof downloadTemplate>>>;
export type DownloadTemplateMutationError = ErrorType<unknown>;
/**
 * @summary Download a template (increments download count and returns HTML)
 */
export declare const useDownloadTemplate: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof downloadTemplate>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof downloadTemplate>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Generate AI template (banner, product page, logo) for a project
 */
export declare const getGenerateTemplateUrl: () => string;
export declare const generateTemplate: (generateTemplateBody: GenerateTemplateBody, options?: RequestInit) => Promise<GeneratedTemplate>;
export declare const getGenerateTemplateMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateTemplate>>, TError, {
        data: BodyType<GenerateTemplateBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateTemplate>>, TError, {
    data: BodyType<GenerateTemplateBody>;
}, TContext>;
export type GenerateTemplateMutationResult = NonNullable<Awaited<ReturnType<typeof generateTemplate>>>;
export type GenerateTemplateMutationBody = BodyType<GenerateTemplateBody>;
export type GenerateTemplateMutationError = ErrorType<unknown>;
/**
 * @summary Generate AI template (banner, product page, logo) for a project
 */
export declare const useGenerateTemplate: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateTemplate>>, TError, {
        data: BodyType<GenerateTemplateBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateTemplate>>, TError, {
    data: BodyType<GenerateTemplateBody>;
}, TContext>;
/**
 * @summary List marketing phrases
 */
export declare const getListMarketingPhrasesUrl: (params?: ListMarketingPhrasesParams) => string;
export declare const listMarketingPhrases: (params?: ListMarketingPhrasesParams, options?: RequestInit) => Promise<MarketingPhrase[]>;
export declare const getListMarketingPhrasesQueryKey: (params?: ListMarketingPhrasesParams) => readonly ["/api/marketing/phrases", ...ListMarketingPhrasesParams[]];
export declare const getListMarketingPhrasesQueryOptions: <TData = Awaited<ReturnType<typeof listMarketingPhrases>>, TError = ErrorType<unknown>>(params?: ListMarketingPhrasesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMarketingPhrases>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listMarketingPhrases>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListMarketingPhrasesQueryResult = NonNullable<Awaited<ReturnType<typeof listMarketingPhrases>>>;
export type ListMarketingPhrasesQueryError = ErrorType<unknown>;
/**
 * @summary List marketing phrases
 */
export declare function useListMarketingPhrases<TData = Awaited<ReturnType<typeof listMarketingPhrases>>, TError = ErrorType<unknown>>(params?: ListMarketingPhrasesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listMarketingPhrases>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Generate marketing phrases and ad copies for a project
 */
export declare const getGenerateMarketingContentUrl: () => string;
export declare const generateMarketingContent: (generateMarketingBody: GenerateMarketingBody, options?: RequestInit) => Promise<GeneratedMarketing>;
export declare const getGenerateMarketingContentMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateMarketingContent>>, TError, {
        data: BodyType<GenerateMarketingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof generateMarketingContent>>, TError, {
    data: BodyType<GenerateMarketingBody>;
}, TContext>;
export type GenerateMarketingContentMutationResult = NonNullable<Awaited<ReturnType<typeof generateMarketingContent>>>;
export type GenerateMarketingContentMutationBody = BodyType<GenerateMarketingBody>;
export type GenerateMarketingContentMutationError = ErrorType<unknown>;
/**
 * @summary Generate marketing phrases and ad copies for a project
 */
export declare const useGenerateMarketingContent: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof generateMarketingContent>>, TError, {
        data: BodyType<GenerateMarketingBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof generateMarketingContent>>, TError, {
    data: BodyType<GenerateMarketingBody>;
}, TContext>;
/**
 * @summary Search design inspirations via Google/Meta
 */
export declare const getSearchInspirationsUrl: () => string;
export declare const searchInspirations: (searchInspirationsBody: SearchInspirationsBody, options?: RequestInit) => Promise<SearchInspirationsResult>;
export declare const getSearchInspirationsMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof searchInspirations>>, TError, {
        data: BodyType<SearchInspirationsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof searchInspirations>>, TError, {
    data: BodyType<SearchInspirationsBody>;
}, TContext>;
export type SearchInspirationsMutationResult = NonNullable<Awaited<ReturnType<typeof searchInspirations>>>;
export type SearchInspirationsMutationBody = BodyType<SearchInspirationsBody>;
export type SearchInspirationsMutationError = ErrorType<unknown>;
/**
 * @summary Search design inspirations via Google/Meta
 */
export declare const useSearchInspirations: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof searchInspirations>>, TError, {
        data: BodyType<SearchInspirationsBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof searchInspirations>>, TError, {
    data: BodyType<SearchInspirationsBody>;
}, TContext>;
/**
 * @summary Get most popular/trending themes
 */
export declare const getGetPopularThemesUrl: () => string;
export declare const getPopularThemes: (options?: RequestInit) => Promise<Theme[]>;
export declare const getGetPopularThemesQueryKey: () => readonly ["/api/themes/popular"];
export declare const getGetPopularThemesQueryOptions: <TData = Awaited<ReturnType<typeof getPopularThemes>>, TError = ErrorType<unknown>>(options?: {
    quer
