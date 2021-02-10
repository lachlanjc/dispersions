import { Container, Flex, NavLink } from 'theme-ui'
import Link from 'next/link'

const Nav = () => (
  <Flex
    as="nav"
    variant="narrow"
    sx={{
      borderBottom: '1px solid',
      borderBottomColor: 'smoke',
      borderBottomWidth: 0.5,
      py: 3,
      display: 'flex',
      justifyContent: 'center',
      a: {
        mx: [2, 3],
        fontWeight: 'body',
        textTransform: 'uppercase',
        letterSpacing: 'headline',
        color: 'muted',
      },
    }}
  >
    <Link href="/" passHref>
      <NavLink>Home</NavLink>
    </Link>
    <Link href="/works" passHref>
      <NavLink>Works</NavLink>
    </Link>
    <Link href="/artist" passHref>
      <NavLink>Artist</NavLink>
    </Link>
  </Flex>
)

export default Nav
