import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = {
  color: "orange",
  textDecoration: 'underline'
}
export const ActiveLink = ({name, href}) => {
  const {asPath} = useRouter();

  return (
    <Link href={href} style={ asPath == href ? styles : null} >
      {name}
    </Link>
  )
}
