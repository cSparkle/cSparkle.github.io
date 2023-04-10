import { createClient } from 'contentful'

export const createContentfulClient = () => {
  console.log('space id: ', import.meta.env.VITE_CONTENTFUL_SPACE_ID)
  console.log('access: ', import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN)
  return createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  })
}

export const getPosts = async () => {
  const client = createContentfulClient()

  try {
    const response = await client.getEntries()

    console.log({ response })
    return response
  } catch (error) {
    console.error(error)
  }
}
