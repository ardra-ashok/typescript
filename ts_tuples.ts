const color: [number,number,number] = [255,0,766]
type HTTPResponse = [number,string];
const goodRes: HTTPResponse = [200,"ok"]
// this will work
goodRes.push(123)

const responses: HTTPResponse[] = [[404,"Not Found"],[200,"OK"]]

enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED = 23,
    RETURNED
}
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys{
    UP = "up",
    LEFT = "left", 
    RIGHT = "right",
    DOWN ="down",
    ERROR = 234
}

const order = {
    orderNumber: 77771666,
    status: OrderStatus.PENDING
}
