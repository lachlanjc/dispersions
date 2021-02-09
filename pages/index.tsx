import { Box, Container, Heading, Text } from 'theme-ui'

const Home = () => (
  <Box as="header" sx={{ bg: 'text', color: 'background', py: [4, 5] }}>
    <Container>
      <Heading as="h1" variant="ultratitle">
        Christopher Campbell’s debut online exhibition.
      </Heading>
      <Text as="p" variant="subtitle" color="snow" mt={4}>
        Opening March 1.
      </Text>
    </Container>
  </Box>
)

export default Home
