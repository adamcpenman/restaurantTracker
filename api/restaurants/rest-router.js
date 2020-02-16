const router = require('express').Router()

const RestM = require('./rest-module')

router.get('/', (req, res) => {
    RestM.find()
        .then(rest => {
            res.json(rest)
        })
        .catch(err => res.send(err))
}, [])

router.get('/:id', (req, res) => {
    const id = req.params.id;

    RestM.findById(id)
        .then(rest => {
            if(rest) {
                res.status(200).json(rest)
            } else {
                res.status(404).json({
                    error: "This ID can not be found"
                })
            }
        })
})

router.post('/', (req, res) => {
    const data = req.body;
    console.log(data)

    RestM.add(data)
        .then(rest => {
            res.status(201).json(rest)
        })
        .catch (err => {
            res.status(500).json({ message: "Failed to add new entry"})
        })
})



router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    RestM.findById(id)
        .then(rest => {
            if (rest) {
                RestM.update(changes, id)
                .then(updateR => {
                    res.json(updateR)
                })
            } else {
                res.status(404).json({ message: "Could not find this entry"})
            }
        })
        .catch (err => {
            res.status(500).json({ message: "Failed to update entry"})
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    RestM.remove(id)
        .then(deleted => {
            if (deleted) {
                res.json({ removed: `${id}`})
            } else {
                res.status(404).json({ message: 'Could not find entry'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete entry'})
        })
})

module.exports = router