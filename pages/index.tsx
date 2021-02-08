import { Box, Container, Heading, Text } from 'theme-ui'

const Home = () => (
  <Box as="header" sx={{ bg: 'text', color: 'background' }}>
    <Container>
      <Heading as="h1" variant="ultratitle">
        Christopher Campbell’s debut online show.
      </Heading>
      <Text as="p" variant="subtitle">
        Opening March 1.
      </Text>
    </Container>
  </Box>
)

export default Home
