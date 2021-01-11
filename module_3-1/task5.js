/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    count: 0,
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            id: this.count++,
            amount,
            type
        }
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
        this.transactions.push(transaction);
        this.balance += amount;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Cнятие ${amount} не возможно, недостаточно средств`)
        } else {
            const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
            this.transactions.push(transaction);
            this.balance -= amount;
        }
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        return this.transactions.find(item => item.id === id);
    },
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        this.transactions.forEach(item => {
            if (item.type === type) {
                total += item.amount;
            }
        });
        return total;
    },
};

account.deposit(1000);
account.deposit(5000);
account.deposit(1000);
account.deposit(10000);
account.withdraw(4000);
account.deposit(40000);
account.withdraw(30000);
account.deposit(2000);

console.log(account.getTransactionTotal(Transaction.WITHDRAW));
