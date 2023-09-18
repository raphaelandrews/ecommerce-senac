'use client'

import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { getOrders } from "@/actions/get-orders";
import Container from "@/components/ui/container";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface OrdersClientProps {
    userId: string | null;
}

const OrdersClient = ({ userId }: OrdersClientProps) => {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const productsData = await getOrders({
                    userId: userId,
                });

                setOrders(productsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);
   
    return (
        <Container>
            <div className="space-y-10 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {orders.map((order, index) => (
                        <Card key={index + 1}>
                            <CardHeader>
                                <CardTitle className="text-base">OrderId: {order.id}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {order.OrderId.map((items: any, index: number) => (
                                    <div key={index + 1}>
                                        <p>{items.product_id.name}</p>
                                        <p>{items.price}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default OrdersClient;
