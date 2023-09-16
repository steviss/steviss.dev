export interface ConvertSanityDocumentToTypeFunction<T = unknown, K = unknown, J = void> {
  (
    items: T[],
    options?: {
      prefix: string | undefined | boolean | null
      retrieveFields?: J
    },
  ): K[]
}
