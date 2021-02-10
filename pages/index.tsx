import { Flex, Container, Heading, Text } from 'theme-ui'
import Signup from '@/components/signup'
import BGImg from '@/components/bg-img'

const Home = () => (
  <Flex
    as="main"
    sx={{
      flexDirection: 'column',
      bg: 'text',
      color: 'background',
      position: 'relative',
      width: '100%',
      minHeight: 'calc(100vh - 56px)',
      textAlign: 'center',
      placeItems: 'center',
      py: 5,
    }}
  >
    <BGImg
      src="/worklist/2.2020.039_009_4096p.jpg"
      height={4096}
      width={2733}
      layout="responsive"
    />
    <Container
      variant="copy"
      sx={{
        textShadow:
          '0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Text as="p" variant="eyebrow" color="white" mb={3}>
        Opening March 1
      </Text>
      <Heading as="h1" variant="ultratitle" mb={[4]}>
        Christopher Campbell’s debut online exhibition.
      </Heading>
    </Container>
    <Signup />
  </Flex>
)

export default Home
