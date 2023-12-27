import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { Navlink } from './navlink'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Navlink to="/">
            <Home className="h-4 w-4" />
            Início
          </Navlink>
          <Navlink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            pedidos
          </Navlink>
        </nav>
      </div>
    </header>
  )
}
