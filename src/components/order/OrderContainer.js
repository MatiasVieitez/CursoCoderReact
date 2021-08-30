import { useState } from 'react'
import { firestore, getTimestamp } from '../firebase'
import Order from './Order'

const OrderContainer = ({ cart }) => {
    const [LastOrder, setLastOrder] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = (e, buyer) => {
        e.preventDefault()
        setIsLoading(true)

        const newOrder = {
            buyer: buyer,
            items: cart,
            date: getTimestamp(),
            total: cart.map((item) => item.price).reduce((prev, curr) => prev + curr)
        }

        firestore().collection('Orders').add(newOrder).then(({ id }) => {
            setLastOrder(id)
        }).finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <Order onSubmit={onSubmit} LastOrder={LastOrder} isLoading={isLoading} />
    )
}

export default OrderContainer
