export async function apiFetch<T>(
  url: string,
  options: any = {},
  headers: any = {},
) {
  try {
    const config = useRuntimeConfig();
    // Use lang from params if provided, otherwise try to get from i18n
    let lang = options?.params?.lang;
    if (!lang) {
      try {
        const { locale } = useI18n();
        lang = locale.value;
      } catch {
        lang = 'en'; // fallback
      }
    }

    const mergedParams = {
      ...(options?.params ?? {}),
      lang,
    };

    return await $fetch<T>(`${config.public.apiBase}${url}`, {
      ...options,
      params: mergedParams,
      headers: {
        ...options.headers,
        ...headers,
      },
    });
  } catch (error: any) {
    if (error.response) {
      console.error('Response error:', error.response);
    }

    throw error;
  }
}
