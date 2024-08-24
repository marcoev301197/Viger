import Link from 'next/link'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import styles from './Header.module.sass'
import dynamic from 'next/dynamic'

const NoSSRShoppingCart = dynamic(() => import('../ShoppingCart'), { ssr: false })

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/store">
              Tienda
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<Link href="/my-account">Bienvenido! {customer.firstName}</Link>) : (<Link href="/login">Iniciar Sesión</Link>)}
        <NoSSRShoppingCart />
      </div>
    </header>)
}