import { SimpleDB } from '../src/utils/simpleDB.ts'

async function main() {
  try {
    const db = new SimpleDB({ dbPath: './db/test_sey.sqlite', cacheSize: 10 })
    const col = db.collection('testcoll')

    // Clean up any existing doc with same _id by just creating a fresh one
    const raw = col.insert({ foo: 'bar', counter: 0, arr: [] })
    const doc = Array.isArray(raw) ? raw[0] : raw
    if (!doc) throw new Error('Insert returned no document')
    console.log('Inserted:', doc)

    const changes = col.updateAtomic(
      { _id: doc._id },
      {
        $set: { foo: 'baz' },
        $inc: { counter: 5 },
        $push: { arr: { added: true } }
      }
    )
    console.log('updateAtomic changes:', changes)

    const found = col.findById(doc._id)
    console.log('Found after update:', found)

    const hotCol = db.collection('hotmix', {
      columns: { name: 'TEXT' }
    })
    const suffix = String(Date.now())
    const oldName = `old-${suffix}`
    const newName = `new-${suffix}`
    const mixed = hotCol.insert({ name: oldName, extra: 'before' })
    const mixedDoc = Array.isArray(mixed) ? mixed[0] : mixed
    if (!mixedDoc) throw new Error('Hot-column insert returned no document')

    hotCol.update({ _id: mixedDoc._id }, { name: newName, extra: 'after' })

    const foundByNewName = hotCol.findOne({ name: newName })
    const foundByOldName = hotCol.findOne({ name: oldName })
    if (foundByNewName?._id !== mixedDoc._id || foundByOldName) {
      throw new Error('Mixed hot/non-hot update desynchronized indexes')
    }
    console.log('Mixed hot/non-hot update: ok')

    db.close()
    process.exit(0)
  } catch (err) {
    console.error('Test failed:', err)
    process.exit(1)
  }
}

main()
