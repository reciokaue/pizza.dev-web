import { coerce, z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: coerce.boolean(),
})

export const env = envSchema.parse(import.meta.env)
