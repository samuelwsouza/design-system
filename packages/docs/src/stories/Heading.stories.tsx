import { type Meta, type StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In mollitia, voluptas nemo quas dolores itaque perferendis vero aliquid voluptate praesentium aperiam officiis, perspiciatis unde repudiandae, dicta nulla sapiente explicabo earum?',
  }, 
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}