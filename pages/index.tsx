import { Flex, Container, Heading, Text } from 'theme-ui'

const Home = () => (
  <Flex
    as="header"
    sx={{
      bg: 'text',
      color: 'background',
      minHeight: 'calc(100vh - 56px)',
      textAlign: 'center',
      placeItems: 'center',
      py: [4, 5],
    }}
  >
    <Container variant="copy">
      <Heading as="h1" variant="ultratitle">
        Christopher Campbell’s debut online exhibition.
      </Heading>
      <Text as="p" variant="subtitle" color="snow" mt={4}>
        Opening March 1.
      </Text>
    </Container>
  </Flex>
)

export default Home
