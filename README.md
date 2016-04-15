# The Almighty Telegrembo

AMQP Telegram Bot for the win.
Use it with caution and care!

## Requirements

* [Node.JS](https://nodejs.org)
* Some AMQP server (tested only with [RabbitMQ](https://www.rabbitmq.com),
  but theoretically can work with others)
  
## Installation

    git clone https://github.com/maprox/telegrembo.git
    cd telegrembo
    npm install
    
## Run

    TOKEN=YOUR_TELEGRAM_BOT_TOKEN node .

### Options


* **TOKEN** ( **required** ) - Telegram bot token which you got from
 [@BotFather](tg://resolve?domain=BotFather)

* **AMQP_CONNECTION** [*amqp://guest:guest@127.0.0.1//*] - AMQP
    connection string

* **AMQP_EXCHANGE** [*telegram*] - exchange name in AMQP server.
    **Telegrembo** listens for messages in a query bound to this exchange

* **AMQP_QUEUE_NAME** [*telegram*] - AMQP query name to listen for messages

* **AMQP_QUEUE_ROUTING_KEY** [*telegram*] - Routing key for the query

## Description

Telegrembo is a simple bot which listens for a message in an AMQP queue
and forwards it to the specified telegram channel.

Current version supports only text messages.
AMQP message should be a simple json with two fields:

    {
        "send_to": "3773839202",
        "message": "Hello Virtual World!"
    }


---

[![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/fuck-it-ship-it.svg)](http://forthebadge.com)