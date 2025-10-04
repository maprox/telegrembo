module.exports = {
    /**
     * AMQP configuration
     * Currently tested and supported only RabbitMQ server
     */
    amqp: {
        host: process.env.AMQP_HOST || '127.0.0.1',
        port: process.env.AMQP_PORT || '5672',
        username: process.env.AMQP_USERNAME || 'guest',
        password: process.env.AMQP_PASSWORD || 'guest',
        exchange: process.env.AMQP_EXCHANGE || 'telegram',
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