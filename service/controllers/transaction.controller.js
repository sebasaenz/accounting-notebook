let accountValue = 10000;
let transactions = [
    {
        id: 1,
        type: 'credit',
        amount: 1000,
        effectiveDate: '2019-12-09 21:00:19'
    },
    {
        id: 2,
        type: 'debit',
        amount: 1500,
        effectiveDate: '2019-12-09 23:00:19'
    },
]

exports.accountValue = (req, res, next) => {
    res.status(200).json({
        accountValue
    });
}

exports.index = (req, res, next) => {
    res.status(200).json({
        transactions
    });
}

exports.find = (req, res, next) => {
    const transaction = transactions.find(val => val.id == req.params.id)

    if (transaction) {
        res.status(200).json({
            transaction
        });
    } else {
        res.status(404).json({
            'status': 'not found'
        });
    }
}

exports.create = (req, res, next) => {

    const VALID_PAYMENT_METHODS = ['credit', 'debit'];

    if (VALID_PAYMENT_METHODS.indexOf(req.body.type) == -1) {
        res.status(422).json({
            'status': 'invalid input'
        });
    } else if (accountValue < req.body.amount) {
        res.status(403).json({
            'status': 'forbidden operation: transaction amount is too big'
        });
    } else {
        accountValue -= req.body.amount

        let transactionId = 1
        if (transactions.length > 0) {
            transactionId = transactions[transactions.length - 1].id + 1
        }

        let newTransaction = {
            id: transactionId,
            type: req.body.type,
            amount: req.body.amount,
            effectiveDate: new Date()
        }
        
        transactions.push(newTransaction)

        res.status(200).json({
            'status': 'transaction stored'
        });
    }
}