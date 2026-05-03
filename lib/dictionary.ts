import 'server-only'

import type enDict from '../dictionaries/en.json'

export type Locale = 'en' | 'id'
export type Dictionary = typeof enDict

const dictionaries = {
  en: () =>
    import('../dictionaries/en.json').then(
      module => module.default as Dictionary
    ),
  id: () =>
    import('../dictionaries/id.json').then(
      module => module.default as Dictionary
    )
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en()
}
