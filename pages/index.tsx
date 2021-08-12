import { Flex, Container, Heading, Text } from 'theme-ui'
import Signup from '@/components/signup'
import BGImg from '@/components/bg-img'

const Home = () => (
  <Flex
    as="main"
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      bg: 'text',
      color: 'background',
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      textAlign: 'center',
      placeItems: 'center',
      py: 5,
    }}
  >
    <BGImg
      alt="Patch of one of Christopher's drawings, a grid of graphite squares with one orange accent"
      src="/worklist/2.2020.039_2_processc.jpg"
      height={4096}
      width={2733}
      priority
    />
    <Container
      variant="copy"
      sx={{
        textShadow:
          '0 1px 2px rgba(0, 0, 0, 0.75), 0 2px 6px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Text as="p" variant="eyebrow" color="white" mb={3}>
        Coming soon
      </Text>
      <Heading as="h1" variant="ultratitle" mb={[4, 5]}>
        Christopher Campbell’s debut online exhibition.
      </Heading>
    </Container>
    <Signup />
  </Flex>
)

export default Home
