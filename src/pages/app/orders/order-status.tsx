export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, { title: string; color: string }> = {
  pending: { title: 'Pendente', color: 'bg-slate-400' },
  canceled: { title: 'Cancelado', color: 'bg-rose-500' },
  delivered: { title: 'Entregue', color: 'bg-emerald-500' },
  delivering: { title: 'Em entrega', color: 'bg-amber-500' },
  processing: { title: 'Em preparo', color: 'bg-amber-500' },
}

export function OrderStatus({ status }: OrderStatusProps) {
  const orderStatus = orderStatusMap[status]

  return (
    <div className="flex items-center gap-2">
      <span className={'h-2 w-2 rounded-full ' + orderStatus.color} />
      <span className="font-medium text-muted-foreground">
        {orderStatus.title}
      </span>
    </div>
  )
}
