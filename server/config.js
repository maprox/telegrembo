module.exports = {
    /**
     * AMQP connection string
     * Currently tested and supported only RabbitMQ server
     *
     * @type {*|string}
     */
    amqp: {
        exchange: process.env.AMQP_EXCHANGE || 'telegram',
        connection: process.env.AMQP_CONNECTION ||
            'amqp://guest:guest@127.0.0.1//',
        queue: {
            name: process.env.AMQP_QUEUE_NAME || 'telegram',
            routingKey: process.env.AMQP_QUEUE_ROUTING_KEY || 'telegram'
        }
    },

    /**
     * Telegram configuration
     */
    telegram: {
        token: process.env.TOKEN
    }
};