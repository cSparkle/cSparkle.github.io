import { createClient } from 'contentful'

export const createContentfulClient = () => {
  return createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  })
}

export const getPosts = async () => {
  const client = createContentfulClient()

  try {
    const response = await client.getEntries()
    console.log('items; ', response.items)
    console.log('typeof', typeof response)
    return response
  } catch (error) {
    console.error(error)
  }
}
