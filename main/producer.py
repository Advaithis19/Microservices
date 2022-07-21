import pika, json

params = pika.URLParameters('amqps://tksrnopu:N9ILvlNaLc4ndbTD31M2QlJhr04b2Uv6@beaver.rmq.cloudamqp.com/tksrnopu')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin', body=json.dumps(body), properties=properties)