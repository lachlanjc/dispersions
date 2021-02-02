import { Grid, Heading, Container, Box } from 'theme-ui'

const Works = ({ works }) => (
  <Container py={[4, 5]}>
    <Heading as="h1" variant="title">
      All works
    </Heading>
    <Grid columns={[null, 2, 3]} gap={[3, 4]} mt={4}>
      <Box sx={{ width: '100%', pb: '100%', bg: 'sunken' }} />
      <Box sx={{ width: '100%', pb: '100%', bg: 'sunken' }} />
      <Box sx={{ width: '100%', pb: '100%', bg: 'sunken' }} />
      <Box sx={{ width: '100%', pb: '100%', bg: 'sunken' }} />
      <Box sx={{ width: '100%', pb: '100%', bg: 'sunken' }} />
    </Grid>
  </Container>
)

export default Works
