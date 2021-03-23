import { useState, useEffect, FormEvent } from 'react'
import {
  Alert,
  Button,
  Card,
  Grid,
  Heading,
  IconButton,
  Input,
  Label,
  Spinner,
  Text,
} from 'theme-ui'
import { ArrowRight } from '@/components/icons'

const Loading = () => (
  <Spinner
    size={24}
    color="currentColor"
    sx={{ margin: '0 !important', textAlign: 'center', minWidth: '52px' }}
  />
)

const Signup = () => {
  const [email, setEmail] = useState<string>('')
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [done, setDone] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (localStorage) {
      const address = localStorage.getItem('email-subscribed')
      if (address) {
        setEmail(address)
        setDone(true)
      }
    }
  }, [])

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (email.length < 3) return
    setSubmitting(true)
    let submission = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email, timestamp: new Date() }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    if (submission.ok) {
      localStorage.setItem('email-subscribed', email)
      setSubmitting(false)
      setDone(true)
      setError('')
    } else {
      setSubmitting(false)
      const body = await submission.json()
      setError(body?.error || 'Something went wrong.')
    }
  }

  return (
    <Card
      sx={{
        variant: 'cards.translucentDark',
        maxWidth: 'narrowPlus',
        mx: 'auto',
        color: 'background',
      }}
    >
      {done ? (
        <>
          <Text as="p" sx={{ fontSize: 2, minWidth: 256 }}>
            <strong>Signed up!</strong>
          </Text>
          <Text as="p" variant="caption">
            {email}
          </Text>
          <Button
            onClick={() => setDone(false)}
            variant="outline"
            sx={{
              color: 'white',
              fontSize: 1,
              fontWeight: 'inherit',
              borderWidth: 1,
              mt: 3,
              px: 2,
              py: 1,
            }}
          >
            Sign up again
          </Button>
        </>
      ) : (
        <Grid
          as="form"
          onSubmit={onSubmit}
          gap={3}
          columns="1fr auto"
          sx={{
            gridTemplateColumns: '1fr auto',
            textAlign: 'left',
            alignItems: 'center',
          }}
        >
          <Heading
            as="h2"
            variant="subheadline"
            sx={{
              gridColumn: 'span 2',
              mt: 0,
              px: [2, 4],
              textAlign: 'center',
            }}
          >
            Get an email
            <br />
            about opening day
          </Heading>
          <div>
            <Label
              htmlFor="email"
              sx={{
                position: 'absolute',
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)',
                height: 1,
                width: 1,
              }}
            >
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="me@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              sx={{
                bg: 'background',
                color: 'text',
              }}
            />
          </div>
          <IconButton
            type="submit"
            sx={{
              transition: '0.125s ease-in-out',
              transitionProperty: 'box-shadow, transform',
              color: 'background',
              borderRadius: 'circle',
              ':hover,:focus': {
                boxShadow: 'inset 0 0 0 1px white',
                transform: 'rotate(-45deg)',
              },
            }}
          >
            {submitting ? <Loading /> : <ArrowRight />}
          </IconButton>
        </Grid>
      )}
      {error && (
        <Alert variant="primary" sx={{ bg: 'red', mt: 3 }}>
          <Text as="p">{error.toString()}</Text>
        </Alert>
      )}
    </Card>
  )
}

export default Signup
