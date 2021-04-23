import { ReactNode } from 'react'
import { Box, Grid, Heading, Text, Textarea, Input, Button } from 'theme-ui'
import Image from 'next/image'
import { imageUrl } from '@/lib/worklist'
import { useForm, ValidationError } from '@formspree/react'

type Props = { work: Artwork; img?: number }

const Work = ({ work, img = 0 }: Props) => {
  const cover = work.images[img]
  return (
    <Grid
      as="section"
      columns="128px 1fr"
      gap={3}
      sx={{
        my: [3, 4],
        alignItems: 'center',
        textDecoration: 'none',
        color: 'text',
        lineHeight: 'title',
        img: { bg: 'sunken' },
      }}
    >
      {cover && (
        <Image
          src={imageUrl(cover.path)}
          alt={cover.caption}
          width={cover.width}
          height={cover.height}
          objectFit="contain"
        />
      )}
      <Box>
        <Text
          as="strong"
          sx={{
            display: 'block',
            fontSize: [3, 4],
          }}
        >
          {work.title}
        </Text>
        <Text as="span" variant="caption">
          {work.date}
        </Text>
      </Box>
    </Grid>
  )
}

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <Grid
    as="label"
    columns={[null, '128px 1fr']}
    gap={[2, 3]}
    sx={{
      mb: 3,
      alignItems: 'center',
      'input, textarea': {
        bg: 'snow',
      },
    }}
  >
    <Text as="span" sx={{ color: 'secondary', textAlign: [null, 'right'] }}>
      {label}
    </Text>
    {children}
  </Grid>
)

const InquireForm = ({ work }: { work: Artwork }) => {
  const [state, handleSubmit] = useForm('xrgrgnrl')
  if (state.succeeded) {
    return (
      <Box sx={{ py: [4, 5], textAlign: 'center' }}>
        <Heading variant="title" sx={{ fontSize: [3, 4], mb: 2 }}>
          Thanks for your inquiry.
        </Heading>
        <Text as="p" variant="caption">
          You’ll hear back from me soon.
        </Text>
      </Box>
    )
  }
  return (
    <>
      <Heading variant="title" sx={{ fontSize: [3, 4], mb: 2 }}>
        Inquire about purchasing
      </Heading>
      <Text as="p" variant="caption">
        Works begin at $10k USD.
      </Text>
      <Work work={work} />
      <Box
        as="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        <input type="hidden" name="worklist" value={work.worklist} />
        <Field label="Name">
          <Input type="text" name="name" required />
        </Field>
        <Field label="Email">
          <Input type="email" name="email" required />
        </Field>
        <Field label="City">
          <Input type="text" name="city" />
        </Field>
        <Field label="Message">
          <Textarea
            name="message"
            defaultValue={`I would like to know more about ${work.title}. Please send me further details on pricing and availability.`}
          />
        </Field>
        <Button
          type="submit"
          children="Submit inquiry"
          variant="outline"
          sx={{ color: 'primary', mx: 'auto' }}
        />
      </Box>
    </>
  )
}

export default InquireForm
