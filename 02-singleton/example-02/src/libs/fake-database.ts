export class FakeDatabase {
  public static connect(name: string) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(name, 1)

      request.onupgradeneeded = event => {
        const db = (event.target as IDBOpenDBRequest).result
        // Create sample store
        if (!db.objectStoreNames.contains('SampleStore')) {
          db.createObjectStore('SampleStore', {keyPath: 'id'})
        }
      }

      request.onsuccess = event => {
        const db = (event.target as IDBOpenDBRequest).result
        console.info('Database opened successfully')
        resolve(db)
      }

      request.onerror = event => {
        const error = (event.target as IDBOpenDBRequest).error
        console.info('Database error:', error)
        reject(error)
      }
    })
  }

  close(db: IDBDatabase) {
    db.close()
    console.info('Database closed')
  }
}
