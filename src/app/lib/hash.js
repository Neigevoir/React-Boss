import sha256 from 'hash.js/lib/hash/sha/256'

export const hash_sha256 = exchangeValue =>
  sha256()
    .update(exchangeValue)
    .digest('hex')
