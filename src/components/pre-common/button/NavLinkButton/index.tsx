import Link from 'next/link'
import Icon from '../../../common/Icon'
import { usePathname } from 'next/navigation'

interface INavLinkButtonProps {
  to?: string
  icon: string
  label: string
  onClick?: () => void
}

const NavLinkButton = (props: INavLinkButtonProps) => {
  const { to, icon, label, onClick } = props
  const pathname = usePathname()
  const isActive = pathname === to

  const display = (children: React.ReactNode) => {
    const className = 'relative p-[12px] flex gap-[16px] font-medium duration-150 group'
    if (to) {
      return (
        <Link href={to} className={className}>
          {children}
        </Link>
      )
    } else if (onClick) {
      return (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )
    }
    return <div>{children}</div>
  }

  return display(
    <>
      <Icon name={icon} className="text-blue-c1" />
      <span
        className={
          'text-grey-#3 group-hover:!text-blue-#3 group-hover:font-bold duration-150' +
          (isActive ? ' !text-blue-#3 font-bold' : '')
        }
      >
        {label}
      </span>
    </>
  )
}

export default NavLinkButton
