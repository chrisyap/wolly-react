import React from 'react';

import { Avatar } from './Avatar';

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['tiny', 'small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
  parameters: {
    componentSubtitle:
      'Displays an image that represents a user or organization',
    docs: { storyDescription: 'asdsad' },
  },
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: 'large',
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: 'Tom Coleman',
  src: 'https://avatars2.githubusercontent.com/u/132554',
};
Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: '4 sizes are supported.',
  },
};

export const Initials = (args) => (
  <div>
    <Avatar username="Tom Coleman" size={args.size} />
    <Avatar username="Dominic Nguyen" size={args.size} />
    <Avatar username="Kyle Suss" size={args.size} />
    <Avatar username="Michael Shilman" size={args.size} />
  </div>
);

export const Loading = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template = (args) => <Avatar {...args} />;

export const Controls = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Controls.args = {
  loading: false,
  size: 'tiny',
  username: 'Dominic Nguyen',
  src: 'https://avatars2.githubusercontent.com/u/263385',
};
