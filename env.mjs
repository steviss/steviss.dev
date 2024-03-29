import { loadEnv } from 'vite'
import { z } from 'zod'

const { SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, SANITY_HOST, SANITY_PORT, FONTAWESOME_NPM_AUTH_TOKEN } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
)

/**
 * Specify your server-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars.
 */
const server = z.object({
  SANITY_STUDIO_PROJECT_ID: z.string(),
  SANITY_STUDIO_DATASET: z.string(),
  SANITY_HOST: z.string(),
  SANITY_PORT: z.number(),
  SANITY_AUTH_TOKEN: z.string().optional(),
  FONTAWESOME_NPM_AUTH_TOKEN: z.string(),
})

/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars. To expose them to the client, prefix them with `SANITY_STUDIO_`.
 */
const client = z.object({
  SANITY_STUDIO_PROJECT_ID: z.string(),
  SANITY_STUDIO_DATASET: z.string(),
  SANITY_HOST: z.string(),
  SANITY_PORT: z.number(),
  SANITY_AUTH_TOKEN: z.string().optional(),
  FONTAWESOME_NPM_AUTH_TOKEN: z.string(),
})

/**
 * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
 * middlewares) or client-side so we need to destruct manually.
 *
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
  SANITY_STUDIO_PROJECT_ID: SANITY_STUDIO_PROJECT_ID,
  SANITY_STUDIO_DATASET: SANITY_STUDIO_DATASET,
  SANITY_HOST: SANITY_HOST ?? '0.0.0.0',
  SANITY_PORT: parseInt(SANITY_PORT, 10) ?? 3333,
  FONTAWESOME_NPM_AUTH_TOKEN,
}

// Don't touch the part below
// --------------------------

const merged = server.merge(client)

/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

let env = /** @type {MergedOutput} */ (process.env)

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === 'undefined'

  const parsed = /** @type {MergedSafeParseReturn} */ (
    isServer
      ? merged.safeParse(processEnv) // on server we can validate all env vars
      : client.safeParse(processEnv) // on client we can only validate the ones that are exposed
  )
  if (parsed.success === false) {
    console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors)
    throw new Error('Invalid environment variables')
  }

  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== 'string') return undefined
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith('SANITY_STUDIO_'))
        throw new Error(
          process.env.NODE_ENV === 'production'
            ? '❌ Attempted to access a server-side environment variable on the client'
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`,
        )
      return target[/** @type {keyof typeof target} */ (prop)]
    },
  })
  console.log('✅ All Required Env Variables present in the .env file.')
}
export { env }
